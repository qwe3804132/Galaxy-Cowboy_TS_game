module scenes {
    export class Level2 extends scenes.PlayScene {
        private _tooltip: ui.Tooltip;

        constructor() {
            super("mapLevel2");
            managers.Game.currentPlayScene = config.Scene.TUTORIAL2;
            this.title = "Level 2";
            this.start();
        }

        public start():void {
            super.start();           

            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,160,110),
                new animate.Enemy(config.Enemy.GUARD,320,240),
                new animate.Enemy(config.Enemy.GUARD,500,100),
                new animate.Enemy(config.Enemy.GUARD,237,-200),
                new animate.Enemy(config.Enemy.WATCHER,400,-270),
                new animate.Enemy(config.Enemy.GUARD,470,-270),
            ];
            this._obstra=[
                new objects.Destructible("crate",1,60,80),
                new objects.Destructible("crate",1,580,240),
                new objects.Destructible("crate",1,580,300),
                new objects.Destructible("crate",1,237,20),
            ];

            this._player = new animate.Player(config.Character.QUICKSILVER, 100, 420);

            let tooltipMessages: string[] = [
                "Move up and around the map to discover more areas, but beware the enemies ahead!",
            ];
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];

            this.main();
        }

        public update():number {
            super.update();

            if (!this._enemies.length) {
                this.switchScene(config.Scene.SELECT);
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();
        }
    }
}