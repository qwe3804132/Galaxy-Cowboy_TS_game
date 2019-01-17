module objects {
    export class Weapon {
        private _dmg: number;
        public fireRate: number;

        get dmg():number {
            return this._dmg;
        }

        constructor(public weaponType:config.Weapon) {
            let fireRate: number = 1; // Seconds to wait before firing again
            let dmg: number = 1;

            switch (weaponType) {
                // Set fire rate and projectile based on weapon type:
                case config.Weapon.REVOLVER:
                    fireRate = 0.4;
                    break;
                case config.Weapon.SHOTGUN:
                    fireRate = 1.2;
                    dmg = 3;
                    break;
                case config.Weapon.BLASTER:
                    fireRate = 0.7;
                    break; 
            }
            
            this.fireRate = fireRate;
            this._dmg = dmg;
        }
    }
}