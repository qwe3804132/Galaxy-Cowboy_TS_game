module objects {
    export class Projectile extends objects.GameObject {
        private _shooter: objects.GameObject;
        private _dmg: number;
        private _amountTravelled: number;

        get shooter():objects.GameObject {
            return this._shooter;
        }

        constructor(imageName:string, shooter:objects.GameObject, qx:number, qy:number, mvspd:number=2) {
            super(imageName, shooter.x, shooter.y, qx, qy);
            this._shooter = shooter;
            this.mvspd = mvspd;
            this._dmg = this._shooter.weapon.dmg;
            
            // Move projectile in front of shooter
            this._spawnPosition();

            switch (shooter.weapon.weaponType) {
                case config.Weapon.BLASTER:
                    createjs.Sound.play("blaster").volume = 0.2;
                    this.rotation = -(glm.vec2.angleOfAttack(this.origin, this.destination) + 90);
                    break;
                case config.Weapon.SHOTGUN:
                    this.rotation = -(glm.vec2.angleOfAttack(this.origin, this.destination) - 90);
                default:
                    createjs.Sound.play("shot");
                    break;
            }
            
        }

        public update() {
            this.move();
            this._checkBounds();
        }

        public move(movementAmount:number=null) {
            super.move(movementAmount);

            if (!movementAmount)
                movementAmount = this.movementAmount;

            this._amountTravelled += movementAmount;
            if (this._shooter.weapon.weaponType == config.Weapon.SHOTGUN && this._amountTravelled >= 180)
                this.destroy();
        }

        private _checkBounds() {
            if (this.y >= managers.Game.currentSceneObject.bottomBoundary + this.halfHeight ||
                this.y <= managers.Game.currentSceneObject.topBoundary - this.halfHeight ||
                this.x >= managers.Game.currentSceneObject.rightBoundary + this.halfWidth ||
                this.x <= managers.Game.currentSceneObject.leftBoundary - this.halfWidth) {
                    this.destroy();
            }
        }

        private _spawnPosition() {
            let run: number = Math.abs(glm.vec2.run(this._origin, this._destination));
            let rise: number = Math.abs(glm.vec2.rise(this._origin, this._destination));
            let mvAmt: number;
            let margin: number = 10;

            if (run < rise) {
                // Path is more vertical than horizontal - use shooter's height to spawn bullet
                mvAmt = this._shooter.halfHeight + margin;
            } else {
                mvAmt = this._shooter.halfWidth + margin;
            }
            this._amountTravelled = -mvAmt;

            this.move(mvAmt);
            managers.Game.currentSceneObject.addProjectile(this);
        }

        public collide(other:objects.GameObject) {
            if (other == this._shooter || !other.isVisible() || (other instanceof objects.Shield && other.anchor == this._shooter)) {
                return;
            }
            
            if (((other instanceof animate.Enemy) && (this._shooter instanceof animate.Player)) ||
            (other instanceof animate.Player && this.name == "laser") ||
            ((other instanceof objects.Destructible) && (this._shooter instanceof animate.Player))) {
                other.hp -= this._dmg;
            }

            if (this._shooter.weapon.weaponType == config.Weapon.SHOTGUN && other.name == "laser") {
                return;
            }
            this.destroy();
        }

        public destroy() {
            super.destroy();
            let explosion = new objects.explosion(this.x - this.halfWidth, this.y - this.halfHeight, "smallexplosion");                      
            managers.Game.currentSceneObject.addChildAt(explosion, managers.Game.INDEX_GAMEOBJECTS);
        }
    }
}