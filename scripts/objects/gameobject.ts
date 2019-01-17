module objects {
    export abstract class GameObject extends createjs.Sprite {
        protected _dy: number;
        protected _dx: number;
        private _mvspd: number; // multiplier; 1 = 100%
        protected _origin: glm.vec2;
        protected _destination: glm.vec2;

        protected _weapon: objects.Weapon;

        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;
        public lastValidPosition: glm.vec2; // last known x,y coords where object didn't collide with an obstacle

        public isColliding: boolean;
        public isDestroyed: boolean = false;

        get leftX():number {
            return this.x - this.halfWidth;
        }
        get rightX():number {
            return this.x + this.halfWidth;
        }

        get topY():number {
            return this.y - this.halfHeight;
        }
        get bottomY():number {
            return this.y + this.halfHeight;
        }

        get origin():glm.vec2 {
            return this._origin;
        }
        get destination():glm.vec2 {
            return this._destination;
        }

        get mvspd():number {
            return this._mvspd;
        }
        set mvspd(mvspd:number) {
            this._mvspd = mvspd;
        }

        get movementAmount():number {
            return managers.Game.BASE_MVSPD * this.mvspd;
        }

        get weapon():objects.Weapon {
            return this._weapon;
        }

        constructor(imageName:string, px:number, py:number, qx:number=0, qy:number=0) {
            super(managers.Game.textureAtlas, imageName);
            this.name = imageName;
            this.x = px;
            this.y = py;
            this._origin = new glm.vec2(px, py);
            this._destination = new glm.vec2(qx, qy);
            
            this._initialize();
        }

        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;

            this.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_WARM, 0, 4, 4);
        }

        public reset():void { }

        public checkBounds(other:objects.GameObject=null):void { }

        protected getNextPosition(movementAmount:number=null):glm.vec2 {
            let newX: number;
            let newY: number;
            let run: number = glm.vec2.run(this._origin, this._destination);
            let rise: number = glm.vec2.rise(this._origin, this._destination);
            let c: number;
            let divisor: number;
            if (movementAmount == null) {
                movementAmount = this.movementAmount;
            }

            c = Math.sqrt(Math.pow(run, 2) + Math.pow(rise, 2));
            divisor = c / movementAmount;

            run = Math.abs(run / divisor);
            rise = Math.abs(rise / divisor);

            if (this._destination.x < this._origin.x) {
                run *= -1; // move left
            }
            if (this._destination.y < this._origin.y) {
                rise *= -1; // move down
            }
            
            newX = Math.round(this.x + run);
            newY = Math.round(this.y + rise);

            return new glm.vec2(newX, newY);
        }

        public move(movementAmount:number=null) {
            let newPosition: glm.vec2 = this.getNextPosition(movementAmount);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }

        public start():void { }

        public update():void { }

        public collide(other:objects.GameObject):void { }

        public destroy(silent:boolean=false) {
            this.isDestroyed = true;
        }
    }
}