module ui {
    export class Background extends createjs.Bitmap {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor(imageString) {
        super(managers.Game.assetManager.getResult(imageString));
        this.start();
      }
  
      // private methods
  
      // reset the objects location to some value
      
  
      // public methods
  
      // Initializes variables and creates new objects
      public start():void {
      
      }
  
      // updates the game object every frame
      public update():void {
     
      }
    }
  }
  