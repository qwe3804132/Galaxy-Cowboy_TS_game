(function() {
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: objects.Scene;
    
    let helloLabel: ui.Label;
    let clickMeButton: ui.Button;
    let currentState: number;
    let keyboardManager: managers.Keyboard;
    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;
    let stats: Stats;

    textureAtlasData = {

        "images": [
            "./assets/sprites/textureData.png"
        ],

        "framerate": 20,
        "frames": [
            [1, 1, 23, 23, 0, -1, -1],
            [26, 1, 50, 50, 0, 0, 0],
            [78, 1, 50, 50, 0, 0, 0],
            [130, 1, 50, 46, 0, 0, 0],
            [182, 1, 50, 49, 0, 0, 0],
            [1, 53, 50, 50, 0, 0, 0],
            [53, 53, 50, 47, 0, 0, 0],
            [105, 53, 49, 52, 0, 0, 0],
            [156, 53, 50, 53, 0, 0, 0],
            [208, 53, 20, 26, 0, 0, 0],
            [1, 108, 34, 33, 0, -1, -1],
            [37, 108, 114, 97, 0, -3, -1],
            [153, 108, 50, 50, 0, 0, 0],
            [205, 108, 43, 49, 0, -6, -1],
            [1, 207, 200, 60, 0, 0, 0],
            [1, 269, 55, 60, 0, 0, 0],
            [58, 269, 45, 60, 0, 0, 0],
            [105, 269, 59, 58, 0, 0, 0],
            [166, 269, 28, 40, 0, 0, 0],
            [196, 269, 28, 40, 0, 0, 0],
            [1, 331, 100, 30, 0, 0, 0],
            [103, 331, 35, 35, 0, 0, 0],
            [1, 368, 193, 55, 0, -4, 0],
            [1, 425, 85, 84, 0, -6, -7],
            [88, 425, 65, 65, 0, 0, 0],
            [155, 425, 36, 40, 0, 0, 0],
            [193, 425, 31, 29, 0, 0, -2],
            [1, 511, 31, 29, 0, 0, -2],
            [34, 511, 31, 29, 0, 0, -2],
            [67, 511, 31, 29, 0, 0, -2],
            [100, 511, 29, 29, 0, -1, -2],
            [131, 511, 31, 29, 0, 0, -2],
            [1, 542, 199, 60, 0, -1, 0],
            [1, 604, 199, 60, 0, -1, 0],
            [1, 666, 250, 133, 0, 0, 0]
        ],
        
        "animations": {
            "bullet": { "frames": [0] },
            "crate": { "frames": [1] },
            "breaking": { "frames": [2, 3, 4, 5, 6, 7, 8] },
            "bullet2": { "frames": [9] },
            "close": { "frames": [10] },
            "controlsIntroduck": { "frames": [11] },
            "cowboy1": { "frames": [12] },
            "cowboy2": { "frames": [13] },
            "creditsButton": { "frames": [14] },
            "enemyGuard": { "frames": [15] },
            "enemyPatroller": { "frames": [16] },
            "enemyWatcher": { "frames": [17] },
            "laser": { "frames": [18] },
            "lightning": { "frames": [19] },
            "next": { "frames": [20] },
            "pauseSmall": { "frames": [21] },
            "playagain": { "frames": [22] },
            "restart": { "frames": [23] },
            "shield": { "frames": [24] },
            "shieldPowerup": { "frames": [25] },
            "smallexplosion": { "frames": [26, 27, 28, 29, 30, 31] },
            "startButton": { "frames": [32] },
            "startButton2": { "frames": [33] },
            "tooltipBg": { "frames": [34] }
        }          
    };
    
    assetManifest = [
        {id: "background", src:"./assets/images/background.png"},
        {id: "gameover", src:"./assets/images/gameover.png"},
        {id: "credits", src:"./assets/images/backgroundCredits.png"},
        {id: "win", src:"./assets/images/backgroundWin.png"},
        {id: "mapLevel1", src:"./assets/images/mapLevel1.png"},
        {id: "mapLevel2", src:"./assets/images/mapLevel2.png"},
        {id: "mapLevel3", src:"./assets/images/mapLevel3.png"},
        {id: "shot", src:"./assets/audio/shoot.mp3"},
        {id: "blaster", src:"./assets/audio/blaster.mp3"},
        {id: "monster_die", src:"./assets/audio/monster_die.mp3"},
        {id: "player_die", src:"./assets/audio/player_die.mp3"},
        {id: "breaking", src:"./assets/audio/breaking.wav"},
        {id: "dying", src:"./assets/audio/dying.wav"},
        {id: "menu", src:"./assets/audio/menu.mp3"},
        {id: "bgm", src:"./assets/audio/bgm.mp3"},
        {id: "select", src:"./assets/audio/select.wav"},
        {id: "accept", src:"./assets/audio/accept.mp3"},
        {id: "superspeed", src:"./assets/audio/superspeed.mp3"},
        {id: "superarmour", src:"./assets/audio/superarmour.mp3"}
    ];

    function init():void {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", start, this);
    }
    function start():void {
        console.log("Starting application...");
        stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        //textureAtlasData.images = [ assetManager.getResult("textureAtlas") ];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        main();
    }
    function update():void {
        stats.begin();
        if (currentState != managers.Game.currentScene) {
            main();
        }
        currentScene.update();
        stage.update();
        stats.end();
    }
    function main():void {
        stage.removeAllChildren();
        managers.Game.isPlaying = false;  // set to true when a PlayScene is initialized
        
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.LEVEL1:               
                managers.Game.currentScore=0;                                            
                currentScene = new scenes.Level1();                
                break;
            case config.Scene.LEVEL2:            
                managers.Game.currentScore=managers.Game.scoreBoard.Score;                
                currentScene = new scenes.Level2();
                break;
            case config.Scene.LEVEL3:
                managers.Game.currentScore=managers.Game.scoreBoard.Score;
                currentScene = new scenes.Level3();
                break;
            case config.Scene.GAMEOVER:            
                managers.Game.currentScore=managers.Game.scoreBoard.Score;                 
                currentScene = new scenes.GameOverScene();
                break;
            case config.Scene.SELECT:
                currentScene = new scenes.SelectScene();
                break;
            case config.Scene.CREDITS:
                currentScene = new scenes.CreditsScene();
                break;
            case config.Scene.WIN:
                currentScene = new scenes.WinScreen();
                break;
            case config.Scene.TUTORIAL1:
                currentScene = new scenes.Tutorial1();
                break;
            case config.Scene.TUTORIAL2:
                currentScene = new scenes.Tutorial2();
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = init;
})();