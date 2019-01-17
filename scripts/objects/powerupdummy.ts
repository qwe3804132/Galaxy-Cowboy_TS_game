module objects {
    export class PowerupDummy extends objects.Powerup {
        constructor(powerupType:config.Powerup, px:number, py:number) {
            super(powerupType, px, py);
            this.visible = false;
        }

        public collide(other:objects.GameObject) {
            if (this.isVisible())
                super.collide(other);
        }
    }
}