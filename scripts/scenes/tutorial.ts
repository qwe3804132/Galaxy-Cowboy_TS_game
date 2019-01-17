module scenes {
    export class TutorialPage {
        // text: text to display in the tutorial page
        // func: function to call in the tutorial page (e.g. function with animation to play)
        constructor (public text:string, public func:()=>void) {}
    }

    export class TutorialScene extends objects.Scene {
        private _background: ui.Background;
        private _lblPrompt: ui.Label;
        private _nextButton: ui.Button;
        private _closeButton: ui.Button;

        private _pages: TutorialPage[];
        private _pageIndex: number = 0;
        private _nextScene: config.Scene;

        protected _enemies: animate.EnemyDummy[] = [];
        protected _projectiles: objects.Projectile[] = [];
        protected _obstra:objects.DestructibleDummy[] = [];
        protected _powerups: objects.PowerupDummy[] = [];
        protected _shields: objects.Shield[] = [];
        protected _player: animate.PlayerDummy;
        protected _canFire: boolean = false;

        get topBoundary(): number {
            return 0;
        }
        get bottomBoundary(): number {
            return 350;
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

        get pages(): TutorialPage[] {
            return this._pages;
        }

        constructor(map:string, pages:TutorialPage[], nextScene:config.Scene) {
            super();
            this._background = new ui.Background(map);
            this._pages = pages;
            this._nextScene = nextScene;
        }

        public start() {
            this._overlay = new createjs.Shape(
                new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT)
            );

            this._closeButton = new ui.Button("close", managers.Game.WIDTH, 20, 0.7);
            this._closeButton.x -= this._closeButton.width + 20;
            this._nextButton = new ui.Button("next", managers.Game.WIDTH, managers.Game.HEIGHT, 0.7);
            this._nextButton.x -= this._nextButton.width + 20;
            this._nextButton.y -= this._nextButton.height + 20;

            this._lblPrompt = new ui.Label(this._pages[0].text, "16pt",
                managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            this._lblPrompt.lineWidth = managers.Game.WIDTH * 0.9;
            ui.centreHorizontal(this._lblPrompt);
            this._lblPrompt.y = 360;

            this._lblPrompt.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
        }

        public main() {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._overlay, managers.Game.INDEX_GAMEOBJECTS);
            this.addChildAt(this._lblPrompt, managers.Game.INDEX_UI);
            this.addChildAt(this._closeButton, managers.Game.INDEX_UI);
            this.addChildAt(this._nextButton, managers.Game.INDEX_UI);

            this._closeButton.on("click", () => { this.finish(); });
            this._closeButton.on("mouseover", () => { createjs.Sound.play("select").duration = 500; });
            this._nextButton.on("click", () => { this.displayNext(); });
            this._nextButton.on("mouseover", () => { createjs.Sound.play("select").duration = 500; });

            this.on("click", this._onClick);
            if (managers.Game.backgroundMusic != "bgm")
                managers.Game.backgroundMusic = "bgm";

            this.displayNext();
        }

        public update():number {
            this._player.isColliding = false;
            this._player.update();
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

        public displayNext() {
            this._lblPrompt.text = this._pages[this._pageIndex].text;
            this._pages[this._pageIndex].func();

            this._pageIndex++;
            if (this._pageIndex >= this._pages.length) {
                this.removeChild(this._nextButton);
            }
        }

        public addProjectile(projectile:objects.Projectile) {
            this._projectiles.push(projectile);
            this.addToScene(projectile, managers.Game.INDEX_UI);
        }

        public addPowerup(powerup:objects.Powerup) {
            this._powerups.push(powerup);
            this.addToScene(powerup, managers.Game.INDEX_UI);
        }

        public addShield(shield:objects.Shield) {
            this._shields.push(shield);
            this.addToScene(shield, managers.Game.INDEX_UI);
        }

        public finish() {
            this.destroyAll();
            managers.Game.currentScene = this._nextScene;
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

        public addToScene(child:createjs.DisplayObject, index:number=0) {
            child.visible = true;
            this.addChildAt(child, index);
        }

        private _onClick() {
            if (this._canFire)
                this._player.attack();
        }

        private _updateEnemies() {
            this._enemies.forEach(enemy => {
                enemy.update();
                if (managers.Collision.check(this._player, enemy)) {
                    this._player.isColliding = true;
                }
             
                this._projectiles.forEach(projectile => {
                    if (projectile.shooter instanceof animate.Player) {
                        if (managers.Collision.check(enemy, projectile)) {
                            if (projectile.isDestroyed)
                                this.removeObject(projectile);
                        }
                    }
                });

                if (enemy.hp <= 0)
                    enemy.visible = false;
            });
        }

        private _updateProjectiles() {
            if (this._projectiles.length) {
                let keepers: objects.Projectile[] = [];
                this._projectiles.forEach(projectile => {
                    projectile.update();

                    managers.Collision.check(projectile, this._player);
                    this._obstra.forEach(obstra => {
                        if (managers.Collision.check(projectile, obstra)) {
                            if (projectile.isDestroyed)
                                this.removeObject(projectile);
                            if (obstra.isDestroyed)
                                obstra.visible = false;
                        }
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
            this._obstra.forEach(obstra => {
                managers.Collision.check(obstra, this._player);
                this._enemies.forEach(enemy => {
                    managers.Collision.check(obstra, enemy);
                })

                if (obstra.isDestroyed) {
                    obstra.visible = false;
                }
            });
        }

        private _updatePowerups() {
            let keepers: objects.PowerupDummy[] = [];
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