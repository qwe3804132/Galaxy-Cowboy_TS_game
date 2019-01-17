module objects {
    export class DestructibleDummy extends Destructible {
        constructor(imageName:string, hp:number, px:number, py:number) {
            super(imageName, hp, px, py);
            this.visible = false;
        }

        public collide(other:objects.GameObject) {
            if (this.isVisible())
                super.collide(other);
        }
    }
}