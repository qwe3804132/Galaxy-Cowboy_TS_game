module animate {
    export class Enemy extends Animate {
        //specify the character image, hp, and mvspd
        // private instance variables       
                 
        private attackInterval;
        private _enemyType: config.Enemy;
        
        // public properties
        // Constructor
        //here we can add heath point as 1 and speed as 0 for not moving in level1 and level2
        // but for for level3 and level4, we have to mention speed
        constructor(enemyType:config.Enemy, px:number, py:number, qx:number=0, qy:number=0) {
            let enemyImg: string = "enemyGuard";
            let hp: number = 1;
            let mvspd: number = 0;

            switch (enemyType) {
                case config.Enemy.GUARD:
                    enemyImg = "enemyGuard";
                    break;
                case config.Enemy.WATCHER:
                    enemyImg = "enemyWatcher";
                    break;
                case config.Enemy.PATROLLER:
                    enemyImg = "enemyPatroller";
                    mvspd = 1;
                    break;
            }

            super(enemyImg, hp, mvspd, px, py, qx, qy);
            this._enemyType = enemyType;
            this.hp=hp;
            this.mvspd=mvspd;
            this._weapon = new objects.Weapon(config.Weapon.BLASTER);
            this.start();
        }
        
        // private methods
        // public methods
        // Initializes variables and creates new objects
        public start():void {
            this.attackInterval = setInterval(() => {this.attack()}, this._weapon.fireRate * 1000);
        }

        public stop() {
            clearInterval(this.attackInterval);
            this.attackInterval = null;
        }
    
        // updates the game object every frame
        public update():void {
            if (!this.attackInterval && !this.isDestroyed) {
                this.start();
            }
            this.move();
            this.checkBounds();
        }

        public move(movementAmount:number=null) {
            let newPosition: glm.vec2 = this.getNextPosition(movementAmount);
            this.x = newPosition.x;
            this.y = newPosition.y;

            let run: number = glm.vec2.run(this._origin, this._destination);
            let rise: number = glm.vec2.rise(this._origin, this._destination);
            let hasReachedX: boolean = false;
            let hasReachedY: boolean = false;

            if ((run <= 0 && this.x <= this._destination.x) ||
            (run > 0 && this.x > this._destination.x)) {
                hasReachedX = true;
            }
            if ((rise <= 0 && this.y <= this._destination.y) ||
            (rise > 0 && this.y > this._destination.y)) {
                hasReachedY = true;
            }

            // Go back and forth between the origin and destination
            if (hasReachedX && hasReachedY) {
                this.goBack();
            }
        }

        public destroy(silent:boolean=false) {
            this.stop();
            super.destroy(silent);
            if (!silent)
                createjs.Sound.play("monster_die"); 
        }

        public attack():void {
            let targetX: number;
            let targetY: number;

            switch (this._enemyType) {
                case config.Enemy.GUARD:
                    // Shoot down
                    targetX = this.x;
                    targetY = this.y + 1;
                    break;
                default:
                    targetX = managers.Game.currentSceneObject.player.x;
                    targetY = managers.Game.currentSceneObject.player.y;
                    break;
            }

            let newProjectile = new objects.Projectile("laser", this, targetX, targetY);
        }

        public collide(other:objects.GameObject) {                      
            if (other.name=="bullet" || other.name=="bullet2") {
                managers.Game.scoreBoard.Score += 200;  
                managers.Game.currentScore=managers.Game.scoreBoard.Score;
                return;
            } else if (other instanceof animate.Player) {
                other.hp -= 1;
            }
            this.lastValidPosition.x = this.x;
            this.lastValidPosition.y = this.y;
            this.goBack();
        }

        private goBack() {
            this._destination = this._origin;
            this._origin = new glm.vec2(this.x, this.y);
        }
    }
}