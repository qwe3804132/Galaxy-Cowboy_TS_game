module scenes {
    export class StartScene extends objects.Scene {
        protected _startButton: ui.Button;
        protected _startButton2: ui.Button;
        protected _background: ui.Background;
        protected _finalScoreLabel: ui.Label;
        protected _creditsButton: ui.Button;
        
        constructor() {
            super();
            this.start();
        }

        public start():void {
            this._background = new ui.Background("background");
            this._startButton2 = new ui.Button("startButton2", 300, 240);
            this._startButton = new ui.Button("startButton", 300, 240, 0.1);             
            this._finalScoreLabel = new ui.Label("Score: 0", "14pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_PRIMARY, 150, 250, false);            
            this._finalScoreLabel.visible=false;

            this._creditsButton = new ui.Button("creditsButton", 10, 10, 0.7);
            this._creditsButton.x = managers.Game.WIDTH - this._creditsButton.width - 20;
            this._creditsButton.y = managers.Game.HEIGHT - this._creditsButton.height - 20;

            this.main();
        }

        public update():number {
            return managers.Game.currentScene;
        }

        public main():void {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._startButton2, managers.Game.INDEX_GAMEOBJECTS);
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
            this._startButton.visible = false;
            this._startButton.on("mouseover", () => {});
            createjs.Sound.play("accept");
            createjs.Tween.get(this._startButton2).to({alpha: 0, y: 200}, 3000, createjs.Ease.getPowOut(3));           
            createjs.Tween.get(this).to({alpha: 0}, 4000, createjs.Ease.getPowIn(2))
                .on("complete", () => { this._switchScene(); });
        }

        private _switchScene() {
            managers.Game.currentScene = config.Scene.TUTORIAL1;
        }
    }
}