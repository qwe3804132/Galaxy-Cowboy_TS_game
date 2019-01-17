module scenes {
    export class Level3 extends scenes.PlayScene {
        private _tooltip:ui.Tooltip;

        constructor() {
            super("mapLevel3");
            managers.Game.currentPlayScene = config.Scene.SELECT;
            this.title = "Level 3";
            this.start();
        }

        public start():void {
            super.start();
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,120,140),
                new animate.Enemy(config.Enemy.WATCHER,500,340),
                new animate.Enemy(config.Enemy.PATROLLER,100,100,300,100),
                new animate.Enemy(config.Enemy.WATCHER,240,-350),
                new animate.Enemy(config.Enemy.GUARD,470,-270),
                new animate.Enemy(config.Enemy.GUARD,580,-270),
                new animate.Enemy(config.Enemy.PATROLLER,500,-300,300,500)
            ];
           
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(managers.Game.currentPlayerType, 100, 420);
            console.log("Player initialized.");

            this._obstra=[
                new  objects.Destructible("crate",1,310,140),
                new  objects.Destructible("crate",1,260,220),
                new  objects.Destructible("crate",1,100,320),
                new  objects.Destructible("crate",1,150,320),
                new  objects.Destructible("crate",1,250,400),
                new  objects.Destructible("crate",1,250,-220),
                new  objects.Destructible("crate",1,190,-220),
                new  objects.Destructible("crate",1,560,90)
            ];
            this.main();
        }

        public update():number {
            super.update();

            if (!this._enemies.length) {
                this.switchScene(config.Scene.WIN);
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
        }
    }
}