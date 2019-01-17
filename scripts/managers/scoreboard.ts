module managers {
    export class ScoreBoard extends createjs.Container {
        // private instance variables
        private _lives:number = 1;
        private _score:number = 0;
        private _enemies:number = 0;
    
        // public Instance variables
        public LivesLabel: ui.Label;
        public ScoreLabel: ui.Label;
        public EnemiesLabel: ui.Label;
    
        // public properties
        get Lives():number {
            return this._lives;
        }
    
        set Lives(newLives:number) {
            this._lives = newLives;
            this.LivesLabel.text = "Lives: " + this._lives;
        }
    
        get Score():number {
            return this._score;
        }
    
        set Score(newScore:number) {
            this._score = newScore;
            this.ScoreLabel.text = "Score: " + this._score;
        }

        get EnemyCount():number {
            return this._enemies;
        }

        set EnemyCount(enemyCount:number) {
            this._enemies = enemyCount;
            this.EnemiesLabel.text = "Enemies left: " + this._enemies;
        }
    
        // constructors
        constructor() {
            super();
            this._initialize();
        }

        public main() {
            //this.addChild(this.LivesLabel);
            this.addChild(this.ScoreLabel);
            this.addChild(this.EnemiesLabel);
        }

        public updateEnemies() {
            this._enemies = managers.Game.currentSceneObject.enemies.length;
            this.EnemiesLabel.text = "Enemies left: " + this._enemies;
        }
    
        private _initialize():void {
            let shadowColour: string = "rgba(80,50,20,0.7)";
            this.LivesLabel = new ui.Label("Lives: 0", "14pt", "Sporting Grotesque", "#FFFF00", 20, 10, false);
            this.LivesLabel.shadow = new createjs.Shadow(shadowColour, 1, 2, 0);
            this.ScoreLabel = new ui.Label("Score: 0", "14pt", "Sporting Grotesque", "#FFFF00", 500, 10, false);
            this.ScoreLabel.shadow = new createjs.Shadow(shadowColour, 1, 2, 0);
            this.EnemiesLabel = new ui.Label("Enemies left: 0" , "14pt", "Sporting Grotesque", "#FFFF00", 20, 10);
            this.EnemiesLabel.shadow = new createjs.Shadow(shadowColour, 1, 2, 0);
        
            this.Lives = 1;
            this.Score = 0;
            this.EnemyCount = 0;

            this.main();
        }
    }
}
  