module animate {
    export abstract class Animate extends objects.GameObject {
        public hp: number;

        get movementAmount():number {
            return managers.Game.BASE_MVSPD * this.mvspd;
        }

        constructor(imageName:string, hp:number, mvspd:number=1, px:number, py:number, qx:number=0, qy:number=0) {
            super(imageName, px, py, qx, qy);
            this.hp = hp;
            this.mvspd = mvspd;
            this.lastValidPosition = new glm.vec2(px, py);
        }

        public attack() {}

        public collide(other:objects.GameObject) {
            if (other instanceof objects.GameObject) {
                this.x = this.lastValidPosition.x;
                this.y = this.lastValidPosition.y;
            } else {
                this.lastValidPosition.x = this.x;
                this.lastValidPosition.y = this.y;
            }
        }
    }
}