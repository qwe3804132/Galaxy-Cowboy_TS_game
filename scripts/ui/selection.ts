module ui {
    export class Selection extends createjs.Container {
        private _overlay: createjs.Shape;
        private _sprite: createjs.Sprite;
        private _description: string;
        private _quote: string;
        private _lblTitle: ui.Label;
        private _lblDescription: ui.Label;
        private _lblQuote: ui.Label;

        public halfWidth: number;
        public halfHeight: number;
        
        constructor(x:number, y:number, public width:number, public height:number,
        public title:string, description:string="", quote:string="", sprite:createjs.Sprite=null) {
            super();
            this.x = x;
            this.y = y;
            this._description = description;
            this._quote = quote;
            this._sprite = sprite;
            this.start();
        }

        public start():void {
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this._overlay = new createjs.Shape(
                new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRoundRect(0, 0, this.width, this.height, 10)
            );

            this._lblTitle = new ui.Label(this.title, "18pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_PRIMARY);
            ui.centreHorizontal(this._lblTitle, 0, this.width);
            this._lblTitle.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);

            this._lblDescription = new ui.Label(this._description, "11pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_SECONDARY);
            this._lblDescription.lineWidth = this.width * 0.8;
            ui.centreHorizontal(this._lblDescription, 0, this.width);
            this._lblDescription.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 1, 0);

            if (this._sprite) {
                ui.centreHorizontal(this._sprite, 0, this.width);
                ui.centreVertical(this._sprite, 0, this.height);
                this._sprite.y -= managers.Game.HEIGHT * 0.1;

                this._lblTitle.y = this._sprite.y - this._sprite.getBounds().height - 5;
                this._lblDescription.y = this._sprite.y + this._sprite.getBounds().height + 20;
            } else {
                ui.centreVertical(this._lblTitle, 0, this.height);
                this._lblDescription.y = this._lblTitle.y + this._lblTitle.height + 10;
            }

            this._lblQuote = new ui.Label(this._quote, "9pt", managers.Style.FONT_FAMILY_PRIMARY,
                managers.Style.FONT_COLOUR_SUBTITLE);
            ui.centreHorizontal(this._lblQuote, 0, this.width);
            this._lblQuote.y = this.height - this._lblQuote.height - 20;

            this.main();
        }

        public update():number {
            return managers.Game.currentScene;
        }

        public main():void {
            this.addChild(this._overlay);
            this.addChild(this._sprite);
            this.addChild(this._lblTitle);
            this.addChild(this._lblDescription);
            this.addChild(this._lblQuote);
            this._overlay.on("mouseover", () => { this._onHover(); });
            this._overlay.on("mouseout", () => { this._onOut(); });
        }

        private _onHover() {
            this._overlay.graphics.clear().beginFill(managers.Style.OVERLAY_COLOUR_HOVER)
                .drawRoundRect(0, 0, this.width, this.height, 10);
            createjs.Tween.get(this).to({scaleX: 1.05, scaleY: 1.05}, 300, createjs.Ease.get(2));
            createjs.Sound.play("select").duration = 500;
        }

        private _onOut() {
            this._overlay.graphics.clear().beginFill("rgba(0,0,0,0.5)")
                .drawRoundRect(0, 0, this.width, this.height, 10);
            createjs.Tween.get(this).to({scaleX: 1, scaleY: 1}, 300, createjs.Ease.get(2));
        }
    }
}