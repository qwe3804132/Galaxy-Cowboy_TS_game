module ui {
    export class Image extends createjs.Sprite {
        public width: number;
        public height: number;
        
        constructor(imageString:string, x:number=0, y:number=0, isCentered=false) {
            super(managers.Game.textureAtlas, imageString);

            this.x = x;
            this.y = y;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            if (isCentered) {
                this.x -= this.width * 0.5;
            }
        }
    }
}