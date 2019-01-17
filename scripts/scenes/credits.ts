module scenes {
    enum CreditType {
        TITLE,
        ROLE,
        NAME
    }

    export class CreditsScene extends objects.Scene {
        private _background: ui.Background;
        private _closeButton: ui.Button;
        private _credits = {
            "Team": [
                ["Software Engineer", "Angelica Catalan"],
                ["Producer & QA Tester", "Shila Rani Das"],
                ["Game Designer", "Peiran Liu"],
                ["Artist & Sound Engineer", "Liwen Qiao"],
            ],
            "Music & SFX": [
                ['"Happy Lullaby (song17)"', "cynicmusic"],
                ['"Happy Adventure"', "TinyWorlds"],
                ["SFX", "bart and ViRiX (David McKee)"]
            ]
        }
        private _labels: ui.Label[] = [];
        private _currentY: number = 80;
        
        constructor() {
            super();
            this.start();
        }

        public start():void {
            this._background = new ui.Background("credits");
            this._closeButton = new ui.Button("close", managers.Game.WIDTH, 20, 0.7);
            this._closeButton.x -= this._closeButton.width + 20;

            this._makeLabel("Team", CreditType.TITLE);
            this._credits.Team.forEach(credit => {
                this._makeLabel(credit[0], CreditType.ROLE);
                this._makeLabel(credit[1], CreditType.NAME);
            });

            this._makeLabel("Music & SFX", CreditType.TITLE);
            this._credits["Music & SFX"].forEach(credit => {
                this._makeLabel(credit[0], CreditType.ROLE);
                this._makeLabel(credit[1], CreditType.NAME);
            });

            let footer: ui.Label = new ui.Label("Sound assets from OpenGameArt.org", "9pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            ui.centreHorizontal(footer);
            footer.y = managers.Game.HEIGHT - footer.height - 20;
            this._labels.push(footer);

            this.main();
        }

        public main():void {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this._labels.forEach(label => {
                this.addChildAt(label, managers.Game.INDEX_GAMEOBJECTS);
            });
            this.addChildAt(this._closeButton, managers.Game.INDEX_UI);

            this._closeButton.on("click", () => { managers.Game.currentScene = config.Scene.START; });
            this._closeButton.on("mouseover", () => { createjs.Sound.play("select").duration = 500; });
        }

        private _makeLabel(text:string, type:CreditType) {
            let lblNew: ui.Label = new ui.Label(text, "11pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 0, this._currentY, true);
            lblNew.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_COOL, 1, 2, 0);

            switch (type) {
                case CreditType.TITLE:
                    ui.centreHorizontal(lblNew);
                    this._currentY += 15;
                    lblNew.font = "18pt " + managers.Style.FONT_FAMILY_PRIMARY;
                    lblNew.y = this._currentY;
                    this._currentY += lblNew.height + 20;
                    break;
                case CreditType.ROLE:
                    ui.centreHorizontal(lblNew);
                    lblNew.color = managers.Style.FONT_COLOUR_SECONDARY;
                    lblNew.x -= 20;
                    break;
                case CreditType.NAME:
                    lblNew.color = managers.Style.FONT_COLOUR_SECONDARY;
                    lblNew.regX = 0;
                    lblNew.x = 340;
                    this._currentY += lblNew.height + 4;
                    break;
            }
            this._labels.push(lblNew);
        }
    }
}