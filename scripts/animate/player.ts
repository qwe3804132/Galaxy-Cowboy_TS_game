module animate {
    export class Player extends Animate {
        protected _canFire: boolean;
        public powerups; // {config.Powerup: objects.Powerup}

        constructor(character:config.Character, px:number, py:number) {
            let imageName: string = "cowboy1";
            let hp: number = 1;
            let mvspd: number;
            let weapon: config.Weapon;

            switch (character) {
                case config.Character.GUNSLINGER:
                    mvspd = 0.8;
                    weapon = config.Weapon.REVOLVER;
                    break;
                case config.Character.QUICKSILVER:
                    mvspd = 1.5;
                    weapon = config.Weapon.SHOTGUN;
                    imageName = "cowboy2";
                    break;
            }
            super(imageName, hp, mvspd, px, py);
            this._canFire = true;
            this._weapon = new objects.Weapon(weapon);
            this.powerups = {
                 "speed": null,
                 "armour": null
            };
        }

        public checkBounds():void {
            super.checkBounds();
            // Checking vertical boundaries
            let bottom: number = managers.Game.currentSceneObject.bottomBoundary - this.halfHeight;
            let top: number = managers.Game.currentSceneObject.topBoundary + this.halfHeight;
            if (this.y > bottom) {
                this.y = bottom;
            } else if (this.y < top) {
                this.y = top;
            }

            // Checking horizontal boundaries
            if (this.x >= managers.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.x = managers.Game.RIGHT_BOUNDARY - this.halfWidth
            } else if (this.x <= managers.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.x = this.halfWidth
            }
        }

        public move() {
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += this.movementAmount;
            }
        }

        public update() {
            this.move();
            this.checkBounds();
        }

        public collide(other:objects.GameObject) {
            super.collide(other);
            if (other instanceof animate.Enemy) {
                this.hp -= 1;
            }
            if (this.hp <= 0) {
                this.destroy();
            }
        }

        public destroy() {
            super.destroy();
            createjs.Sound.play("player_die");
            managers.Game.currentSceneObject.destroyAll();
            managers.Game.currentScene = config.Scene.GAMEOVER;
        }

        public attack() {
            if (this._canFire) {
                let targetX: number = managers.Game.currentSceneObject.stage.mouseX - managers.Game.currentSceneObject.x;
                let targetY: number = managers.Game.currentSceneObject.stage.mouseY - managers.Game.currentSceneObject.y;
                let projectileType: string = "bullet";

                if (this.weapon.weaponType == config.Weapon.SHOTGUN) {
                    projectileType = "bullet2"
                }
                let newProjectile = new objects.Projectile(projectileType, this, targetX, targetY);
                this._canFire = false;
                setTimeout(() => {this._canFire = true}, this._weapon.fireRate * 1000);
            }
        }
    }
}