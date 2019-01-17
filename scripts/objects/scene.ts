module objects {
    export abstract class Scene extends createjs.Container {
        protected _overlay: createjs.Shape;
        public assetManager;

        get topBoundary(): number {
            return this.y;
        }
        get bottomBoundary(): number {
            return this.y + managers.Game.HEIGHT;
        }
        get leftBoundary(): number {
            return this.x;
        }
        get rightBoundary(): number {
            return this.x + managers.Game.WIDTH;
        }

        get player(): animate.Player {
            return null;
        }
        get enemies(): animate.Enemy[] {
            return null;
        }
        get projectiles(): objects.Projectile[] {
            return null;
        }
        get tooltips(): ui.Tooltip[] {
            return null;
        }

        constructor() {
            super();
            this.assetManager = managers.Game.assetManager;
        }
    
        public start():void { }

        public update():number { 
            return 0;
        }

        public main():void { }

        public addProjectile(projectile:objects.Projectile) {}

        public addPowerup(powerup:objects.Powerup) {}

        public addShield(shield:objects.Shield) {}

        public removeObject(o:objects.GameObject, silent:boolean=false) {
            if (!o.isDestroyed)
                o.destroy(silent);
            this.removeChild(o);
            o = null;
        }

        public destroyAll() {}
    }
}