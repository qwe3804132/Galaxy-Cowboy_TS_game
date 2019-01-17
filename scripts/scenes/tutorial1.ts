module scenes {
    export class Tutorial1 extends scenes.TutorialScene {
        private _controlsIntroduck: ui.Image;
        private _hasPlayerMoved: boolean;

        constructor() {
            let pages: scenes.TutorialPage[] = [
                new TutorialPage("This is Gunslinger Sam. Use WASD or arrow keys to move.", () => {this.page1();}),
                new TutorialPage("Watch out for lasers! You can hide behind crates.", () => {this.page2();}),
                new TutorialPage("Left-click to shoot the alien, but be careful: your bullets break crates!", () => {this.page3();}),
                new TutorialPage("Ready to play? Click the close button on the top right.", () => {this.page4();}),
            ];
            super("mapLevel1", pages, config.Scene.LEVEL1);
            
            this._hasPlayerMoved = false;
            this.start();
        }

        public start() {
            super.start();
            this._player = new animate.PlayerDummy(config.Character.GUNSLINGER, 0, 300);
            this._enemies = [
                new animate.EnemyDummy(config.Enemy.GUARD, 0, 100),
                new animate.EnemyDummy(config.Enemy.GUARD, 0, 150)
            ];
            this._obstra.push(new objects.DestructibleDummy("crate", 1, 0, 230));
            this._resetPlayer();
            ui.centreHorizontal(this._enemies[0]);
            ui.centreHorizontal(this._enemies[1]);
            ui.centreHorizontal(this._obstra[0]);

            this._controlsIntroduck = new ui.Image("controlsIntroduck",
                this._player.x + this._player.halfWidth,
                this._player.y);
            this._controlsIntroduck.y -= this._controlsIntroduck.height + this._player.halfHeight;

            this.main();
        }

        public main() {
            super.main();
        }

        public update():number {
            // Make controls intro bubble disappear when player moves
            if (!this._hasPlayerMoved) {
                if (managers.Game.keyboardManager.moveForward || managers.Game.keyboardManager.moveBackward
                    || managers.Game.keyboardManager.moveLeft || managers.Game.keyboardManager.moveRight) {
                    this._hasPlayerMoved = true;
                    this.removeChild(this._controlsIntroduck);
                }
            }
            super.update();

            return managers.Game.currentScene;
        }

        public page1() {
            this.addToScene(this._player, managers.Game.INDEX_UI);
            this.addToScene(this._controlsIntroduck, managers.Game.INDEX_UI);
        }

        public page2() {
            this._resetPlayer();
            this.addToScene(this._enemies[0], managers.Game.INDEX_UI);
            this._enemies[0].start();
            this.addToScene(this._obstra[0], managers.Game.INDEX_UI);
        }

        public page3() {
            this._canFire = true;
        }

        public page4() {}

        private _resetPlayer() {
            ui.centreHorizontal(this._player);
            this._player.y = 300;
        }
    }
}