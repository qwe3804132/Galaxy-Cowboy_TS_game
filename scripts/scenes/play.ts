module scenes {
    export abstract class PlayScene extends objects.Scene {
        private _map: objects.Map;
        private _topAnchor: number;
        private _bottomAnchor: number;
        private _leftAnchor: number;
        private _rightAnchor: number;
        private _dx: number = 5;
        private _dy: number = 5;
        private _scoreBoard: managers.ScoreBoard;

        protected _tooltips: ui.Tooltip[] = [];
        protected _enemies: animate.Enemy[];
        protected _projectiles: objects.Projectile[] = [];
        protected _obstra:objects.Destructible[] = [];
        protected _powerups: objects.Powerup[] = [];
        protected _shields: objects.Shield[] = [];
        protected _player: animate.Player;
        protected _tutorial: scenes.TutorialScene;
        protected _tutorialPages: scenes.TutorialPage[];

        public title: string = "";

        get topBoundary(): number {
            return this._topAnchor - managers.Game.TOP_ANCHOR;
        }
        get bottomBoundary(): number {
            return this._bottomAnchor + (managers.Game.HEIGHT - managers.Game.BOTTOM_ANCHOR);
        }
        get leftBoundary(): number {
            return this._leftAnchor - managers.Game.LEFT_ANCHOR;
        }
        get rightBoundary(): number {
            return this._rightAnchor + managers.Game.RIGHT_ANCHOR;
        }
        
        get enemies(): animate.Enemy[] {
            return this._enemies;
        }
        get player(): animate.Player {
            return this._player;
        }
        get projectiles(): objects.Projectile[] {
            return this._projectiles;
        }
        get tooltips(): ui.Tooltip[] {
            return this._tooltips;
        }

        constructor(mapString:string) {
            super();
            this._map = new objects.Map(mapString);
            managers.Game.isPlaying = true;
            this.on("click", this._onClick);
        }

        public update():number {
            if (managers.Game.keyboardManager.paused) {
                this._enemies.forEach(enemy => {
                    enemy.stop();
                });
                return managers.Game.currentScene;
            }

            // TODO: centralize collision check
            this._player.isColliding = false;
            this._player.update();
            this._checkBounds();

            this._tooltips.forEach(tooltip => {
                tooltip.update();
            });
            
            // Check for collisions
            this._updateEnemies();
            this._updateProjectiles();
            this._updateObstra();
            this._updatePowerups();
            this._updateShields();

            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }

            return managers.Game.currentScene;
        }

        public start() {
            this._topAnchor = managers.Game.TOP_ANCHOR;
            this._bottomAnchor = managers.Game.BOTTOM_ANCHOR;
            this._leftAnchor = managers.Game.LEFT_ANCHOR;
            this._rightAnchor = managers.Game.RIGHT_ANCHOR;
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            managers.Game.scoreBoard.Score = managers.Game.previousScore;

            this._overlay = new createjs.Shape(
                new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT)
            );
            this._displayTitle();
        }

        public main():void {
            this.addChildAt(this._map, managers.Game.INDEX_BACKGROUND);
            this._enemies.forEach(enemy => {
                this.addChildAt(enemy, managers.Game.INDEX_GAMEOBJECTS);
            });
            this.addChildAt(this._player, managers.Game.INDEX_GAMEOBJECTS);
            this._tooltips.forEach(tooltip => {
                this.addChildAt(tooltip, managers.Game.INDEX_UI);
            });
            this._obstra.forEach(obstr => {
                this.addChildAt(obstr, managers.Game.INDEX_GAMEOBJECTS);
            });
            this.addChildAt(this._scoreBoard, managers.Game.INDEX_UI);
            managers.Game.scoreBoard.EnemyCount = this._enemies.length;

            if (managers.Game.backgroundMusic != "bgm")
                managers.Game.backgroundMusic = "bgm";
        }

        public addProjectile(projectile:objects.Projectile) {
            this._projectiles.push(projectile);
            this.addChildAt(projectile, managers.Game.INDEX_GAMEOBJECTS);
        }

        public addPowerup(powerup:objects.Powerup) {
            this._powerups.push(powerup);
            this.addChildAt(powerup, managers.Game.INDEX_GAMEOBJECTS);
        }

        public addShield(shield:objects.Shield) {
            this._shields.push(shield);
            this.addChildAt(shield, managers.Game.INDEX_GAMEOBJECTS);
        }

        public pause() {
            managers.Game.keyboardManager.paused = true;
            this.addChild(this._overlay);
        }

        public unpause() {
            managers.Game.keyboardManager.paused = false;
            // Gradually fade out the overlay
            createjs.Tween.get(this._overlay).to({alpha: 0}, 1000);
        }

        public switchScene(scene:config.Scene) {
            managers.Game.previousScore = managers.Game.currentScore;
            managers.Game.currentScene = scene;
        }

        private _displayTitle() {
            this.pause();

            let lblTitle: ui.Label = new ui.Label(this.title.toUpperCase(), "40pt",
                managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 0, 0, true);
            lblTitle.y = (managers.Game.HEIGHT * 0.5) - 50;
            lblTitle.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_WARM, 2, 3, 0);
            this.addChild(lblTitle);
            
            // Animate title across the screen
            createjs.Tween.get(lblTitle, {loop: false})
                .to({x:300}, 1500, createjs.Ease.get(3))
                .to({alpha: 0}, 400)
                .on("complete",
                    () => { this.unpause(); });
        }

        private _checkBounds() {
            let moveX: number = 0;
            let moveY: number = 0;
            if (this._player.y <= this._topAnchor) {
                if (managers.Game.keyboardManager.moveForward) {
                    if (!(this.y + this._dy > this._map.height - managers.Game.HEIGHT)) {
                        moveY = this._dy;
                    }
                }
            }
            if (this._player.y >= this._bottomAnchor) {
                if (managers.Game.keyboardManager.moveBackward) {
                    if (!(this.y - this._dy < this.bottomBoundary)) {
                        moveY = -this._dy;
                    }
                }
            }

            if (this.x < 0 || this.x > this._map.width - managers.Game.WIDTH) {
                // Left & right boundary
                moveX = 0;
            }

            this._move(moveX, moveY);
        }

        private _move(x:number=0, y:number=0) {
            this.x += x;
            this._leftAnchor -= x;
            this._rightAnchor -= x;

            this.y += y;
            this._topAnchor -= y;
            this._bottomAnchor -= y;
            this._scoreBoard.y -= y;
        }

        private _onClick() {
            if (managers.Game.keyboardManager.paused)
                return;
            this._player.attack();
        }

        public destroyAll() {
            this._projectiles.forEach(projectile => {
                projectile.destroy();
                this.removeObject(projectile);
            });
            this._enemies.forEach(enemy => {
                enemy.destroy(true);
                this.removeObject(enemy, true);
            });
            this._obstra.forEach(obstra => {
                obstra.destroy(true);
                this.removeObject(obstra, true);
            });
        }

        private _updateEnemies() {
            let keepers: animate.Enemy[] = [];

            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }
             
                this._projectiles.forEach(projectile => {
                    if (projectile.shooter instanceof animate.Player) {
                        if (managers.Collision.check(enemy, projectile)) {
                            this.removeObject(projectile);
                        }
                    }
                });

                if (enemy.hp <= 0) {
                    managers.Game.scoreBoard.EnemyCount--;
                    this.removeObject(enemy);
                } else {
                    keepers.push(enemy);
                }
            });

            this._enemies = keepers;
        }

        private _updateProjectiles() {
            if (this._projectiles.length) {
                let keepers: objects.Projectile[] = [];
                this._projectiles.forEach(projectile => {
                    projectile.update();

                    managers.Collision.check(projectile, this._player);
                    this._obstra.forEach(obstra => {
                        if (managers.Collision.check(projectile, obstra)) {
                            this.removeObject(projectile);
                            if (obstra.isDestroyed)
                                this.removeObject(obstra);
                        }
                    });

                    this._shields.forEach(shield => {
                        managers.Collision.check(projectile, shield);
                        if (shield.isDestroyed)
                            this.removeObject(shield);
                    });

                    this._projectiles.forEach(p => {
                        if (managers.Collision.check(p, projectile)) {
                            if (p.isDestroyed) {
                                this.removeObject(p);
                            }
                        }
                    });

                    if (projectile.isDestroyed) {
                        this.removeObject(projectile);
                    } else {
                        keepers.push(projectile);
                    }
                });
                this._projectiles = keepers;
            }
        }

        private _updateObstra() {
            let keepers: objects.Destructible[] = [];
            this._obstra.forEach(obstra => {
                managers.Collision.check(obstra, this._player);
                this._enemies.forEach(enemy => {
                    managers.Collision.check(obstra, enemy);
                })

                if (obstra.isDestroyed) {
                    this.removeObject(obstra);
                } else {
                    keepers.push(obstra);
                }
            });
            this._obstra = keepers;
        }

        private _updatePowerups() {
            let keepers: objects.Powerup[] = [];
            this._powerups.forEach(powerup => {
                managers.Collision.check(powerup, this._player);
                if (powerup.isDestroyed) {
                    createjs.Tween.get(powerup)
                        .to({alpha: 0, y: powerup.y - 10}, 500, createjs.Ease.getPowOut(2))
                        .on("complete", () => { this.removeObject(powerup); });
                } else {
                    keepers.push(powerup);
                }
            });
            this._powerups = keepers;
        }

        private _updateShields() {
            let keepers: objects.Shield[] = [];
            this._shields.forEach(shield => {
                shield.update();
                if (shield.isDestroyed) {
                    this.removeObject(shield);
                } else {
                    keepers.push(shield);
                }
            });
            this._shields = keepers;
        }
    }
}