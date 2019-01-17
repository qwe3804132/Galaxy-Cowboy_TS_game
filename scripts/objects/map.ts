module objects {
    export class Map extends createjs.Bitmap {
        private _dy: number;
        private _startX: number;
        private _startY: number;
        public width: number;
        public height: number;

        get startX():number {
            return this._startX;
        }
        get startY():number {
            return this._startY;
        }

        constructor(imageString:string) {
            super(managers.Game.assetManager.getResult(imageString));
            this.start();
        }

        private _reset() {
            // Start at the bottom left of the map
            this.x = this.startX;
            this.y = this.startY;
        }

        public start():void {
            this._dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._startX = 0;
            this._startY = -this.height + managers.Game.HEIGHT;
            this._reset();
        }
    }
}