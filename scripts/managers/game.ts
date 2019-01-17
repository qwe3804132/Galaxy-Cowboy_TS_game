module managers {
    export class Game {
        private static _currentMusicString: string;
        private static _currentMusic: createjs.AbstractSoundInstance;
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static currentPlayScene: number;
        public static currentSceneObject: objects.Scene;
        public static currentPlayerType: number;

        public static keyboardManager: managers.Keyboard;
        public static textureAtlas: createjs.SpriteSheet;
        public static isPlaying: boolean = false;
        public static scoreBoard: managers.ScoreBoard;
        public static previousScore: number = 0;
        public static currentScore: number = 0;
        
        public static readonly WIDTH = 640;
        public static readonly HEIGHT = 480;
        public static readonly FPS = 60;

        // Points that the player has to reach to start moving around the map
        public static readonly TOP_ANCHOR = 150; // move up
        public static readonly BOTTOM_ANCHOR = Game.HEIGHT - 20; // move down
        public static readonly LEFT_ANCHOR = 10; // move left
        public static readonly RIGHT_ANCHOR = Game.WIDTH - 10; // move right

        // Game boundaries
        public static readonly TOP_BOUNDARY = 0;
        public static readonly BOTTOM_BOUNDARY = Game.HEIGHT;
        public static readonly LEFT_BOUNDARY = 0;
        public static readonly RIGHT_BOUNDARY = Game.WIDTH;

        // Measured in pixels
        public static readonly BASE_MVSPD = 3;

        // Layer indices
        public static readonly INDEX_BACKGROUND = 0;
        public static readonly INDEX_GAMEOBJECTS = 1;
        public static readonly INDEX_UI = 2;

        // Setters
        static get backgroundMusic():string {
            return managers.Game._currentMusicString;
        }

        static set backgroundMusic(music:string) {
            if (managers.Game._currentMusic)
                managers.Game._currentMusic.stop();
            managers.Game._currentMusicString = music;
            managers.Game._currentMusic = createjs.Sound.play(music);
            managers.Game._currentMusic.loop = -1;
            managers.Game._currentMusic.volume = 0.5;
        }

        static stopMusic() {
            managers.Game._currentMusic.stop();
        }
    }
}