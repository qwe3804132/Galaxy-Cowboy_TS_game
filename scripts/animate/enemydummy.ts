module animate {
    export class EnemyDummy extends Enemy {
        constructor(enemyType:config.Enemy, px:number, py:number, qx:number=0, qy:number=0) {
            super(enemyType, px, py, qx, qy);
            this.stop();
            this.visible = false;
        }

        public update():void {
            if (!this.isVisible())
                this.stop();
            this.move();
            this.checkBounds();
        }

        public collide(other:objects.GameObject) {
            return;
        }
    }
}