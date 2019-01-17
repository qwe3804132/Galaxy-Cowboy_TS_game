module objects {
    export class Powerup extends objects.GameObject {
        private activationTime: number;  // milliseconds
        private duration: number;  // seconds - if negative, then infinite
        private activationFunction: () => void;  // function to invoke when activating powerup
        private scene: objects.Scene;
        public powerupType: config.Powerup;

        public static getRandomType():config.Powerup {
            /* ======== Powerup chances ========
                        Super speed chance = 50%
                       Super armour chance = 50%
            */
            let randomType: config.Powerup;
            let random: number = Math.random();
            
            if (random < 0.5) {
                randomType = config.Powerup.SUPERSPEED;
            } else {
                randomType = config.Powerup.SUPERARMOUR;
            }

            return randomType;
        }

        constructor(powerupType: config.Powerup, px:number, py:number) {
            let imageString: string;
            switch (powerupType) {
                case config.Powerup.SUPERSPEED:
                    imageString = "lightning";
                    break;
                case config.Powerup.SUPERARMOUR:
                    imageString = "shieldPowerup";
                    break;
                case config.Powerup.WARSHIP:
                    break;
            }
            
            super(imageString, px, py);
            this.powerupType = powerupType;
            this.scene = managers.Game.currentSceneObject;
            this.scene.addPowerup(this);
            this.start();
        }

        private activateSuperSpeed() {
            if (!this.scene.player.powerups.speed) {
                this.scene.player.mvspd *= 1.5;
            }
            createjs.Sound.play("superspeed");
            this.scene.player.powerups.speed = this;
        }

        private activateSuperArmour() {
            if (!this.scene.player.powerups.armour) {
                this.scene.addShield(new objects.Shield(this.scene.player));
            }
            createjs.Sound.play("superarmour");
            this.scene.player.powerups.armour = this;
        }

        private activateWarship() {
            
        }

        public start():void {
            switch (this.powerupType) {
                case config.Powerup.SUPERSPEED:
                    this.activationFunction = this.activateSuperSpeed;
                    this.duration = 10;
                    break;
                case config.Powerup.SUPERARMOUR:
                    this.activationFunction = this.activateSuperArmour;
                    this.duration = -1;
                    break;
                case config.Powerup.WARSHIP:
                    this.activationFunction = this.activateWarship;
                    this.duration = -1;
                    break;
            }
        }

        public collide(other:objects.GameObject) {
            if (other instanceof animate.Player) {
                this.activate();
                this.destroy();
            }
        }

        public destroy() {
            super.destroy();
        }

        public activate() {
            // Activate powerup
            this.activationTime = new Date().getMilliseconds();
            this.activationFunction();
        }

        public timeLeft():number {
            // In seconds
            return this.duration - (Date.now() - this.activationTime) * 0.001;
        }
    }
}