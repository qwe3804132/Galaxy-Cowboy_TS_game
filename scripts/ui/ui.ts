module ui {
    export function centreHorizontal(child:createjs.DisplayObject, startX:number=0, parentWidth:number=-1) {
        let centre: number = managers.Game.WIDTH * 0.5;
        if (parentWidth != -1) {
            centre = parentWidth * 0.5;
        }

        child.x = startX + centre - child.getBounds().width * 0.5;
    }

    export function centreVertical(child:createjs.DisplayObject, startY:number=0, parentHeight:number=-1) {
        let centre: number = managers.Game.HEIGHT * 0.5;
        if (parentHeight != -1) {
            centre = parentHeight * 0.5;
        }

        child.y = startY + centre - child.getBounds().height * 0.5;
    }
}