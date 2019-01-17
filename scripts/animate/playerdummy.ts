module animate {
    export class PlayerDummy extends animate.Player {
        public destroy() {
            createjs.Sound.play("player_die");
            createjs.Tween.get(this).to({alpha: 0.6}, 200).on("complete", () => { this.alpha = 1; });
        }

        public attackManual(targetX:number, targetY:number) {
            if (this._canFire) {
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