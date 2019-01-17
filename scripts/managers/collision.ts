module managers {
    export class Collision {
        public static check(object1:objects.GameObject, object2:objects.GameObject):boolean {
            if (object1 == null || object2 == null || object1 == object2 || !object1.isVisible() || !object2.isVisible())
                return;
                
            let pointA = new glm.vec2(object1.x, object1.y);
            let pointB = new glm.vec2(object2.x, object2.y);

            // Check for collision
            if (glm.vec2.distance(pointA, pointB) < (object1.halfHeight + object2.halfHeight)) {
                object1.collide(object2);
                object2.collide(object1);
                
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    return true;
                }
            } else {
                object2.isColliding = false;
            }
            
            return false;
        }
    }
}