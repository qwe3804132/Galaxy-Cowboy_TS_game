module scenes {
    export class Level1 extends scenes.PlayScene {
        constructor() {
            super("mapLevel1");
            managers.Game.currentPlayScene = config.Scene.TUTORIAL1;
            this.title = "Level 1";
            this.start();
        }

        public start():void {
            super.start();
           
            console.log("Initializing enemies...");            
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD,310,40),
                new animate.Enemy(config.Enemy.GUARD,260,120),
                new animate.Enemy(config.Enemy.GUARD,560,190),
            ];
            console.log("Enemies initialized.");

            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");

            // Initialize
            let tooltipMessages: string[] = [
                "Gunslinger Sam moves slowly, but fires quickly. This makes it easier to block lasers with his bullets!",
            ]; 
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];
            
            this.main();
        }

        public update():number {
            super.update();

            if (!this._enemies.length) {
                this.switchScene(config.Scene.TUTORIAL2);               
            }

            return managers.Game.currentScene;
        }

        public main():void {
            super.main();         
        }
    }
}