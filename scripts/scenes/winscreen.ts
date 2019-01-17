module scenes {
    export class WinScreen extends scenes.StartScene {
        constructor() {
            super();
            this.start();
        }

        public start():void {
            this._background = new ui.Background("win");
            this._startButton = new ui.Button("playagain", 0, 280, 0.7);
            ui.centreHorizontal(this._startButton);

            this._finalScoreLabel = new ui.Label("Score: 0", "18pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_PRIMARY, 0, 220, false);
            this._finalScoreLabel.text= "Final Score: " + managers.Game.currentScore;  
            this._finalScoreLabel.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
            this._finalScoreLabel.visible = true;
            ui.centreHorizontal(this._finalScoreLabel);

            this._creditsButton = new ui.Button("creditsButton", 10, 10, 0.7);
            this._creditsButton.x = managers.Game.WIDTH - this._creditsButton.width - 20;
            this._creditsButton.y = managers.Game.HEIGHT - this._creditsButton.height - 20;

            this.main();
        }

        public main():void {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._startButton, managers.Game.INDEX_UI);

            if (this._creditsButton) {
                this.addChildAt(this._creditsButton, managers.Game.INDEX_GAMEOBJECTS);
                this._creditsButton.on("click", () => { managers.Game.currentScene = config.Scene.CREDITS; });
                this._creditsButton.on("mouseover", () => { createjs.Sound.play("select").duration = 500; });
            }
            
            this.addChildAt(this._finalScoreLabel, managers.Game.INDEX_UI);

            if (managers.Game.backgroundMusic != "menu")
                managers.Game.backgroundMusic = "menu";
            this._startButton.on("click", () => { this._startButtonClick() });
            this._startButton.on("mouseover", () => { createjs.Sound.play("select").duration = 500; });
        }

        protected _startButtonClick():void {
            managers.Game.currentScene = config.Scene.LEVEL1;
        }
    }
}