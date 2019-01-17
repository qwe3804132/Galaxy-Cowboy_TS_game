module objects {
    export class Shield extends objects.GameObject {
        private _anchor: animate.Animate;
        get anchor():animate.Animate {
            return this._anchor;
        }

        constructor(anchor:animate.Animate) {
            super("shield", anchor.x, anchor.y);
            this._anchor = anchor;
            this._anchor.hp += 1;
        }

        public update() {
            this.x = this._anchor.x;
            if (this._anchor.weapon.weaponType == config.Weapon.SHOTGUN)
                this.x += 5;
            this.y = this._anchor.y;
        }

        public collide(other:objects.GameObject) {
            if (other instanceof objects.Projectile && other.shooter != this._anchor) {
                this.destroy();
            }
        }

        public destroy() {
            super.destroy();
            this._anchor.hp -= 1;
        }
    }
}