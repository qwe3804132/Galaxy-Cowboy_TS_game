module objects {
    export class explosion extends createjs.Sprite     {
      // private instance variables
  
      // public properties
  
      // constructors
      constructor( px:number,py:number,imageName:string) {         
        super(managers.Game.textureAtlas, imageName);
        this.x=px;
        this.y=py;
        this.Start();
      }
  
      // private methods
      private _animationEnded() {
        this.alpha = 0;
        this.off("animationend", this._animationEnded.bind(this), false);
        managers.Game.currentSceneObject.removeChild(this);
      }
  
  
      // public methods
      public Start(): void {
        this.on("animationend", this._animationEnded.bind(this), false);
      }
  
      public Update(): void {
      }
  
    }
  }
  