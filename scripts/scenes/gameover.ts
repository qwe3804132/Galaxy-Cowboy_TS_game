 module scenes {
    export class GameOverScene extends scenes.StartScene {
        constructor() {
            super();
            this.start();
        }

        public start():void {
            this._background = new ui.Background("gameover");
            this._startButton2 = new ui.Button("startButton2", managers.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button("startButton", managers.Game.WIDTH * 0.5, 320, 0.1, true);
            this._finalScoreLabel = new ui.Label("Score: 0", "18pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_PRIMARY, 0, 250, false);                        
            this._finalScoreLabel.text= "Final Score: " + managers.Game.currentScore;
            this._finalScoreLabel.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
            ui.centreHorizontal(this._finalScoreLabel);
            
            managers.Game.currentScore=0;
            this.main();
        }

        public main() {
            super.main();
            managers.Game.stopMusic();
        }

        protected _startButtonClick() {
            managers.Game.currentScore = managers.Game.previousScore;
            managers.Game.currentScene = managers.Game.currentPlayScene;
        }
    }
}