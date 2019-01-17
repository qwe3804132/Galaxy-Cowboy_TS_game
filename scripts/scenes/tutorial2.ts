module scenes {
    export class Tutorial2 extends scenes.TutorialScene {
        constructor() {
            let pages: scenes.TutorialPage[] = [
                new TutorialPage("Powerups spawn randomly from crates. This is super speed. It makes you faster.", () => {this.page1();}),
                new TutorialPage("This is super armour. It gives you a shield that can block one laser.", () => {this.page2();}),
                new TutorialPage("This is Quicksilver John. His range and fire rate is lower, but he's quicker, and his bullets cut through lasers.", () => {this.page3();}),
                new TutorialPage("This alien is a Watcher - it shoots directly at you, not just straight down!", () => {this.page4();}),
                new TutorialPage("Use John's speed to quickly take it out!", () => {this.page5();}),
            ];
            super("mapLevel2", pages, config.Scene.LEVEL2);
            
            this.start();
        }

        public start() {
            super.start();
            this._player = new animate.PlayerDummy(config.Character.QUICKSILVER, 0, 300);
            this._enemies = [
                new animate.EnemyDummy(config.Enemy.WATCHER, 0, 150)
            ];
            this._powerups = [
                new objects.PowerupDummy(config.Powerup.SUPERSPEED, 270, 240),
                new objects.PowerupDummy(config.Powerup.SUPERARMOUR, 370, 240)
            ];
            this._resetPlayer();
            ui.centreHorizontal(this._enemies[0]);

            this.main();
        }

        public main() {
            super.main();
        }

        public page1() {
            let p = this._powerups[0];
            p.alpha = 0;
            this.addToScene(p, managers.Game.INDEX_UI);
            createjs.Tween.get(p).to({alpha: 1}, 1000);
        }

        public page2() {
            let p = this._powerups[1];
            p.alpha = 0;
            this.addToScene(p, managers.Game.INDEX_UI);
            createjs.Tween.get(p).to({alpha: 1}, 1000);
        }

        public page3() {
            this.addToScene(this._player, managers.Game.INDEX_UI);
            this._canFire = true;
        }

        public page4() {
            this._resetPlayer();
            this.addToScene(this._enemies[0], managers.Game.INDEX_UI);
            this._enemies[0].hp = 9999;
        }

        public page5() {
            this._enemies[0].hp = 1;
            this._enemies[0].start();
        }

        private _resetPlayer() {
            ui.centreHorizontal(this._player);
            this._player.y = 300;
        }
    }
}