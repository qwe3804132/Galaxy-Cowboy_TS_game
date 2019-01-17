var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var config;
(function (config) {
    var Character;
    (function (Character) {
        Character[Character["GUNSLINGER"] = 0] = "GUNSLINGER";
        Character[Character["QUICKSILVER"] = 1] = "QUICKSILVER";
    })(Character = config.Character || (config.Character = {}));
})(config || (config = {}));
var config;
(function (config) {
    // Color Presets
    var Color = /** @class */ (function () {
        function Color() {
        }
        Color.AZURE = "#F0FFFF";
        Color.BLACK = "#000000";
        Color.BLUE = "#0000FF";
        Color.BROWN = "#A52A2A";
        Color.CRIMSON = "#DC143C";
        Color.CYAN = "#00FFFF";
        Color.DARK_BLUE = "#00008B";
        Color.DARK_GREY = "#A9A9A9";
        Color.DARK_ORANGE = "#FF8C00";
        Color.DARK_RED = "#8B0000";
        Color.GOLD = "#FFD700";
        Color.GREEN = "#00FF00";
        Color.GREY = "#808080";
        Color.HOT_PINK = "#FF69B4";
        Color.INDIGO = "#4B0082";
        Color.IVORY = "#FFFFF0";
        Color.LIGHT_BLUE = "#ADD8E6";
        Color.LIGHT_GREY = "#D3D3D3";
        Color.LIGHT_PINK = "#FFB6C1";
        Color.LIGHT_YELLOW = "#FFFFE0";
        Color.MAGENTA = "#FF00FF";
        Color.MAROON = "#800000";
        Color.NAVY = "#000080";
        Color.OLIVE = "#808000";
        Color.ORANGE = "#FFA500";
        Color.PEACH = "#FFDAB9";
        Color.PINK = "#FFC0CB";
        Color.PURPLE = "#800080";
        Color.RED = "#FF0000";
        Color.SILVER = "#C0C0C0";
        Color.TEAL = "#008080";
        Color.VIOLET = "#EE82EE";
        Color.WHITE = "#FFFFFF";
        Color.WHITE_SMOKE = "#F5F5F5";
        Color.YELLOW = "#FFFF00";
        return Color;
    }());
    config.Color = Color;
})(config || (config = {}));
var config;
(function (config) {
    var Emitter;
    (function (Emitter) {
        Emitter[Emitter["RECTANGLE"] = 0] = "RECTANGLE";
        Emitter[Emitter["CIRCLE"] = 1] = "CIRCLE";
        Emitter[Emitter["ARC"] = 2] = "ARC";
    })(Emitter = config.Emitter || (config.Emitter = {}));
})(config || (config = {}));
var config;
(function (config) {
    var Enemy;
    (function (Enemy) {
        Enemy[Enemy["GUARD"] = 0] = "GUARD";
        Enemy[Enemy["WATCHER"] = 1] = "WATCHER";
        Enemy[Enemy["PATROLLER"] = 2] = "PATROLLER";
    })(Enemy = config.Enemy || (config.Enemy = {}));
})(config || (config = {}));
var config;
(function (config) {
    var Key = /** @class */ (function () {
        function Key() {
        }
        Key.W = "w";
        Key.S = "s";
        Key.A = "a";
        Key.D = "d";
        Key.N = "n";
        Key.C = "c";
        Key.ARROW_UP = "ArrowUp";
        Key.ARROW_DOWN = "ArrowDown";
        Key.ARROW_LEFT = "ArrowLeft";
        Key.ARROW_RIGHT = "ArrowRight";
        Key.SPACE = " ";
        Key.ESCAPE = "Escape";
        return Key;
    }());
    config.Key = Key;
})(config || (config = {}));
var config;
(function (config) {
    var Particle;
    (function (Particle) {
        Particle[Particle["CIRCLE"] = 0] = "CIRCLE";
        Particle[Particle["SQUARE"] = 1] = "SQUARE";
        Particle[Particle["TRIANGLE"] = 2] = "TRIANGLE";
        Particle[Particle["HEXAGON"] = 3] = "HEXAGON";
        Particle[Particle["STAR"] = 4] = "STAR";
    })(Particle = config.Particle || (config.Particle = {}));
})(config || (config = {}));
var config;
(function (config) {
    var ParticleEmitter;
    (function (ParticleEmitter) {
        ParticleEmitter[ParticleEmitter["SPHERE"] = 0] = "SPHERE";
        ParticleEmitter[ParticleEmitter["CUBOID"] = 1] = "CUBOID";
        ParticleEmitter[ParticleEmitter["FRUSTUM"] = 2] = "FRUSTUM";
    })(ParticleEmitter = config.ParticleEmitter || (config.ParticleEmitter = {}));
})(config || (config = {}));
var config;
(function (config) {
    var Powerup;
    (function (Powerup) {
        Powerup[Powerup["SUPERSPEED"] = 0] = "SUPERSPEED";
        Powerup[Powerup["SUPERARMOUR"] = 1] = "SUPERARMOUR";
        Powerup[Powerup["WARSHIP"] = 2] = "WARSHIP";
    })(Powerup = config.Powerup || (config.Powerup = {}));
})(config || (config = {}));
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["LEVEL1"] = 1] = "LEVEL1";
        Scene[Scene["LEVEL2"] = 2] = "LEVEL2";
        Scene[Scene["LEVEL3"] = 3] = "LEVEL3";
        Scene[Scene["TUTORIAL1"] = 4] = "TUTORIAL1";
        Scene[Scene["TUTORIAL2"] = 5] = "TUTORIAL2";
        Scene[Scene["TUTORIAL3"] = 6] = "TUTORIAL3";
        Scene[Scene["GAMEOVER"] = 7] = "GAMEOVER";
        Scene[Scene["SELECT"] = 8] = "SELECT";
        Scene[Scene["CREDITS"] = 9] = "CREDITS";
        Scene[Scene["WIN"] = 10] = "WIN";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
var config;
(function (config) {
    var Weapon;
    (function (Weapon) {
        Weapon[Weapon["REVOLVER"] = 0] = "REVOLVER";
        Weapon[Weapon["SHOTGUN"] = 1] = "SHOTGUN";
        Weapon[Weapon["BLASTER"] = 2] = "BLASTER";
    })(Weapon = config.Weapon || (config.Weapon = {}));
})(config || (config = {}));
var glm;
(function (glm) {
    var Point = /** @class */ (function () {
        function Point(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        return Point;
    }());
    glm.Point = Point;
})(glm || (glm = {}));
var objects;
(function (objects) {
    var Color = /** @class */ (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Color.
         *
         * @param {(number | number[] | string)} [r=0] red color value or number array or hex string
         * @param {number} [g=0] green color value
         * @param {number} [b=0] blue color value
         * @param {number} [a=0] alpha color value
         * @memberof Color
         */
        function Color(r, g, b, a) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            if (a === void 0) { a = 0; }
            // PUBLIC INSTANCE VARIABLES
            this._r = 0;
            this._g = 0;
            this._b = 0;
            this._a = 0;
            if (typeof r === "number") {
                this._setRGBA(r, g, b, a);
            }
            else if (typeof r === "string") {
                this._setHexColor(r);
            }
            else {
                this._arrayToColor(r);
            }
        }
        Object.defineProperty(Color.prototype, "r", {
            // PUBLIC PROPERTIES
            /**
             * This property returns the Red value of the Color object
             *
             * @type {number}
             * @memberof Color
             */
            get: function () {
                return this._r;
            },
            /**
            * This property sets the Red value of the Color object
            *
            * @type {number}
            * @memberof Color
            */
            set: function (red) {
                red = this._clampColor0To255(red);
                this._r = red;
                this._hex = this._toHexString();
                this._fullHex = this._toFullHexString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "g", {
            /**
            * This property returns the Green value of the Color object
            *
            * @type {number}
            * @memberof Color
            */
            get: function () {
                return this._g;
            },
            /**
             * This property sets the Green value of the Color object
             *
             * @type {number}
             * @memberof Color
             */
            set: function (green) {
                green = this._clampColor0To255(green);
                this._g = green;
                this._hex = this._toHexString();
                this._fullHex = this._toFullHexString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "b", {
            /**
             * This property returns the Blue value of the Color object
             *
             * @type {number}
             * @memberof Color
             */
            get: function () {
                return this._b;
            },
            /**
            * This property sets the Blue value of the Color object
            *
            * @type {number}
            * @memberof Color
            */
            set: function (blue) {
                blue = this._clampColor0To255(blue);
                this._b = blue;
                this._hex = this._toHexString();
                this._fullHex = this._toFullHexString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "a", {
            /**
             * This property returns the Alpha value of the Color object
             *
             * @type {number}
             * @memberof Color
             */
            get: function () {
                return this._a;
            },
            /**
             * This property sets the Alpha value of the Color object
             *
             * @type {number}
             * @memberof Color
             */
            set: function (alpha) {
                alpha = this._clampColor0To255(alpha);
                this._a = alpha;
                this._fullHex = this._toFullHexString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "hex", {
            /**
             * This property returns a hex reprentation of the Color object
             * Does not include the alpha value
             *
             * @type {string}
             * @memberof Color
             */
            get: function () {
                return this._hex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "fullHex", {
            /**
             * This property returns a hex representation of the Color object
             *
             * @type {string}
             * @memberof Color
             */
            get: function () {
                return this._fullHex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "rgb", {
            /**
             * This property returns a number array composed of the r, g, and b components of the Color object.
             * Values range from 0 to 255.
             *
             * @type {number[]}
             * @memberof Color
             */
            get: function () {
                return [this.r, this.g, this.b];
            },
            /**
             * This property sets the r, g, b values of the color object.
             * Acceptable values are 0 to 255
             *
             * @type {number[]}
             * @memberof Color
             */
            set: function (color) {
                this._arrayToColor(color);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Color.prototype, "normalize", {
            /**
             * This property returns a number array composed of the components of the Color object
             * Values range from 0 to 1
             *
             * @readonly
             * @type {number[]}
             * @memberof Color
             */
            get: function () {
                return [this.r / 255.00, this.g / 255.00, this.b / 255.00, this.a / 255.00];
            },
            enumerable: true,
            configurable: true
        });
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method returns a string representation of the color object
         *
         * @returns {string}
         * @memberof Color
         */
        Color.prototype.toString = function () {
            return "(R: " + this.r + " G: " + this.g + " B: " + this.b + " A: " + this.a + ")";
        };
        /**
         * Covert decimal value to hex value
         *
         * @param {number} [decimal=0]
         * @returns {string}
         * @memberof Color
         */
        Color.prototype.decimalToHex = function (decimal) {
            if (decimal === void 0) { decimal = 0; }
            var hex = Number(decimal).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };
        // PUBLIC STATIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method returns a number array of normalized values (between 0 and 1)
         *
         * @static
         * @param {Color} color
         * @returns {number[]}
         * @memberof Color
         */
        Color.normalize = function (color) {
            return [color.r / 255.00, color.g / 255.00, color.b / 255.00, color.a / 255.00];
        };
        /**
         * This method the Hex Color representation of an R, G, B color object
         *
         * @static
         * @param {Color} color
         * @returns {string}
         * @memberof Color
         */
        Color.RGBToHex = function (color) {
            return "#" + color.decimalToHex(color.r) + color.decimalToHex(color.g) + color.decimalToHex(color.b);
        };
        /**
         * Converts a hex color string to a number array of r, g and b color components
         * Array values are between 0 and 255
         *
         * @static
         * @param {string} color
         * @returns {number[]}
         * @memberof Color
         */
        Color.HexToRGB = function (color) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
            return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
        };
        Color.HexToColor = function (color) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
            return new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 255);
        };
        Color.RandomRange = function (colorA, colorB) {
            var Red = Math.floor(glm.RandomRange(colorA.r, colorB.r));
            var Green = Math.floor(glm.RandomRange(colorA.g, colorB.g));
            var Blue = Math.floor(glm.RandomRange(colorA.b, colorB.b));
            var Alpha = Math.floor(glm.RandomRange(colorA.a, colorB.a));
            return new objects.Color(Red, Green, Blue, Alpha);
        };
        // PUBLIC COLOR PRESETS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Color.Azure = function () {
            return new Color(config.Color.AZURE);
        };
        Color.Black = function () {
            return new Color(0, 0, 0, 255);
        };
        Color.Blue = function () {
            return new Color(0, 0, 255, 255);
        };
        Color.Brown = function () {
            return new Color(config.Color.BROWN);
        };
        Color.Crimson = function () {
            return new Color(config.Color.CRIMSON);
        };
        Color.Cyan = function () {
            return new Color(config.Color.CYAN);
        };
        Color.DarkBlue = function () {
            return new Color(config.Color.DARK_BLUE);
        };
        Color.DarkGrey = function () {
            return new Color(config.Color.DARK_GREY);
        };
        Color.DarkOrange = function () {
            return new Color(config.Color.DARK_ORANGE);
        };
        Color.DarkRed = function () {
            return new Color(config.Color.DARK_RED);
        };
        Color.Gold = function () {
            return new Color(config.Color.GOLD);
        };
        Color.Green = function () {
            return new Color(0, 255, 0, 255);
        };
        Color.Grey = function () {
            return new Color(config.Color.GREY);
        };
        Color.HotPink = function () {
            return new Color(config.Color.HOT_PINK);
        };
        Color.Indigo = function () {
            return new Color(config.Color.INDIGO);
        };
        Color.Ivory = function () {
            return new Color(config.Color.IVORY);
        };
        Color.LightBlue = function () {
            return new Color(config.Color.LIGHT_BLUE);
        };
        Color.LightGrey = function () {
            return new Color(config.Color.LIGHT_GREY);
        };
        Color.LightPink = function () {
            return new Color(config.Color.LIGHT_PINK);
        };
        Color.LightYellow = function () {
            return new Color(config.Color.LIGHT_YELLOW);
        };
        Color.Magenta = function () {
            return new Color(config.Color.MAGENTA);
        };
        Color.Maroon = function () {
            return new Color(config.Color.MAROON);
        };
        Color.Navy = function () {
            return new Color(config.Color.NAVY);
        };
        Color.Olive = function () {
            return new Color(config.Color.OLIVE);
        };
        Color.Orange = function () {
            return new Color(config.Color.ORANGE);
        };
        Color.Peach = function () {
            return new Color(config.Color.PEACH);
        };
        Color.Purple = function () {
            return new Color(config.Color.PURPLE);
        };
        Color.Red = function () {
            return new Color(255, 0, 0, 255);
        };
        Color.Silver = function () {
            return new Color(config.Color.SILVER);
        };
        Color.Teal = function () {
            return new Color(config.Color.TEAL);
        };
        Color.Violet = function () {
            return new Color(config.Color.VIOLET);
        };
        Color.White = function () {
            return new Color(255, 255, 255, 255);
        };
        Color.WhiteSmoke = function () {
            return new Color(config.Color.WHITE_SMOKE);
        };
        Color.Yellow = function () {
            return new Color(config.Color.YELLOW);
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Set the color component values
         *
         * @private
         * @param {number} [r]
         * @param {number} [g]
         * @param {number} [b]
         * @param {number} [a]
         * @memberof Color
         */
        Color.prototype._setRGBA = function (r, g, b, a) {
            if (r) {
                this.r = Math.floor(r);
            }
            if (g) {
                this.g = Math.floor(g);
            }
            if (b) {
                this.b = Math.floor(b);
            }
            if (a) {
                this.a = Math.floor(a);
            }
            if (!this.hex) {
                this._hex = this._toHexString();
            }
        };
        /**
         * Parses the hex color parameter to individual color components (r, g, b).
         * Sets alpha channel to 255.
         *
         * @private
         * @param {string} color
         * @memberof Color
         */
        Color.prototype._setHexColor = function (color) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
            this.r = parseInt(result[1], 16);
            this.g = parseInt(result[2], 16);
            this.b = parseInt(result[3], 16);
            this.a = 255;
        };
        /**
         * Parses a number array and separates color components (r, g, b, a)
         *
         * @private
         * @param {number[]} color
         * @memberof Color
         */
        Color.prototype._arrayToColor = function (color) {
            var length = color.length;
            if (length > 0) {
                this.r = color[0];
                if (length > 1) {
                    this.g = color[1];
                    if (length > 2) {
                        this.b = color[2];
                        if (length > 3) {
                            this.a = color[3];
                        }
                    }
                }
            }
        };
        /**
         * This method clamps a number value beetween 0 and 255
         *
         * @private
         * @param {number} value
         * @returns {number}
         * @memberof Color
         */
        Color.prototype._clampColor0To255 = function (value) {
            var color = value;
            if (value < 0) {
                color = 0;
            }
            if (value > 255) {
                color = 255;
            }
            return color;
        };
        /**
         * This method converts a Color object's components to hex values and returns a hex string representation
         *
         * @private
         * @returns {string}
         * @memberof Color
         */
        Color.prototype._toFullHexString = function () {
            return "#" + this.decimalToHex(this.r) + this.decimalToHex(this.g) + this.decimalToHex(this.b) + this.decimalToHex(this.a);
        };
        /**
         * This method converts a Color object's components to hex values and returns a hex string representation
         * Does not include the alpha value
         *
         * @private
         * @returns {string}
         * @memberof Color
         */
        Color.prototype._toHexString = function () {
            return "#" + this.decimalToHex(this.r) + this.decimalToHex(this.g) + this.decimalToHex(this.b);
        };
        return Color;
    }());
    objects.Color = Color;
})(objects || (objects = {}));
/// <reference path = "../objects/color.ts"/>
var glm;
/// <reference path = "../objects/color.ts"/>
(function (glm) {
    glm.EPSILON = 0.000001;
    glm.Deg2Rad = Math.PI / 180.0;
    glm.Rad2Deg = 180.0 / Math.PI;
    /**
     * Returns the -1 if the value is less than 0 and 1 if the value is greater than 0
     *
     * @export
     * @param {number} value
     * @returns {number}
     */
    function sign(value) {
        return (value < 0.0) ? -1.0 : 1.0;
    }
    glm.sign = sign;
    /**
     * This method confines the value provided between min and max and returns the result
     *
     * @export
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    function clamp(value, min, max) {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }
    glm.clamp = clamp;
    /**
     * Clamps a value between 0 and 1 and returns the result
     *
     * @export
     * @param {number} value
     * @returns {number}
     */
    function clamp01(value) {
        var result;
        if (value < 0.0) {
            result = 0.0;
        }
        else if (value > 1.0) {
            result = 1.0;
        }
        else {
            result = value;
        }
        return result;
    }
    glm.clamp01 = clamp01;
    function limitMagnitude(vector, magnitude) {
        var length = glm.vec2.magnitude(vector);
        if (length > magnitude) {
            var limiter = magnitude / length;
            vector.x *= limiter;
            vector.y *= limiter;
            return vector;
        }
        else {
            return vector;
        }
    }
    glm.limitMagnitude = limitMagnitude;
    /**
     * Performs Linear Interpolation between and b
     * at some t value betwee 0 and 1
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @returns {number}
     */
    function lerp(a, b, t) {
        return a + (b - a) * glm.clamp01(t);
    }
    glm.lerp = lerp;
    /**
     * Lerps between a and b at some t value - unclamped.
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @returns {number}
     */
    function lerpUnclamped(a, b, t) {
        return a + (b - a) * t;
    }
    glm.lerpUnclamped = lerpUnclamped;
    /**
     * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @returns {number}
     */
    function lerpAngle(a, b, t) {
        var num = glm.repeat(b - a, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return a + num * glm.clamp01(t);
    }
    glm.lerpAngle = lerpAngle;
    /**
     * lerps between to color objects at some tValue;
     *
     * @export
     * @param {objects.Color} a
     * @param {objects.Color} b
     * @param {number} t
     * @returns {objects.Color}
     */
    function lerpColor(a, b, t) {
        var red = a.r + (b.r - a.r) * glm.clamp01(t);
        var green = a.g + (b.g - a.g) * glm.clamp01(t);
        var blue = a.b + (b.b - a.b) * glm.clamp01(t);
        var alpha = a.a + (b.a - a.a) * glm.clamp01(t);
        return new objects.Color(red, green, blue, alpha);
    }
    glm.lerpColor = lerpColor;
    /**
     * Moves a value current towards target.
     * This is essentially the same as Lerp but instead the function will ensure that the speed never exceeds maxDelta.
     * Negative values of maxDelta pushes the value away from target.
     *
     * @export
     * @param {number} current  // the current value
     * @param {number} target   // the value to move towards
     * @param {number} maxDelta // the maximum change that should be applie to the value
     * @returns {number}
     */
    function moveTowards(current, target, maxDelta) {
        var result;
        if (Math.abs(target - current) <= maxDelta) {
            result = target;
        }
        else {
            result = current + glm.sign(target - current) * maxDelta;
        }
        return result;
    }
    glm.moveTowards = moveTowards;
    /**
     * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
     * Variables current and target are assumed to be in degrees.
     *
     * @export
     * @param {number} current
     * @param {number} target
     * @param {number} maxDelta
     * @returns {number}
     */
    function moveTowardsAngle(current, target, maxDelta) {
        var num = glm.deltaAngle(current, target);
        var result;
        if (-maxDelta < num && num < maxDelta) {
            result = target;
        }
        else {
            target = current + num;
            result = glm.moveTowards(current, target, maxDelta);
        }
        return result;
    }
    glm.moveTowardsAngle = moveTowardsAngle;
    /**
     * Interpolates between min and max with smoothing at the limits.
     *
     * @export
     * @param {number} from
     * @param {number} to
     * @param {number} t
     * @returns {number}
     */
    function smoothStep(from, to, t) {
        t = glm.clamp01(t);
        t = -2.0 * t * t * t + 3.0 * t * t;
        return to * t + from * (1.0 - t);
    }
    glm.smoothStep = smoothStep;
    function gamma(value, absmax, gamma) {
        var flag = false;
        if (value < 0.0) {
            flag = true;
        }
        var num = Math.abs(value);
        var result;
        if (num > absmax) {
            result = ((!flag) ? num : (-num));
        }
        else {
            var num2 = Math.pow(num / absmax, gamma) * absmax;
            result = ((!flag) ? num2 : (-num2));
        }
        return result;
    }
    glm.gamma = gamma;
    /**
     * Compares two floating point values and returns true if they are similar.
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @returns {boolean}
     */
    function approximately(a, b) {
        return Math.abs(b - a) < Math.max(1E-06 * Math.max(Math.abs(a), Math.abs(b)), glm.EPSILON * 8.0);
    }
    glm.approximately = approximately;
    /**
     * Loops the value t, so that it is never larger than length and never smaller than 0.
     *
     * @export
     * @param {number} t
     * @param {number} length
     * @returns {number}
     */
    function repeat(t, length) {
        return glm.clamp(t - Math.floor(t / length) * length, 0.0, length);
    }
    glm.repeat = repeat;
    /**
     * PingPongs the value t, so that it is never larger than length and never smaller than 0.
     *
     * @export
     * @param {number} t
     * @param {number} length
     * @returns {number}
     */
    function pingpong(t, length) {
        t = glm.repeat(t, length * 2.0);
        return length - Math.abs(t - length);
    }
    glm.pingpong = pingpong;
    /**
     * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
     *
     * @export
     * @param {number} a
     * @param {number} b
     * @param {number} value
     * @returns {number}
     */
    function inverseLerp(a, b, value) {
        var result;
        if (a != b) {
            result = glm.clamp01((value - a) / (b - a));
        }
        else {
            result = 0.0;
        }
        return result;
    }
    glm.inverseLerp = inverseLerp;
    /**
     * Calculates the shortest difference between two given angles given in degrees.
     *
     * @export
     * @param {number} current
     * @param {number} target
     * @returns {number}
     */
    function deltaAngle(current, target) {
        var num = glm.repeat(target - current, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return num;
    }
    glm.deltaAngle = deltaAngle;
    function lineIntersection(p1, p2, p3, p4, result) {
        if (!result) {
            result = new glm.vec2();
        }
        var num = p2.x - p1.x;
        var num2 = p2.y - p1.y;
        var num3 = p4.x - p3.x;
        var num4 = p4.y - p3.y;
        var num5 = num * num4 - num2 * num3;
        var result2;
        if (num5 == 0.0) {
            result2 = false;
        }
        else {
            var num6 = p3.x - p1.x;
            var num7 = p3.y - p1.y;
            var num8 = (num6 * num4 - num7 * num3) / num5;
            result = new glm.vec2(p1.x + num8 * num, p1.y + num8 * num2);
            result2 = true;
        }
        return result2;
    }
    glm.lineIntersection = lineIntersection;
    function RandomRange(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
    glm.RandomRange = RandomRange;
    /**
     * This Utility function checks to see if a number is very small (close to EPSILON)
     * If so, it changes the value to 0.0;
     *
     * @export
     * @param {number} value
     * @returns {number}
     */
    function Sanitize(value) {
        if ((value >= -glm.EPSILON) && (value <= glm.EPSILON)) {
            value = 0.0;
        }
        return value;
    }
    glm.Sanitize = Sanitize;
})(glm || (glm = {}));
var glm;
(function (glm) {
    var Vector = /** @class */ (function (_super) {
        __extends(Vector, _super);
        function Vector(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            return _super.call(this, x, y, z, w) || this;
        }
        Object.defineProperty(Vector.prototype, "rgb", {
            get: function () {
                return new Vector(this.x, this.y, this.z);
            },
            set: function (vec) {
                this.x = vec.x;
                this.y = vec.y;
                this.z = vec.z;
                this.w = 1.0;
            },
            enumerable: true,
            configurable: true
        });
        return Vector;
    }(glm.Point));
    glm.Vector = Vector;
})(glm || (glm = {}));
/// <reference path="vector.ts"/>
var glm;
/// <reference path="vector.ts"/>
(function (glm) {
    /**
     * The vec2 class which represents a 2D Vector with x and y properties
     *
     * @export
     * @class vec2
     * @extends {Vector}
     */
    var vec2 = /** @class */ (function (_super) {
        __extends(vec2, _super);
        /**
         * Creates an instance of vec2.
         *
         * @constructor
         * @param {number} [x=0] // defaults value to 0
         * @param {number} [y=0] // defaults value to 0
         * @memberof vec2
         */
        function vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, x, y) || this;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Object.defineProperty(vec2.prototype, "xy", {
            /***********************************************************************/
            /* GETTERS & SETTERS                                                   */
            /***********************************************************************/
            get: function () {
                return new vec2(this.x, this.y);
            },
            set: function (vec) {
                this.x = vec.x;
                this.y = vec.y;
            },
            enumerable: true,
            configurable: true
        });
        /***********************************************************************/
        /* PUBLIC METHODS                                                      */
        /***********************************************************************/
        /**
         * This method resets the vec2 object to zero values
         *
         * @memberof vec2
         */
        vec2.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
        };
        vec2.getGcd = function (x, y) {
            return y ? glm.vec2.getGcd(y, x % y) : x;
        };
        // Adapted from https://stackoverflow.com/a/4652513
        vec2.reduce = function (numerator, denominator) {
            var gcd = glm.vec2.getGcd(numerator, denominator);
            return [numerator / gcd, denominator / gcd];
        };
        vec2.slope = function (pointA, pointB) {
            return glm.vec2.reduce(pointB.y - pointA.y, pointB.x - pointA.x);
        };
        vec2.rise = function (pointA, pointB) {
            return pointB.y - pointA.y;
        };
        vec2.run = function (pointA, pointB) {
            return pointB.x - pointA.x;
        };
        /**
         * This method adds a vec2 to a vec2
         * Equivalent to += shortcut operation
         *
         * @param {vec2} vec
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.add = function (vec) {
            this.x += vec.x;
            this.y += vec.y;
            return this;
        };
        /**
         * This method subtracts a vec2 from a vec2
         * Equivalent to -= shortcut operation
         *
         * @param {vec2} vec
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.subtract = function (vec) {
            this.x -= vec.x;
            this.y -= vec.y;
            return this;
        };
        /**
         * This method multiplies a vec2 by another vec2
         * Equivalent to *= shortcut operation
         *
         * @param {vec2} vec
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.multiply = function (vec) {
            this.x *= vec.x;
            this.y *= vec.y;
            return this;
        };
        /**
         * This method divides a vec2 by another vec2
         * Equivalent to /= shortcut operation
         *
         * @param {vec2} vec
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.divide = function (vec) {
            this.x /= vec.x;
            this.y /= vec.y;
            return this;
        };
        /**
         * The method scales this vec2 by the scalar {value} parameter.
         *
         * @param {number} value
         * @memberof vec2
         */
        vec2.prototype.scale = function (value) {
            this.x *= value;
            this.y *= value;
        };
        /**
         * Sets the x and y components of this vec2
         *
         * @param {number} x
         * @param {number} y
         * @memberof vec2
         */
        vec2.prototype.set = function (x, y) {
            this.x = x;
            this.y = y;
        };
        /**
         * Returns the magnitude of this vec2
         *
         * @returns {number}
         * @memberof vec2
         */
        vec2.prototype.magnitude = function () {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        };
        /**
         * Returns the sqrMagnitude of this vec2
         * No Square Root
         * @returns {number}
         * @memberof vec2
         */
        vec2.prototype.sqrMagnitude = function () {
            return (this.x * this.x) + (this.y * this.y);
        };
        /**
         * This method returns the normalized value of this vec2
         *
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.normalized = function () {
            var result = new vec2(this.x, this.y);
            result.normalize();
            return result;
        };
        /**
         * This method normalizes the vec2 object
         *
         * @memberof vec2
         */
        vec2.prototype.normalize = function () {
            var magnitude = this.magnitude();
            if (magnitude > glm.EPSILON) {
                this.x /= magnitude;
                this.y /= magnitude;
            }
            else {
                this.reset();
            }
        };
        /**
        * This method overrides the built-in toString method to format the values
        * of a vec2 in (x, y) form and outputs this as a string
        *
        * @returns {string}
        * @memberof vec2
        */
        vec2.prototype.toString = function () {
            var x = this.x.toFixed(2);
            var y = this.y.toFixed(2);
            return "(" + x + ", " + y + ")";
        };
        /*****************************************************************/
        /* STATIC METHODS                                                */
        /*****************************************************************/
        /**
         * This method adds vecA and vecB and returns the result in dest
         * or a new vec2 object
         *
         * @static
         * @param {glm.vec2} vecA
         * @param {glm.vec2} vecB
         * @param {glm.vec2} [dest]
         * @returns {glm.vec2}
         * @memberof vec2
         */
        vec2.add = function (vecA, vecB, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = vecA.x + vecB.x;
            dest.y = vecA.y + vecB.y;
            return dest;
        };
        /**
         * This method subtracts vecB from vecA and then returns the result in dest
         * or a new vec2 object
         *
         * @static
         * @param {glm.vec2} vecA
         * @param {glm.vec2} vecB
         * @param {glm.vec2} [dest]
         * @returns {glm.vec2}
         * @memberof vec2
         */
        vec2.subtract = function (vecA, vecB, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = vecB.x - vecA.x;
            dest.y = vecB.y - vecA.y;
            return dest;
        };
        /**
         * This method copys the source vec2 into the destination vec2
         * or returns the result in a new vec2
         *
         * @static
         * @param {vec2} src  // source vec2
         * @param {vec2} [dest] // optional destination vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.copy = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = src.x;
            dest.y = src.y;
            return dest;
        };
        /**
         * This method rounds the source vec2 up using the Math.ceil function
         * and returns the result in dest or returns the result in a new vec2
         *
         * @static
         * @param {vec2} src  // source vec2
         * @param {vec2} [dest] // optional destination vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.ceil = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = Math.ceil(src.x);
            dest.y = Math.ceil(src.y);
            return dest;
        };
        /**
         * This method rounds the source vec2 down using the Math.floor function
         * and returns the result in dest or returns the result in a new vec2
         *
         * @static
         * @param {vec2} src  // source vec2
         * @param {vec2} [dest] // optional destination vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.floor = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = Math.floor(src.x);
            dest.y = Math.floor(src.y);
            return dest;
        };
        /**
     * This method rounds the src vec2 and returns the result in dest
     * or returns the result in a new vec2
     *
     * @static
     * @param {vec2} src // source vec2
     * @param {vec2} [dest] // optional destination vec2
     * @returns {vec2}
     * @memberof vec2
     */
        vec2.round = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = Math.round(src.x);
            dest.y = Math.round(src.y);
            return dest;
        };
        /**
         * This method computes the minimum values for x and y from vecA and vecB
         * and returns them in dest or returns the result in a new vec2
         *
         * @static
         * @param {vec2} vecA // first vec2
         * @param {vec2} vecB // second vec2
         * @param {vec2} [dest] // optional destination vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.min = function (vecA, vecB, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = Math.min(vecA.x, vecB.x);
            dest.y = Math.min(vecA.y, vecB.y);
            return dest;
        };
        /**
         * This method computes the maximum values of x and y from vecA and vecB
         * and returns the result in dest or returns the result as a new vec2
         *
         * @static
         * @param {vec2} vecA // first vec2
         * @param {vec2} vecB // second vec2
         * @param {vec2} [dest] // optional destination vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.max = function (vecA, vecB, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = Math.max(vecA.x, vecB.x);
            dest.y = Math.max(vecA.y, vecB.y);
            return dest;
        };
        /**
         * Returns the Euclidian distance of vecA and vecB
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @returns {number}
         * @memberof vec2
         */
        vec2.distance = function (vecA, vecB) {
            var x = vecB.x - vecA.x;
            var y = vecB.y - vecA.y;
            return Math.sqrt((x * x) + (y * y));
        };
        /**
         * Returns the Squared Euclidian distance of vecA and vecB
         * No Square Root
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @returns {number}
         * @memberof vec2
         */
        vec2.squaredDistance = function (vecA, vecB) {
            var x = vecB.x - vecA.x;
            var y = vecB.y - vecA.y;
            return (x * x) + (y * y);
        };
        /**
         * Returns the magnitude of a vec2
         *
         * @static
         * @param {vec2} vec
         * @returns {number}
         * @memberof vec2
         */
        vec2.magnitude = function (vec) {
            var x = vec.x;
            var y = vec.y;
            return Math.sqrt((x * x) + (y * y));
        };
        /**
         * Returns the squared Magnitude of a vec2
         * No Square Root
         *
         * @static
         * @param {vec2} vec
         * @returns {number}
         * @memberof vec2
         */
        vec2.squaredMagnitude = function (vec) {
            var x = vec.x;
            var y = vec.y;
            return (x * x) + (y * y);
        };
        /**
         * Negates the x and y components of a src vec2 and returns them in dest vec2
         * or a new vec2 object
         *
         * @static
         * @param {vec2} src    // source vec2
         * @param {vec2} [dest] // optional destinatino vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.negate = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = -src.x;
            dest.y = -src.y;
            return dest;
        };
        /**
         * Returns the inverse x and y components of src vec2 and returns them in dest vec2
         * or a new vec2 object
         *
         * @static
         * @param {vec2} src
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.inverse = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = 1.0 / src.x;
            dest.y = 1.0 / src.y;
            return dest;
        };
        /**
         * Normalizes src and stores the result in dest
         * or a new vec2 object
         *
         * @static
         * @param {vec2} src
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.normalize = function (src, dest) {
            if (!dest) {
                dest = new vec2();
            }
            var x = src.x;
            var y = src.y;
            var length = (x * x) + (y * y);
            if (length > 0) {
                length = 1.0 / Math.sqrt(length);
                dest.x = src.x * length;
                dest.y = src.y * length;
            }
            return dest;
        };
        /**
         * Computes the dot product of vecA and vecB and returns a scalar value
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @returns {number}
         * @memberof vec2
         */
        vec2.dot = function (vecA, vecB) {
            return (vecA.x * vecB.x) + (vecA.y * vecB.y);
        };
        /**
         * Computes the cross product of vecA and vecB and returns the result
         * in dest, a vec3 object or a new vec3 object is generated
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @param {vec3} [dest]
         * @returns {vec3}
         * @memberof vec2
         */
        vec2.cross = function (vecA, vecB, dest) {
            if (!dest) {
                dest = new glm.vec3();
            }
            var z = (vecA.x * vecB.y) - (vecA.y * vecB.x);
            dest.x = 0;
            dest.y = 0;
            dest.z = z;
            return dest;
        };
        /**
         * Performs a Linear Interpolation between vecA and vecB using the tValue
         * and returns the result in dest vec2 or a new vec2 object.
         * tValue is clamped between 0 and 1
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @param {number} tValue
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.lerp = function (vecA, vecB, tValue, dest) {
            if (!dest) {
                dest = new vec2();
            }
            tValue = glm.clamp01(tValue);
            dest.x = ((1.0 - tValue) * vecA.x) + (tValue * vecB.x);
            dest.y = ((1.0 - tValue) * vecA.y) + (tValue * vecB.y);
            return dest;
        };
        /**
         * Performs a Linear Interpolation between vecA and vecB using the tValue
         * and returns the result in dest vec2 or a new vec2 object.
         * tvalue is not clamped* Performs a Linear Interpolation between vecA and vecB using the tValue
         * and returns the result in dest vec2 or a new vec2 object
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @param {number} tValue
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.lerpUnclamped = function (vecA, vecB, tValue, dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = ((1.0 - tValue) * vecA.x) + (tValue * vecB.x);
            dest.y = ((1.0 - tValue) * vecA.y) + (tValue * vecB.y);
            return dest;
        };
        vec2.moveTowards = function (current, target, maxDistanceDelta) {
            var a = new vec2();
            a.x = target.x - current.x;
            a.y = target.y - current.y;
            var magnitude = a.magnitude();
            var result = new vec2();
            if (magnitude <= maxDistanceDelta || magnitude == 0.0) {
                result = target;
            }
            else {
                result.x = current.x + a.x / magnitude * maxDistanceDelta;
                result.y = current.y + a.y / magnitude * maxDistanceDelta;
            }
            return result;
        };
        /**
         * Generates a random vec2 with the given scale and returns the result
         * in dest or a new vec2 object
         *
         * @static
         * @param {number} [scale=1.0] // default scale = 1.0
         * @param {vec2} [dest]        // optional destinatin vec2
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.random = function (scale, dest) {
            if (scale === void 0) { scale = 1.0; }
            if (!dest) {
                dest = new vec2();
            }
            var result = Math.random() * 2.0 * Math.PI;
            dest.x = Math.cos(result) * scale;
            dest.y = Math.sin(result) * scale;
            return dest;
        };
        /**
         * Returns true if the vecA has the same elements in the same position as vecB
         * otherwise returns false
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @returns {boolean}
         * @memberof vec2
         */
        vec2.exactEquals = function (vecA, vecB) {
            return ((vecA.x === vecB.x) && (vecA.y === vecB.y));
        };
        /**
         * Returns true if vecA has approximately the same elements in the same position as vecB
         * otherwise returns false
         *
         * @static
         * @param {vec2} vecA
         * @param {vec2} vecB
         * @returns {boolean}
         * @memberof vec2
         */
        vec2.equals = function (vecA, vecB) {
            var x1 = vecA.x;
            var x2 = vecB.x;
            var y1 = vecA.y;
            var y2 = vecB.y;
            return (Math.abs(x1 - x2) <= glm.EPSILON * Math.max(1.0, Math.abs(x1), Math.abs(x2)) &&
                Math.abs(y1 - y2) <= glm.EPSILON * Math.max(1.0, Math.abs(y1), Math.abs(y2)));
        };
        vec2.reflect = function (inDirection, inNormal, dest) {
            if (!dest) {
                dest = new vec2();
            }
            var dot = vec2.dot(inNormal, inDirection);
            dest.x = -2.0 * dot * inNormal.x + inDirection.x;
            dest.y = -2.0 * dot * inNormal.y + inDirection.y;
            return dest;
        };
        /**
         * Returns the angle between two vec2 objects
         * calculated from the origin (0, 0)
         *
         * @static
         * @param {vec2} from
         * @param {vec2} to
         * @returns {number}
         * @memberof vec2
         */
        vec2.angle = function (from, to) {
            var fromNorm = from.normalized();
            var toNorm = to.normalized();
            var dot = vec2.dot(fromNorm, toNorm);
            var dotClamp = glm.clamp(dot, -1.0, 1.0);
            var angleRadians = Math.acos(dotClamp);
            return angleRadians * glm.Rad2Deg;
        };
        /**
         * Finds the angle from vecA to vecB
         * Assuming angle is not the origin
         * Zero degrees starts to the right of the origin (East)
         * Positive 90 is up
         * Negative 90 is down
         *
         * @static
         * @param {vec2} from
         * @param {vec2} to
         * @returns {number}
         * @memberof vec2
         */
        vec2.angleOfAttack = function (from, to, is360) {
            if (is360 === void 0) { is360 = false; }
            var diff = glm.vec2.subtract(from, to);
            var angleRadians = Math.atan2(diff.y, diff.x);
            var angle = angleRadians * -glm.Rad2Deg;
            if (is360 && angle < 0) {
                angle = 360 + angle;
            }
            return angle;
        };
        /**
         * Returns the singed angle between two vec2 objects
         * calculated from thd origin (0, 0)
         *
         * @static
         * @param {vec2} from
         * @param {vec2} to
         * @returns {number}
         * @memberof vec2
         */
        vec2.signedAngle = function (from, to) {
            var normalized = from.normalized();
            var normalized2 = to.normalized();
            var num = Math.acos(glm.clamp(vec2.dot(normalized, normalized2), -1.0, 1.0)) * glm.Rad2Deg;
            var num2 = glm.sign(normalized.x * normalized2.y - normalized.y * normalized2.x);
            return num * num2;
        };
        /**
         * Determines the direction from vecA to vecB and stores the result in dest
         * The direction result is a vector that can be used to multiply against speed
         *
         *
         * @static
         * @param {vec2} from
         * @param {vec2} to
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.direction = function (from, to) {
            var result = new glm.vec2();
            // returns a vec2 that equals (0, 0) if both from and to are the same
            if (glm.vec2.equals(from, to)) {
                return result;
            }
            var angle = glm.vec2.angleOfAttack(from, to);
            result.x = Math.cos(angle * glm.Deg2Rad);
            result.y = Math.sin(angle * glm.Deg2Rad);
            // sanitizes components of result
            result.x = glm.Sanitize(result.x);
            result.y = glm.Sanitize(result.y);
            return result;
        };
        /**
         * Shorthand for writing vec2(0, -1). Stores the new vec2 in dest
         * or creates a new vec2 object
         *
         * @static
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.down = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = 0;
            dest.y = -1;
            return dest;
        };
        /**
         * Shorthand for writing vec2(-1, 0). Stores the new vec2 in dest
         * or creates a new vec2 object
         *
         * @static
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.left = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = -1;
            dest.y = 0;
            return dest;
        };
        /**
         * Shorthand for writing vec2(1, 0). Stores the new vec2 in dest
         * or creates a new vec2 object
         *
         * @static
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.right = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = 1;
            dest.y = 0;
            return dest;
        };
        /**
         * Shorthand for writing vec2(0, 1). Stores the new vec2 in dest
         * or creates a new vec2 object
         *
         * @static
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.up = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = 0;
            dest.y = 1;
            return dest;
        };
        /**
         * Shorthand for writing vec2(0, 0). Stores the new vec2 in dest
         * or creates a new vec2 object
         *
         * @static
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.zero = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = 0;
            dest.y = 0;
            return dest;
        };
        /**
         * Shorthand for writing vec2(1, 1). Stores the new vec2 in dest
         * or creates a new vec2 object
         *
         * @static
         * @param {vec2} [dest]
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.one = function (dest) {
            if (!dest) {
                dest = new vec2();
            }
            dest.x = 1;
            dest.y = 1;
            return dest;
        };
        return vec2;
    }(glm.Vector));
    glm.vec2 = vec2;
})(glm || (glm = {}));
var glm;
(function (glm) {
    var vec3 = /** @class */ (function (_super) {
        __extends(vec3, _super);
        function vec3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            var _this = this;
            var thisX;
            var thisY;
            var thisZ;
            if (typeof x != 'number') {
                thisX = x.x;
                thisY = x.y;
                thisZ = y;
            }
            else {
                thisX = x;
                thisY = y;
                thisZ = z;
            }
            _this = _super.call(this, thisX, thisY, thisZ) || this;
            return _this;
        }
        Object.defineProperty(vec3.prototype, "xyz", {
            // PUBLIC GETTERS AND SETTERS
            get: function () {
                return new glm.Vector(this.x, this.y, this.z);
            },
            set: function (vec) {
                this.x = vec.x;
                this.y = vec.y;
                this.z = vec.z;
                this.w = 1.0;
            },
            enumerable: true,
            configurable: true
        });
        // PUBLIC METHODS
        vec3.prototype.toString = function () {
            return "(" + this.x + ", " + this.y + ", " + this.z + ")";
        };
        return vec3;
    }(glm.Vector));
    glm.vec3 = vec3;
})(glm || (glm = {}));
var ui;
(function (ui) {
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(imageString, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, managers.Game.textureAtlas, imageString) || this;
            _this.x = x;
            _this.y = y;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            if (isCentered) {
                _this.x -= _this.width * 0.5;
            }
            return _this;
        }
        return Image;
    }(createjs.Sprite));
    ui.Image = Image;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(labelString, fontSize, fontFamily, fontColour, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, fontColour) || this;
            if (isCentered) {
                _this._isCentered = true;
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            _this.width = _this.getMeasuredWidth();
            _this.height = _this.getMeasuredHeight();
            _this.halfWidth = _this.width * 0.5;
            _this.halfHeight = _this.height * 0.5;
            return _this;
        }
        return Label;
    }(createjs.Text));
    ui.Label = Label;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // private instance variables
        // public properties
        // Constructor
        function Background(imageString) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        // public methods
        // Initializes variables and creates new objects
        Background.prototype.start = function () {
        };
        // updates the game object every frame
        Background.prototype.update = function () {
        };
        return Background;
    }(createjs.Bitmap));
    ui.Background = Background;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(imageString, x, y, mouseOverAlpha, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (mouseOverAlpha === void 0) { mouseOverAlpha = 1; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imageString, x, y, isCentered) || this;
            _this._mouseOverAlpha = mouseOverAlpha;
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        Button.prototype.mouseOver = function () {
            this.alpha = this._mouseOverAlpha;
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1;
        };
        return Button;
    }(ui.Image));
    ui.Button = Button;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var ObjectiveMarker = /** @class */ (function () {
        function ObjectiveMarker() {
        }
        return ObjectiveMarker;
    }());
    ui.ObjectiveMarker = ObjectiveMarker;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var Selection = /** @class */ (function (_super) {
        __extends(Selection, _super);
        function Selection(x, y, width, height, title, description, quote, sprite) {
            if (description === void 0) { description = ""; }
            if (quote === void 0) { quote = ""; }
            if (sprite === void 0) { sprite = null; }
            var _this = _super.call(this) || this;
            _this.width = width;
            _this.height = height;
            _this.title = title;
            _this.x = x;
            _this.y = y;
            _this._description = description;
            _this._quote = quote;
            _this._sprite = sprite;
            _this.start();
            return _this;
        }
        Selection.prototype.start = function () {
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this._overlay = new createjs.Shape(new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRoundRect(0, 0, this.width, this.height, 10));
            this._lblTitle = new ui.Label(this.title, "18pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY);
            ui.centreHorizontal(this._lblTitle, 0, this.width);
            this._lblTitle.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
            this._lblDescription = new ui.Label(this._description, "11pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            this._lblDescription.lineWidth = this.width * 0.8;
            ui.centreHorizontal(this._lblDescription, 0, this.width);
            this._lblDescription.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 1, 0);
            if (this._sprite) {
                ui.centreHorizontal(this._sprite, 0, this.width);
                ui.centreVertical(this._sprite, 0, this.height);
                this._sprite.y -= managers.Game.HEIGHT * 0.1;
                this._lblTitle.y = this._sprite.y - this._sprite.getBounds().height - 5;
                this._lblDescription.y = this._sprite.y + this._sprite.getBounds().height + 20;
            }
            else {
                ui.centreVertical(this._lblTitle, 0, this.height);
                this._lblDescription.y = this._lblTitle.y + this._lblTitle.height + 10;
            }
            this._lblQuote = new ui.Label(this._quote, "9pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SUBTITLE);
            ui.centreHorizontal(this._lblQuote, 0, this.width);
            this._lblQuote.y = this.height - this._lblQuote.height - 20;
            this.main();
        };
        Selection.prototype.update = function () {
            return managers.Game.currentScene;
        };
        Selection.prototype.main = function () {
            var _this = this;
            this.addChild(this._overlay);
            this.addChild(this._sprite);
            this.addChild(this._lblTitle);
            this.addChild(this._lblDescription);
            this.addChild(this._lblQuote);
            this._overlay.on("mouseover", function () { _this._onHover(); });
            this._overlay.on("mouseout", function () { _this._onOut(); });
        };
        Selection.prototype._onHover = function () {
            this._overlay.graphics.clear().beginFill(managers.Style.OVERLAY_COLOUR_HOVER)
                .drawRoundRect(0, 0, this.width, this.height, 10);
            createjs.Tween.get(this).to({ scaleX: 1.05, scaleY: 1.05 }, 300, createjs.Ease.get(2));
            createjs.Sound.play("select").duration = 500;
        };
        Selection.prototype._onOut = function () {
            this._overlay.graphics.clear().beginFill("rgba(0,0,0,0.5)")
                .drawRoundRect(0, 0, this.width, this.height, 10);
            createjs.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.get(2));
        };
        return Selection;
    }(createjs.Container));
    ui.Selection = Selection;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var Tooltip = /** @class */ (function (_super) {
        __extends(Tooltip, _super);
        function Tooltip(imageString, messages) {
            var _this = _super.call(this) || this;
            _this._currentIndex = 0;
            _this._messages = messages;
            _this.start();
            return _this;
        }
        Tooltip.prototype.start = function () {
            this._bgImg = new ui.Image("tooltipBg");
            this.width = this._bgImg.width;
            this.height = this._bgImg.height;
            var marginX = 10;
            var marginY = 10;
            this.x = managers.Game.WIDTH - this.width - marginX;
            this.y = managers.Game.HEIGHT - this.height - marginY;
            this._tooltipLabel = new ui.Label(this._messages[0], "9pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            this._tooltipLabel.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_WARM, 1, 1, 0);
            this._nextButton = new ui.Button("next");
            this._closeButton = new ui.Button("close");
            this._arrange();
            this.main();
        };
        Tooltip.prototype.main = function () {
            var _this = this;
            this.addChildAt(this._bgImg, managers.Game.INDEX_BACKGROUND);
            this.addChild(this._nextButton);
            this.addChild(this._closeButton);
            this.addChild(this._tooltipLabel);
            this.displayPage(0);
            this._nextButton.addEventListener("click", function () {
                _this.displayNextPage();
            });
            this._closeButton.addEventListener("click", function () {
                _this.close();
            });
        };
        Tooltip.prototype.update = function () {
            if (managers.Game.keyboardManager.nextTooltip) {
                this.displayNextPage();
            }
            if (managers.Game.keyboardManager.closeTooltip) {
                managers.Game.currentSceneObject.removeChild(this);
            }
        };
        Tooltip.prototype.addPage = function (message) {
            this._messages.push(message);
        };
        Tooltip.prototype._arrange = function () {
            var marginX = 10;
            var marginY = 5;
            this._closeButton.x = this.width - this._closeButton.width - marginX;
            this._closeButton.y = marginY;
            this._nextButton.x = this.width - this._nextButton.width - marginX;
            this._nextButton.y = this.height - this._nextButton.height - marginY;
            this._tooltipLabel.x = 35;
            this._tooltipLabel.y = 15;
            this._tooltipLabel.lineWidth = this.width - this._closeButton.width - 35;
        };
        Tooltip.prototype.displayPage = function (index) {
            if (index >= this._messages.length) {
                return;
            }
            this._tooltipLabel.text = this._messages[index];
            if (index == this._messages.length - 1) {
                // Last page
                this._nextButton.visible = false;
            }
        };
        Tooltip.prototype.displayNextPage = function () {
            this._currentIndex++;
            this.displayPage(this._currentIndex);
        };
        Tooltip.prototype.close = function () {
            managers.Game.currentSceneObject.removeChild(this);
        };
        return Tooltip;
    }(createjs.Container));
    ui.Tooltip = Tooltip;
})(ui || (ui = {}));
var ui;
(function (ui) {
    function centreHorizontal(child, startX, parentWidth) {
        if (startX === void 0) { startX = 0; }
        if (parentWidth === void 0) { parentWidth = -1; }
        var centre = managers.Game.WIDTH * 0.5;
        if (parentWidth != -1) {
            centre = parentWidth * 0.5;
        }
        child.x = startX + centre - child.getBounds().width * 0.5;
    }
    ui.centreHorizontal = centreHorizontal;
    function centreVertical(child, startY, parentHeight) {
        if (startY === void 0) { startY = 0; }
        if (parentHeight === void 0) { parentHeight = -1; }
        var centre = managers.Game.HEIGHT * 0.5;
        if (parentHeight != -1) {
            centre = parentHeight * 0.5;
        }
        child.y = startY + centre - child.getBounds().height * 0.5;
    }
    ui.centreVertical = centreVertical;
})(ui || (ui = {}));
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        function GameObject(imageName, px, py, qx, qy) {
            if (qx === void 0) { qx = 0; }
            if (qy === void 0) { qy = 0; }
            var _this = _super.call(this, managers.Game.textureAtlas, imageName) || this;
            _this.isDestroyed = false;
            _this.name = imageName;
            _this.x = px;
            _this.y = py;
            _this._origin = new glm.vec2(px, py);
            _this._destination = new glm.vec2(qx, qy);
            _this._initialize();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "leftX", {
            get: function () {
                return this.x - this.halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "rightX", {
            get: function () {
                return this.x + this.halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "topY", {
            get: function () {
                return this.y - this.halfHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "bottomY", {
            get: function () {
                return this.y + this.halfHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "origin", {
            get: function () {
                return this._origin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "destination", {
            get: function () {
                return this._destination;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "mvspd", {
            get: function () {
                return this._mvspd;
            },
            set: function (mvspd) {
                this._mvspd = mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "movementAmount", {
            get: function () {
                return managers.Game.BASE_MVSPD * this.mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "weapon", {
            get: function () {
                return this._weapon;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
            this.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_WARM, 0, 4, 4);
        };
        GameObject.prototype.reset = function () { };
        GameObject.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
        };
        GameObject.prototype.getNextPosition = function (movementAmount) {
            if (movementAmount === void 0) { movementAmount = null; }
            var newX;
            var newY;
            var run = glm.vec2.run(this._origin, this._destination);
            var rise = glm.vec2.rise(this._origin, this._destination);
            var c;
            var divisor;
            if (movementAmount == null) {
                movementAmount = this.movementAmount;
            }
            c = Math.sqrt(Math.pow(run, 2) + Math.pow(rise, 2));
            divisor = c / movementAmount;
            run = Math.abs(run / divisor);
            rise = Math.abs(rise / divisor);
            if (this._destination.x < this._origin.x) {
                run *= -1; // move left
            }
            if (this._destination.y < this._origin.y) {
                rise *= -1; // move down
            }
            newX = Math.round(this.x + run);
            newY = Math.round(this.y + rise);
            return new glm.vec2(newX, newY);
        };
        GameObject.prototype.move = function (movementAmount) {
            if (movementAmount === void 0) { movementAmount = null; }
            var newPosition = this.getNextPosition(movementAmount);
            this.x = newPosition.x;
            this.y = newPosition.y;
        };
        GameObject.prototype.start = function () { };
        GameObject.prototype.update = function () { };
        GameObject.prototype.collide = function (other) { };
        GameObject.prototype.destroy = function (silent) {
            if (silent === void 0) { silent = false; }
            this.isDestroyed = true;
        };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Obstacle = /** @class */ (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Obstacle;
    }(objects.GameObject));
    objects.Obstacle = Obstacle;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Destructible = /** @class */ (function (_super) {
        __extends(Destructible, _super);
        function Destructible(imageName, hp, px, py) {
            var _this = _super.call(this, imageName, px, py) || this;
            _this.hp = hp;
            //this.x=px;
            //this.y=py;  
            _this.lastValidPosition = new glm.vec2(px, py);
            return _this;
        }
        Destructible.prototype.reset = function () { };
        Destructible.prototype.checkBounds = function (other) {
            if (other === void 0) { other = null; }
        };
        Destructible.prototype.move = function () { };
        Destructible.prototype.attack = function () { };
        Destructible.prototype.collide = function (other) {
            if (this.hp <= 0) {
                this.destroy();
            }
        };
        Destructible.prototype.destroy = function (silent) {
            if (silent === void 0) { silent = false; }
            _super.prototype.destroy.call(this, silent);
            if (!silent) {
                createjs.Sound.play("breaking");
                this.spawnPowerup();
            }
            var breaking = new objects.explosion(this.x - this.halfWidth, this.y - this.halfHeight, "breaking");
            managers.Game.currentSceneObject.addChildAt(breaking, managers.Game.INDEX_GAMEOBJECTS);
        };
        Destructible.prototype.spawnPowerup = function () {
            var random = Math.random();
            if (random < 0.2) {
                new objects.Powerup(objects.Powerup.getRandomType(), this.x, this.y);
            }
        };
        return Destructible;
    }(objects.Obstacle));
    objects.Destructible = Destructible;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var DestructibleDummy = /** @class */ (function (_super) {
        __extends(DestructibleDummy, _super);
        function DestructibleDummy(imageName, hp, px, py) {
            var _this = _super.call(this, imageName, hp, px, py) || this;
            _this.visible = false;
            return _this;
        }
        DestructibleDummy.prototype.collide = function (other) {
            if (this.isVisible())
                _super.prototype.collide.call(this, other);
        };
        return DestructibleDummy;
    }(objects.Destructible));
    objects.DestructibleDummy = DestructibleDummy;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var explosion = /** @class */ (function (_super) {
        __extends(explosion, _super);
        // private instance variables
        // public properties
        // constructors
        function explosion(px, py, imageName) {
            var _this = _super.call(this, managers.Game.textureAtlas, imageName) || this;
            _this.x = px;
            _this.y = py;
            _this.Start();
            return _this;
        }
        // private methods
        explosion.prototype._animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        };
        // public methods
        explosion.prototype.Start = function () {
            this.on("animationend", this._animationEnded.bind(this), false);
        };
        explosion.prototype.Update = function () {
        };
        return explosion;
    }(createjs.Sprite));
    objects.explosion = explosion;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Map = /** @class */ (function (_super) {
        __extends(Map, _super);
        function Map(imageString) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        Object.defineProperty(Map.prototype, "startX", {
            get: function () {
                return this._startX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Map.prototype, "startY", {
            get: function () {
                return this._startY;
            },
            enumerable: true,
            configurable: true
        });
        Map.prototype._reset = function () {
            // Start at the bottom left of the map
            this.x = this.startX;
            this.y = this.startY;
        };
        Map.prototype.start = function () {
            this._dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._startX = 0;
            this._startY = -this.height + managers.Game.HEIGHT;
            this._reset();
        };
        return Map;
    }(createjs.Bitmap));
    objects.Map = Map;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Particle = /** @class */ (function (_super) {
        __extends(Particle, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Particle(type, color, size) {
            if (type === void 0) { type = "circle"; }
            if (color === void 0) { color = objects.Color.Red(); }
            if (size === void 0) { size = 50; }
            var _this = _super.call(this) || this;
            // PUBLIC INSTANCE VARIABLES
            _this.velocity = new glm.vec2();
            _this.acceleration = new glm.vec2();
            _this.force = new glm.vec2();
            _this.mass = 1.0;
            _this.life = 0; // lifetime remaining in seconds
            _this.color = color;
            _this.size = size;
            _this.type = type;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(Particle.prototype, "size", {
            // PUBLIC PROPERTIES
            /**
             * This property returns the size of the particle in pixels
             *
             * @type {number}
             * @memberof Particle
             */
            get: function () {
                return this._size;
            },
            /**
             * This property sets the size of the particle in pixels
             *
             * @memberof Particle
             */
            set: function (newSize) {
                this._size = newSize;
                if (this.shape) {
                    switch (this.type) {
                        case "circle":
                            this._setCircleGraphics();
                            this._setCircleCache();
                            break;
                        case "square":
                            this._setSquareGraphics();
                            this._setSquareCache();
                            break;
                        case "triangle":
                            this._setTriangleGraphics();
                            this._setTriangleCache();
                            break;
                        case "hexagon":
                            this._setHexagonGraphics();
                            this._setHexagonCache();
                            break;
                        case "star":
                            this._setStarGraphics();
                            this._setStarCache();
                            break;
                        case "explosion":
                        case "flame":
                            this.shape.scaleX = this._size / this.shapeWidth;
                            this.shape.scaleY = this._size / this.shapeHeight;
                            break;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Particle.prototype, "color", {
            /**
             * This property returns the color of the particle
             *
             * @type {objects.Color}
             * @memberof Particle
             */
            get: function () {
                return this._color;
            },
            /**
             * This property sets the color of the particle
             *
             * @memberof Particle
             */
            set: function (newColor) {
                this.filters = [new createjs.ColorFilter(newColor.r / 255.0, newColor.g / 255.0, newColor.b / 255.0, newColor.a / 255.0)];
                if (this.shape) {
                    switch (this.type) {
                        case "circle":
                            this._setCircleGraphics();
                            break;
                        case "square":
                            this._setSquareGraphics();
                            break;
                        case "triangle":
                            this._setTriangleGraphics();
                            break;
                        case "hexagon":
                            this._setHexagonGraphics();
                            break;
                        case "star":
                            this._setStarGraphics();
                            break;
                        case "explosion":
                        case "flame":
                            this.shape.filters = this.filters;
                            this.shape.updateCache();
                            break;
                    }
                }
                this._color = newColor;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Particle.prototype._initialize = function () {
            var filter = new createjs.ColorFilter(this.color.r / 255.0, this.color.g / 255.0, this.color.b / 255.0, this.color.a / 255.0);
            this.filters = [filter];
            switch (this.type) {
                case "circle":
                    this.graphics = new createjs.Graphics();
                    this._setCircleGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setCircleCache();
                    break;
                case "square":
                    this.graphics = new createjs.Graphics();
                    this._setSquareGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setSquareCache();
                    break;
                case "triangle":
                    this.graphics = new createjs.Graphics();
                    this._setTriangleGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setTriangleCache();
                    break;
                case "hexagon":
                    this.graphics = new createjs.Graphics();
                    this._setHexagonGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setHexagonCache();
                    break;
                case "star":
                    this.graphics = new createjs.Graphics();
                    this._setStarGraphics();
                    this.shape = new createjs.Shape(this.graphics);
                    this._setStarCache();
                    break;
                default:
                    this.shape = new createjs.Shape();
                    break;
            }
        };
        Particle.prototype._setBitmapParticleCache = function () {
            this.shape.regX = this.shapeWidth * 0.5;
            this.shape.regY = this.shapeHeight * 0.5;
            this.shape.filters = this.filters;
            //this.shape.cache(0, 0, this.shape.getBounds().width, this.shape.getBounds().height, 1);
            this.shape.cache(0, 0, this.shapeWidth, this.shapeHeight, 1);
        };
        Particle.prototype._setSquareCache = function () {
            this.shape.filters = this.filters;
            //this.shape.cache(-this.size, -this.size, this.size * 2, this.size * 2, 1);
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setCircleCache = function () {
            this.shape.filters = this.filters;
            //this.shape.cache(-this.size, -this.size, this.size * 2, this.size * 2, 1);
        };
        Particle.prototype._setTriangleCache = function () {
            this.shape.filters = this.filters;
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setHexagonCache = function () {
            this.shape.filters = this.filters;
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setStarCache = function () {
            this.shape.filters = this.filters;
            this.shape.regX = this.size * 0.5;
            this.shape.regY = this.size * 0.5;
        };
        Particle.prototype._setCircleGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawCircle(0, 0, this.size);
            this.graphics.endFill();
        };
        Particle.prototype._setSquareGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawRect(0, 0, this.size, this.size);
            this.graphics.endFill();
        };
        Particle.prototype._setTriangleGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawPolyStar(0, 0, this.size, 3, 0, 90);
            this.graphics.endFill();
        };
        Particle.prototype._setHexagonGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawPolyStar(0, 0, this.size, 6, 0, 90);
            this.graphics.endFill();
        };
        Particle.prototype._setStarGraphics = function () {
            this.graphics.clear();
            this.graphics.beginFill(this.color.hex);
            this.graphics.drawPolyStar(0, 0, this.size, 5, 0.5, 90);
            this.graphics.endFill();
        };
        // PUBLIC METHODS
        Particle.prototype.Update = function () {
            this.force.x /= this.mass;
            this.force.y /= this.mass;
            this.acceleration = this.acceleration.add(this.force);
            this.velocity = this.velocity.add(this.acceleration);
            this.force.x *= 0.0;
            this.force.y *= 0.0;
            this.acceleration.x *= 0.0;
            this.acceleration.y *= 0.0;
            this.shape.x = this.x;
            this.shape.y = this.y;
        };
        Particle.prototype.Seek = function (target, strength) {
            var targetVector = new glm.vec2();
            targetVector = targetVector.subtract(new glm.vec2(this.x, this.y));
            var length = glm.vec2.magnitude(targetVector);
            if (length > 0.0) {
                targetVector = targetVector.divide(new glm.vec2(length, length));
                targetVector = targetVector.multiply(new glm.vec2(strength, strength));
                return targetVector;
            }
            else {
                return new glm.vec2();
            }
        };
        // move toward/away from target, but only within radius
        Particle.prototype.Attract = function (target, strength, radius, minRange) {
            if (minRange === void 0) { minRange = glm.EPSILON; }
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            var length2 = targetVector.sqrMagnitude();
            var rad2 = radius * radius;
            var result = new glm.vec2();
            if (length2 > (minRange * minRange)) {
                if (length2 < rad2) {
                    length2 = Math.sqrt(length2) * strength;
                    targetVector.x /= length2;
                    targetVector.y /= length2;
                    result = targetVector.subtract(this.velocity);
                }
            }
            else {
                result = new glm.vec2();
            }
            return result;
        };
        //power = scale / distance^2. capped power, min range within which produces a zero output.
        Particle.prototype.Gravitate = function (target, strength, powerCap, minRange) {
            if (minRange === void 0) { minRange = glm.EPSILON; }
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            var length2 = targetVector.sqrMagnitude();
            var result = new glm.vec2();
            if (length2 > (minRange * minRange)) {
                var power = strength / (length2);
                power = Math.min(power, powerCap);
                targetVector.x /= Math.sqrt(length2);
                targetVector.y /= Math.sqrt(length2);
                targetVector.x *= power;
                targetVector.y *= power;
                result = targetVector;
            }
            else {
                result = new glm.vec2();
            }
            return result;
        };
        //steering behaviours that take velocity into account
        //like seek, but takes velocity into account
        Particle.prototype.Steer = function (target, strength, powerCap) {
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            var length = glm.vec2.magnitude(targetVector);
            if (length > 0.0) {
                targetVector.x *= (strength / length);
                targetVector.y *= (strength / length);
                targetVector = targetVector.subtract(this.velocity);
                var result = targetVector;
                length = glm.vec2.magnitude(result);
                if (length > powerCap) {
                    powerCap /= length;
                    result.x *= powerCap;
                    result.y *= powerCap;
                    return result;
                }
            }
            return new glm.vec2();
        };
        //move toward target, slow down at the target
        Particle.prototype.Arrive = function (target, strength, radius, powerCap) {
            var targetVector = target.subtract(new glm.vec2(this.x, this.y));
            //faster than length() < radius
            var length2 = glm.vec2.squaredMagnitude(targetVector);
            var rad2 = radius * radius;
            var result = new glm.vec2();
            if (length2 < rad2) {
                radius *= strength;
                targetVector.x /= radius;
                targetVector.y /= radius;
                result = targetVector.subtract(this.velocity);
            }
            else {
                length2 = Math.sqrt(length2) * strength;
                targetVector.x /= length2;
                targetVector.y /= length2;
                result = targetVector.subtract(this.velocity);
            }
            var length = result.magnitude();
            if (length > powerCap) {
                powerCap /= length;
                result.x *= powerCap;
                result.y *= powerCap;
                return result;
            }
            return result;
        };
        Particle.prototype.setScale = function (size) {
            this.shape.scaleX = size;
            this.shape.scaleY = size;
        };
        Particle.prototype.getPosition = function () {
            return new glm.vec2(this.x, this.y);
        };
        return Particle;
    }(createjs.DisplayObject));
    objects.Particle = Particle;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var ParticleEmitter = /** @class */ (function (_super) {
        __extends(ParticleEmitter, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++
        function ParticleEmitter() {
            var _this = _super.call(this) || this;
            _this._emissionTime = 0;
            _this._timeRemaining = 0;
            _this.emissionShape = config.Emitter.ARC;
            _this.emissionRate = 10.0;
            _this.circleRadius = 10.0;
            _this.arcRadius = 200.0; // how far from emitter origin
            _this.arcAngle = 30.0; // the width of the arc
            _this.arcDirection = 90.0; // initial direction of arc
            // Emitter Playback
            _this.playing = true;
            _this.loop = true;
            _this.loopDelay = 0.0;
            _this.duration = -1.0; //negative duration means infinites
            // Particle Path Following
            _this.followPath = false;
            _this.directFollowMode = false;
            _this.lookAhead = 10.0; // how far ahead particles will seek
            _this.pathRadius = 10.0;
            _this.pathPower = 10.0; //treated like speed in direct mode, like force otherwise
            // Particlee Steering
            _this.seekingBehaviours = false;
            _this.steeringBehaviours = false;
            _this.seekForce = 0.0;
            _this.steerForce = 0.0;
            _this.steerMaxForce = 0.0;
            _this.gravitatePower = 0.0;
            _this.gravitateMaxForce = 0.0;
            _this.attractForce = 0.0;
            _this.attractRange = 0.0;
            _this.arriveForce = 0.0;
            _this.arriveRange = 0.0;
            _this.arriveMaxForce = 0.0;
            _this.globalEffects = false;
            _this.globalForceVector = new glm.vec2();
            _this.globalAccelerationVector = new glm.vec2(0.0, -10.0);
            // Particle default settings
            _this.limitSpeedOverLifetime = false;
            _this.initialSpeedLimitRange = new glm.vec2();
            _this.finalSpeedLimitRange = new glm.vec2();
            _this.sizeOverLifetime = false;
            _this.spinOverLifetime = false;
            _this.colourOverLifetime = false;
            _this.particleType = "circle";
            _this.position = new glm.vec2();
            _this.initialize(1);
            return _this;
        }
        // PRIVATE METHODs
        ParticleEmitter.prototype._emitFromRectangle = function (particle) {
            var pos = new glm.vec2();
            pos.x = glm.RandomRange(this.rectangleSize.x * -0.5, this.rectangleSize.x * 0.5);
            pos.y = glm.RandomRange(this.rectangleSize.y * -0.5, this.rectangleSize.y * 0.5);
            particle.x = pos.x;
            particle.y = pos.y;
            particle.velocity = new glm.vec2(0.0, -2.0); // up direction
        };
        ParticleEmitter.prototype._emitFromCircle = function (particle) {
            particle.x = 0;
            particle.y = 0;
            var randomAngle = glm.RandomRange(0.0, 360) * glm.Deg2Rad;
            var randomSpeed = glm.RandomRange(1.0, 2.0);
            var direction = new glm.vec2();
            direction.x = randomSpeed * Math.cos(randomAngle);
            direction.y = randomSpeed * Math.sin(randomAngle);
            particle.velocity = direction;
        };
        ParticleEmitter.prototype._emitFromArc = function (particle) {
            particle.x = 0;
            particle.y = 0;
            //this.arcTopRight = new glm.vec2(this.arcRadius * Math.cos(this.arcAngle * glm.Deg2Rad),
            //                                -this.arcRadius * Math.sin(this.arcAngle * glm.Deg2Rad));
            //this.arcTopLeft = new glm.vec2(-this.arcRadius * Math.cos(this.arcAngle * glm.Deg2Rad),
            //                                -this.arcRadius * Math.sin(this.arcAngle * glm.Deg2Rad));
            var halfArcAngle = this.arcAngle * 1.0;
            var randomAngle = glm.RandomRange(80, 110);
            var randomSpeed = glm.RandomRange(1.0, 2.0);
            var direction = glm.vec2.direction(glm.vec2.zero(), new glm.vec2());
            // let direction: glm.vec2 = new glm.vec2();
            // direction.x = randomSpeed * Math.cos(randomAngle);
            // direction.y = randomSpeed * Math.sin(randomAngle);
            //console.log(direction.x);
            if (direction.y > 0) {
                direction.y *= -1;
            }
            console.log("direction: " + direction.toString());
            console.log("angle: " + randomAngle);
            particle.velocity = direction;
        };
        ParticleEmitter.prototype.buildEmitter = function (numParticles) {
            if (numParticles > 0) {
                this._particles = new Array();
                this._numberOfParticles = numParticles;
            }
            for (var index = 0; index < this._numberOfParticles; index++) {
                this._particles.push(new objects.Particle(this.particleType));
            }
        };
        // PUBLIC METHODS
        ParticleEmitter.prototype.initialize = function (numParticles) {
            this.freeMemory(); // destroy any existing particles
            this.buildEmitter(numParticles);
            this._timeRemaining = this.duration;
            //transforms
            this.x = this.position.x;
            this.y = this.position.y;
            this.rotation = 0;
            //emitter properties
            this.rotationalVelocity = 0;
            this.emitterOffset = new glm.vec2();
            this.emissionRate = 50.0;
            // shape properties
            this.rectangleSize = new glm.vec2(10.0, 10.0);
            // playback properties
            this.playing = true;
            this.loop = true;
            this.loopDelay = 0.0;
            this.duration = -1;
            // path options
            this.followPath = false;
            this.directFollowMode = false;
            this.lookAhead = 0.1;
            this.pathRadius = 0.1;
            this.pathPower = 200.0;
            // seek options
            this.seekingBehaviours = false;
            this.seekPoint = new glm.vec2();
            this.seekForce = 0.0;
            // steer options
            this.steeringBehaviours = false;
            this.steerPoint = new glm.vec2();
            this.steerForce = 0.0;
            this.steerMaxForce = 1.0;
            // gravitate options
            this.gravitatePoint = new glm.vec2();
            this.gravitatePower = 0.0;
            this.gravitateMaxForce = 1.0;
            // attract options
            this.attractPoint = new glm.vec2();
            this.attractForce = 0.0;
            this.attractRange = 10.0;
            // arrive options
            this.arrivePoint = new glm.vec2();
            this.arriveForce = 0.0;
            this.arriveRange = 10.0;
            this.arriveMaxForce = 1.0;
            // gravity and global effects
            this.globalEffects = false;
            this.globalForceVector = new glm.vec2(0.0, -1.0);
            this.globalAccelerationVector = new glm.vec2(0.0, 10.0);
            // Speed Options
            this.limitSpeedOverLifetime = true;
            this.initialSpeedRange = new glm.vec2(20.0, 30.0);
            this.initialSpeedLimitRange = new glm.vec2(40.0, 50.0);
            this.finalSpeedLimitRange = new glm.vec2(40.0, 50.0);
            this.lifeRange = new glm.vec2(4.0, 7.0);
            // Size Options
            this.sizeOverLifetime = true;
            this.sizeRangeBegin = new glm.vec2(20.0, 30.0);
            this.sizeRangeEnd = new glm.vec2(0.5, 1.0);
            this.massRange = new glm.vec2(0.5, 1.0);
            // Rotation Options
            this.spinOverLifetime = true;
            this.spinBegin = -1.0;
            this.spinEnd = 1.0;
            // Colour Options
            this.colourOverLifetime = true;
            this.colourBegin0 = objects.Color.Red();
            this.colourBegin1 = objects.Color.DarkOrange();
            this.colourEnd0 = objects.Color.Black();
            this.colourEnd1 = objects.Color.DarkGrey();
        };
        ParticleEmitter.prototype.killParticles = function () {
            this._particles.forEach(function (particle) {
                particle.life = -1;
            });
        };
        ParticleEmitter.prototype.freeMemory = function () {
            if (this._particles) {
                this.removeAllChildren();
                delete this._particles;
                this._particles = null;
                this._numberOfParticles = 0;
            }
        };
        ParticleEmitter.prototype.Update = function () {
            var _this = this;
            var dt = 0.1667;
            this.rotation += this.rotationalVelocity;
            if (this._particles && this.playing) {
                this._emissionTime += dt;
                this._timeRemaining -= dt;
                if (this._timeRemaining < 0.0) {
                    if (this.duration > 0.0) {
                        this._emissionTime = 0.0; //will prevent particles from spawning
                        if (this.loop) {
                            if (this._timeRemaining < -this.loopDelay) {
                                this.killParticles();
                                this.removeAllChildren();
                                this._timeRemaining = this.duration;
                            }
                        }
                    }
                }
                var NumParticlesToEmit_1 = this._emissionTime * this.emissionRate;
                // loop through each particle
                this._particles.forEach(function (particle) {
                    if ((particle.life <= 0.0) && (NumParticlesToEmit_1 > 0)) {
                        _this.spawnParticle(particle);
                        NumParticlesToEmit_1--;
                        _this._emissionTime -= (1.0 / _this.emissionRate);
                        _this.UpdateParticle(particle, dt);
                    }
                    else {
                        if (particle) {
                            _this.UpdateParticle(particle, dt);
                        }
                    }
                });
            }
        };
        ParticleEmitter.prototype.UpdateParticle = function (particle, dt) {
            // Update physics
            if (this.seekingBehaviours) {
                particle.force = particle.force.add(particle.Seek(this.seekPoint, this.seekForce));
                particle.force = particle.force.add(particle.Gravitate(this.gravitatePoint, this.gravitatePower, this.gravitateMaxForce));
                particle.force = particle.force.add(particle.Attract(this.attractPoint, this.attractForce, this.attractRange));
            }
            if (this.steeringBehaviours) {
                particle.force = particle.force.add(particle.Steer(this.steerPoint, this.steerForce, this.steerMaxForce));
                particle.force = particle.force.add(particle.Arrive(this.arrivePoint, this.arriveForce, this.arriveRange, this.arriveMaxForce));
            }
            if (this.globalEffects) {
                particle.force = particle.force.add(this.globalForceVector);
                particle.acceleration = particle.acceleration.add(this.globalAccelerationVector);
            }
            if (this.followPath) {
                if (this.directFollowMode) {
                    //this.applyDirectPathFollow(dt, particle);
                }
                else {
                    //this.applyPathSteering(dt, particle);
                }
            }
            if (!particle.lifespan) {
                particle.lifespan = 1.0;
            }
            var normalizedLife = glm.clamp(1.0 - (particle.life / particle.lifespan), 0.0, 1.0);
            if (this.sizeOverLifetime) {
                var size = glm.lerp(particle.sizeBegin, particle.sizeEnd, normalizedLife);
                particle.size = size;
            }
            if (this.colourOverLifetime) {
                if (!particle.colourBegin) {
                    particle.colourBegin = this.colourBegin0;
                    particle.colourEnd = this.colourEnd0;
                }
                var color = glm.lerpColor(particle.colourBegin, particle.colourEnd, normalizedLife);
                particle.color = color;
            }
            if (this.limitSpeedOverLifetime) {
                var speed = glm.lerp(particle.speedLimitBegin, particle.speedLimitEnd, normalizedLife);
                particle.velocity = glm.limitMagnitude(particle.velocity, speed);
            }
            if (this.spinOverLifetime) {
                var rotation = glm.lerp(this.spinBegin, this.spinEnd, normalizedLife);
                particle.shape.rotation += rotation;
            }
            else {
                particle.shape.rotation += glm.RandomRange(this.spinBegin, this.spinEnd);
            }
            // move particle
            particle.x += particle.velocity.x * dt;
            particle.y += particle.velocity.y * dt;
            particle.life -= dt;
            if (this.emissionShape == config.Emitter.CIRCLE) {
                if (glm.vec2.distance(glm.vec2.zero(), new glm.vec2(particle.x, particle.y)) >= this.circleRadius) {
                    particle.life = 0.0;
                }
            }
            if (this.emissionShape == config.Emitter.ARC) {
                if (glm.vec2.distance(glm.vec2.zero(), new glm.vec2(particle.x, particle.y)) >= this.arcRadius) {
                    particle.life = 0.0;
                }
            }
            // Update position
            particle.Update();
        };
        ParticleEmitter.prototype.spawnParticle = function (particle) {
            particle.colourBegin = glm.lerpColor(this.colourBegin0, this.colourBegin1, Math.random());
            particle.colourEnd = glm.lerpColor(this.colourEnd0, this.colourEnd1, Math.random());
            particle.lifespan = glm.lerp(this.lifeRange.x, this.lifeRange.y, Math.random());
            particle.life = particle.lifespan;
            var randomTval_A = Math.random();
            //couple mass and size relationship
            particle.mass = glm.lerp(this.massRange.x, this.massRange.y, randomTval_A);
            particle.sizeBegin = glm.lerp(this.sizeRangeBegin.x, this.sizeRangeBegin.y, randomTval_A);
            particle.sizeEnd = glm.lerp(this.sizeRangeEnd.x, this.sizeRangeEnd.y, randomTval_A);
            //emission shapes determine initial velocity and position distribution
            switch (this.emissionShape) {
                case config.Emitter.RECTANGLE:
                    {
                        this._emitFromRectangle(particle);
                        break;
                    }
                case config.Emitter.CIRCLE:
                    {
                        this._emitFromCircle(particle);
                        break;
                    }
                case config.Emitter.ARC:
                    {
                        this._emitFromArc(particle);
                        break;
                    }
                default:
                    this._emitFromCircle(particle);
                    break;
            }
            //emit functions will set a position and a normalized velocity
            var startspeed = glm.RandomRange(this.initialSpeedRange.x, this.initialSpeedRange.y);
            particle.velocity.x *= startspeed;
            particle.velocity.y *= startspeed;
            // particle.transform.move(this.emitterOffset);
            particle.speedLimitBegin = glm.RandomRange(this.initialSpeedLimitRange.x, this.initialSpeedLimitRange.y);
            particle.speedLimitEnd = glm.RandomRange(this.finalSpeedLimitRange.x, this.finalSpeedLimitRange.y);
            particle.distanceTravelledAlongPath = 0.0;
            particle.size = particle.sizeBegin;
            particle.color = glm.lerpColor(particle.colourBegin, particle.colourEnd, 0.5);
            this.addChildAt(particle.shape, 0);
        };
        ParticleEmitter.prototype.getNumberOfParticles = function () {
            return this._numberOfParticles;
        };
        ParticleEmitter.prototype.getParticle = function (index) {
            if (index >= this._numberOfParticles) {
                console.log("ParticleEmitter::getParticlePosition ERROR: idx " + index + " out of range!");
                return null;
            }
            return this._particles[index];
        };
        ParticleEmitter.prototype.getParticlePosition = function (index) {
            if (index >= this._numberOfParticles) {
                console.log("ParticleEmitter::getParticlePosition ERROR: idx " + index + " out of range!");
                return null;
            }
            return this._particles[index].getPosition();
        };
        ParticleEmitter.prototype.setNumberOfParticles = function (numParticles) {
            this.freeMemory();
            this.buildEmitter(numParticles);
        };
        ParticleEmitter.prototype.setLifeRange = function (min, max) {
            this.lifeRange = new glm.vec2(min, max);
        };
        ParticleEmitter.prototype.setSizeRangeBegin = function (min, max) {
            this.sizeRangeBegin = new glm.vec2(min, max);
        };
        ParticleEmitter.prototype.setSizeRangeEnd = function (min, max) {
            this.sizeRangeEnd = new glm.vec2(min, max);
        };
        ParticleEmitter.prototype.setParticleType = function (type) {
            this.particleType = type;
            var numParticles = this._numberOfParticles;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
        };
        ParticleEmitter.prototype.setCircleRadius = function (radius) {
            var numParticles = this._numberOfParticles;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.circleRadius = radius;
        };
        ParticleEmitter.prototype.setPosition = function (position) {
            this.position = position;
            this.x = position.x;
            this.y = position.y;
        };
        ParticleEmitter.prototype.setEmitterShape = function (type) {
            var numParticles = this._numberOfParticles;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.emissionShape = type;
        };
        ParticleEmitter.prototype.setRectangleWidth = function (width) {
            var numParticles = this._numberOfParticles;
            var height = this.rectangleSize.y;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.rectangleSize.x = width;
            this.rectangleSize.y = height;
        };
        ParticleEmitter.prototype.setRectangleHeight = function (height) {
            var numParticles = this._numberOfParticles;
            var width = this.rectangleSize.x;
            this.initialize(numParticles);
            this._numberOfParticles = numParticles;
            this.rectangleSize.x = width;
            this.rectangleSize.y = height;
        };
        return ParticleEmitter;
    }(createjs.Container));
    objects.ParticleEmitter = ParticleEmitter;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Powerup = /** @class */ (function (_super) {
        __extends(Powerup, _super);
        function Powerup(powerupType, px, py) {
            var _this = this;
            var imageString;
            switch (powerupType) {
                case config.Powerup.SUPERSPEED:
                    imageString = "lightning";
                    break;
                case config.Powerup.SUPERARMOUR:
                    imageString = "shieldPowerup";
                    break;
                case config.Powerup.WARSHIP:
                    break;
            }
            _this = _super.call(this, imageString, px, py) || this;
            _this.powerupType = powerupType;
            _this.scene = managers.Game.currentSceneObject;
            _this.scene.addPowerup(_this);
            _this.start();
            return _this;
        }
        Powerup.getRandomType = function () {
            /* ======== Powerup chances ========
                        Super speed chance = 50%
                       Super armour chance = 50%
            */
            var randomType;
            var random = Math.random();
            if (random < 0.5) {
                randomType = config.Powerup.SUPERSPEED;
            }
            else {
                randomType = config.Powerup.SUPERARMOUR;
            }
            return randomType;
        };
        Powerup.prototype.activateSuperSpeed = function () {
            if (!this.scene.player.powerups.speed) {
                this.scene.player.mvspd *= 1.5;
            }
            createjs.Sound.play("superspeed");
            this.scene.player.powerups.speed = this;
        };
        Powerup.prototype.activateSuperArmour = function () {
            if (!this.scene.player.powerups.armour) {
                this.scene.addShield(new objects.Shield(this.scene.player));
            }
            createjs.Sound.play("superarmour");
            this.scene.player.powerups.armour = this;
        };
        Powerup.prototype.activateWarship = function () {
        };
        Powerup.prototype.start = function () {
            switch (this.powerupType) {
                case config.Powerup.SUPERSPEED:
                    this.activationFunction = this.activateSuperSpeed;
                    this.duration = 10;
                    break;
                case config.Powerup.SUPERARMOUR:
                    this.activationFunction = this.activateSuperArmour;
                    this.duration = -1;
                    break;
                case config.Powerup.WARSHIP:
                    this.activationFunction = this.activateWarship;
                    this.duration = -1;
                    break;
            }
        };
        Powerup.prototype.collide = function (other) {
            if (other instanceof animate.Player) {
                this.activate();
                this.destroy();
            }
        };
        Powerup.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        Powerup.prototype.activate = function () {
            // Activate powerup
            this.activationTime = new Date().getMilliseconds();
            this.activationFunction();
        };
        Powerup.prototype.timeLeft = function () {
            // In seconds
            return this.duration - (Date.now() - this.activationTime) * 0.001;
        };
        return Powerup;
    }(objects.GameObject));
    objects.Powerup = Powerup;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var PowerupDummy = /** @class */ (function (_super) {
        __extends(PowerupDummy, _super);
        function PowerupDummy(powerupType, px, py) {
            var _this = _super.call(this, powerupType, px, py) || this;
            _this.visible = false;
            return _this;
        }
        PowerupDummy.prototype.collide = function (other) {
            if (this.isVisible())
                _super.prototype.collide.call(this, other);
        };
        return PowerupDummy;
    }(objects.Powerup));
    objects.PowerupDummy = PowerupDummy;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(imageName, shooter, qx, qy, mvspd) {
            if (mvspd === void 0) { mvspd = 2; }
            var _this = _super.call(this, imageName, shooter.x, shooter.y, qx, qy) || this;
            _this._shooter = shooter;
            _this.mvspd = mvspd;
            _this._dmg = _this._shooter.weapon.dmg;
            // Move projectile in front of shooter
            _this._spawnPosition();
            switch (shooter.weapon.weaponType) {
                case config.Weapon.BLASTER:
                    createjs.Sound.play("blaster").volume = 0.2;
                    _this.rotation = -(glm.vec2.angleOfAttack(_this.origin, _this.destination) + 90);
                    break;
                case config.Weapon.SHOTGUN:
                    _this.rotation = -(glm.vec2.angleOfAttack(_this.origin, _this.destination) - 90);
                default:
                    createjs.Sound.play("shot");
                    break;
            }
            return _this;
        }
        Object.defineProperty(Projectile.prototype, "shooter", {
            get: function () {
                return this._shooter;
            },
            enumerable: true,
            configurable: true
        });
        Projectile.prototype.update = function () {
            this.move();
            this._checkBounds();
        };
        Projectile.prototype.move = function (movementAmount) {
            if (movementAmount === void 0) { movementAmount = null; }
            _super.prototype.move.call(this, movementAmount);
            if (!movementAmount)
                movementAmount = this.movementAmount;
            this._amountTravelled += movementAmount;
            if (this._shooter.weapon.weaponType == config.Weapon.SHOTGUN && this._amountTravelled >= 180)
                this.destroy();
        };
        Projectile.prototype._checkBounds = function () {
            if (this.y >= managers.Game.currentSceneObject.bottomBoundary + this.halfHeight ||
                this.y <= managers.Game.currentSceneObject.topBoundary - this.halfHeight ||
                this.x >= managers.Game.currentSceneObject.rightBoundary + this.halfWidth ||
                this.x <= managers.Game.currentSceneObject.leftBoundary - this.halfWidth) {
                this.destroy();
            }
        };
        Projectile.prototype._spawnPosition = function () {
            var run = Math.abs(glm.vec2.run(this._origin, this._destination));
            var rise = Math.abs(glm.vec2.rise(this._origin, this._destination));
            var mvAmt;
            var margin = 10;
            if (run < rise) {
                // Path is more vertical than horizontal - use shooter's height to spawn bullet
                mvAmt = this._shooter.halfHeight + margin;
            }
            else {
                mvAmt = this._shooter.halfWidth + margin;
            }
            this._amountTravelled = -mvAmt;
            this.move(mvAmt);
            managers.Game.currentSceneObject.addProjectile(this);
        };
        Projectile.prototype.collide = function (other) {
            if (other == this._shooter || !other.isVisible() || (other instanceof objects.Shield && other.anchor == this._shooter)) {
                return;
            }
            if (((other instanceof animate.Enemy) && (this._shooter instanceof animate.Player)) ||
                (other instanceof animate.Player && this.name == "laser") ||
                ((other instanceof objects.Destructible) && (this._shooter instanceof animate.Player))) {
                other.hp -= this._dmg;
            }
            if (this._shooter.weapon.weaponType == config.Weapon.SHOTGUN && other.name == "laser") {
                return;
            }
            this.destroy();
        };
        Projectile.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            var explosion = new objects.explosion(this.x - this.halfWidth, this.y - this.halfHeight, "smallexplosion");
            managers.Game.currentSceneObject.addChildAt(explosion, managers.Game.INDEX_GAMEOBJECTS);
        };
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            var _this = _super.call(this) || this;
            _this.assetManager = managers.Game.assetManager;
            return _this;
        }
        Object.defineProperty(Scene.prototype, "topBoundary", {
            get: function () {
                return this.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "bottomBoundary", {
            get: function () {
                return this.y + managers.Game.HEIGHT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "leftBoundary", {
            get: function () {
                return this.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "rightBoundary", {
            get: function () {
                return this.x + managers.Game.WIDTH;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "player", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "enemies", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "projectiles", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "tooltips", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.start = function () { };
        Scene.prototype.update = function () {
            return 0;
        };
        Scene.prototype.main = function () { };
        Scene.prototype.addProjectile = function (projectile) { };
        Scene.prototype.addPowerup = function (powerup) { };
        Scene.prototype.addShield = function (shield) { };
        Scene.prototype.removeObject = function (o, silent) {
            if (silent === void 0) { silent = false; }
            if (!o.isDestroyed)
                o.destroy(silent);
            this.removeChild(o);
            o = null;
        };
        Scene.prototype.destroyAll = function () { };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Shield = /** @class */ (function (_super) {
        __extends(Shield, _super);
        function Shield(anchor) {
            var _this = _super.call(this, "shield", anchor.x, anchor.y) || this;
            _this._anchor = anchor;
            _this._anchor.hp += 1;
            return _this;
        }
        Object.defineProperty(Shield.prototype, "anchor", {
            get: function () {
                return this._anchor;
            },
            enumerable: true,
            configurable: true
        });
        Shield.prototype.update = function () {
            this.x = this._anchor.x;
            if (this._anchor.weapon.weaponType == config.Weapon.SHOTGUN)
                this.x += 5;
            this.y = this._anchor.y;
        };
        Shield.prototype.collide = function (other) {
            if (other instanceof objects.Projectile && other.shooter != this._anchor) {
                this.destroy();
            }
        };
        Shield.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this._anchor.hp -= 1;
        };
        return Shield;
    }(objects.GameObject));
    objects.Shield = Shield;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Weapon = /** @class */ (function () {
        function Weapon(weaponType) {
            this.weaponType = weaponType;
            var fireRate = 1; // Seconds to wait before firing again
            var dmg = 1;
            switch (weaponType) {
                // Set fire rate and projectile based on weapon type:
                case config.Weapon.REVOLVER:
                    fireRate = 0.4;
                    break;
                case config.Weapon.SHOTGUN:
                    fireRate = 1.2;
                    dmg = 3;
                    break;
                case config.Weapon.BLASTER:
                    fireRate = 0.7;
                    break;
            }
            this.fireRate = fireRate;
            this._dmg = dmg;
        }
        Object.defineProperty(Weapon.prototype, "dmg", {
            get: function () {
                return this._dmg;
            },
            enumerable: true,
            configurable: true
        });
        return Weapon;
    }());
    objects.Weapon = Weapon;
})(objects || (objects = {}));
var animate;
(function (animate) {
    var Animate = /** @class */ (function (_super) {
        __extends(Animate, _super);
        function Animate(imageName, hp, mvspd, px, py, qx, qy) {
            if (mvspd === void 0) { mvspd = 1; }
            if (qx === void 0) { qx = 0; }
            if (qy === void 0) { qy = 0; }
            var _this = _super.call(this, imageName, px, py, qx, qy) || this;
            _this.hp = hp;
            _this.mvspd = mvspd;
            _this.lastValidPosition = new glm.vec2(px, py);
            return _this;
        }
        Object.defineProperty(Animate.prototype, "movementAmount", {
            get: function () {
                return managers.Game.BASE_MVSPD * this.mvspd;
            },
            enumerable: true,
            configurable: true
        });
        Animate.prototype.attack = function () { };
        Animate.prototype.collide = function (other) {
            if (other instanceof objects.GameObject) {
                this.x = this.lastValidPosition.x;
                this.y = this.lastValidPosition.y;
            }
            else {
                this.lastValidPosition.x = this.x;
                this.lastValidPosition.y = this.y;
            }
        };
        return Animate;
    }(objects.GameObject));
    animate.Animate = Animate;
})(animate || (animate = {}));
var animate;
(function (animate) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // public properties
        // Constructor
        //here we can add heath point as 1 and speed as 0 for not moving in level1 and level2
        // but for for level3 and level4, we have to mention speed
        function Enemy(enemyType, px, py, qx, qy) {
            if (qx === void 0) { qx = 0; }
            if (qy === void 0) { qy = 0; }
            var _this = this;
            var enemyImg = "enemyGuard";
            var hp = 1;
            var mvspd = 0;
            switch (enemyType) {
                case config.Enemy.GUARD:
                    enemyImg = "enemyGuard";
                    break;
                case config.Enemy.WATCHER:
                    enemyImg = "enemyWatcher";
                    break;
                case config.Enemy.PATROLLER:
                    enemyImg = "enemyPatroller";
                    mvspd = 1;
                    break;
            }
            _this = _super.call(this, enemyImg, hp, mvspd, px, py, qx, qy) || this;
            _this._enemyType = enemyType;
            _this.hp = hp;
            _this.mvspd = mvspd;
            _this._weapon = new objects.Weapon(config.Weapon.BLASTER);
            _this.start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Enemy.prototype.start = function () {
            var _this = this;
            this.attackInterval = setInterval(function () { _this.attack(); }, this._weapon.fireRate * 1000);
        };
        Enemy.prototype.stop = function () {
            clearInterval(this.attackInterval);
            this.attackInterval = null;
        };
        // updates the game object every frame
        Enemy.prototype.update = function () {
            if (!this.attackInterval && !this.isDestroyed) {
                this.start();
            }
            this.move();
            this.checkBounds();
        };
        Enemy.prototype.move = function (movementAmount) {
            if (movementAmount === void 0) { movementAmount = null; }
            var newPosition = this.getNextPosition(movementAmount);
            this.x = newPosition.x;
            this.y = newPosition.y;
            var run = glm.vec2.run(this._origin, this._destination);
            var rise = glm.vec2.rise(this._origin, this._destination);
            var hasReachedX = false;
            var hasReachedY = false;
            if ((run <= 0 && this.x <= this._destination.x) ||
                (run > 0 && this.x > this._destination.x)) {
                hasReachedX = true;
            }
            if ((rise <= 0 && this.y <= this._destination.y) ||
                (rise > 0 && this.y > this._destination.y)) {
                hasReachedY = true;
            }
            // Go back and forth between the origin and destination
            if (hasReachedX && hasReachedY) {
                this.goBack();
            }
        };
        Enemy.prototype.destroy = function (silent) {
            if (silent === void 0) { silent = false; }
            this.stop();
            _super.prototype.destroy.call(this, silent);
            if (!silent)
                createjs.Sound.play("monster_die");
        };
        Enemy.prototype.attack = function () {
            var targetX;
            var targetY;
            switch (this._enemyType) {
                case config.Enemy.GUARD:
                    // Shoot down
                    targetX = this.x;
                    targetY = this.y + 1;
                    break;
                default:
                    targetX = managers.Game.currentSceneObject.player.x;
                    targetY = managers.Game.currentSceneObject.player.y;
                    break;
            }
            var newProjectile = new objects.Projectile("laser", this, targetX, targetY);
        };
        Enemy.prototype.collide = function (other) {
            if (other.name == "bullet" || other.name == "bullet2") {
                managers.Game.scoreBoard.Score += 200;
                managers.Game.currentScore = managers.Game.scoreBoard.Score;
                return;
            }
            else if (other instanceof animate.Player) {
                other.hp -= 1;
            }
            this.lastValidPosition.x = this.x;
            this.lastValidPosition.y = this.y;
            this.goBack();
        };
        Enemy.prototype.goBack = function () {
            this._destination = this._origin;
            this._origin = new glm.vec2(this.x, this.y);
        };
        return Enemy;
    }(animate.Animate));
    animate.Enemy = Enemy;
})(animate || (animate = {}));
var animate;
(function (animate) {
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        function Boss() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Boss;
    }(animate.Enemy));
    animate.Boss = Boss;
})(animate || (animate = {}));
var animate;
(function (animate) {
    var EnemyDummy = /** @class */ (function (_super) {
        __extends(EnemyDummy, _super);
        function EnemyDummy(enemyType, px, py, qx, qy) {
            if (qx === void 0) { qx = 0; }
            if (qy === void 0) { qy = 0; }
            var _this = _super.call(this, enemyType, px, py, qx, qy) || this;
            _this.stop();
            _this.visible = false;
            return _this;
        }
        EnemyDummy.prototype.update = function () {
            if (!this.isVisible())
                this.stop();
            this.move();
            this.checkBounds();
        };
        EnemyDummy.prototype.collide = function (other) {
            return;
        };
        return EnemyDummy;
    }(animate.Enemy));
    animate.EnemyDummy = EnemyDummy;
})(animate || (animate = {}));
var animate;
(function (animate) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(character, px, py) {
            var _this = this;
            var imageName = "cowboy1";
            var hp = 1;
            var mvspd;
            var weapon;
            switch (character) {
                case config.Character.GUNSLINGER:
                    mvspd = 0.8;
                    weapon = config.Weapon.REVOLVER;
                    break;
                case config.Character.QUICKSILVER:
                    mvspd = 1.5;
                    weapon = config.Weapon.SHOTGUN;
                    imageName = "cowboy2";
                    break;
            }
            _this = _super.call(this, imageName, hp, mvspd, px, py) || this;
            _this._canFire = true;
            _this._weapon = new objects.Weapon(weapon);
            _this.powerups = {
                "speed": null,
                "armour": null
            };
            return _this;
        }
        Player.prototype.checkBounds = function () {
            _super.prototype.checkBounds.call(this);
            // Checking vertical boundaries
            var bottom = managers.Game.currentSceneObject.bottomBoundary - this.halfHeight;
            var top = managers.Game.currentSceneObject.topBoundary + this.halfHeight;
            if (this.y > bottom) {
                this.y = bottom;
            }
            else if (this.y < top) {
                this.y = top;
            }
            // Checking horizontal boundaries
            if (this.x >= managers.Game.RIGHT_BOUNDARY - this.halfWidth) {
                this.x = managers.Game.RIGHT_BOUNDARY - this.halfWidth;
            }
            else if (this.x <= managers.Game.LEFT_BOUNDARY + this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        Player.prototype.move = function () {
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= this.movementAmount;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += this.movementAmount;
            }
        };
        Player.prototype.update = function () {
            this.move();
            this.checkBounds();
        };
        Player.prototype.collide = function (other) {
            _super.prototype.collide.call(this, other);
            if (other instanceof animate.Enemy) {
                this.hp -= 1;
            }
            if (this.hp <= 0) {
                this.destroy();
            }
        };
        Player.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            createjs.Sound.play("player_die");
            managers.Game.currentSceneObject.destroyAll();
            managers.Game.currentScene = config.Scene.GAMEOVER;
        };
        Player.prototype.attack = function () {
            var _this = this;
            if (this._canFire) {
                var targetX = managers.Game.currentSceneObject.stage.mouseX - managers.Game.currentSceneObject.x;
                var targetY = managers.Game.currentSceneObject.stage.mouseY - managers.Game.currentSceneObject.y;
                var projectileType = "bullet";
                if (this.weapon.weaponType == config.Weapon.SHOTGUN) {
                    projectileType = "bullet2";
                }
                var newProjectile = new objects.Projectile(projectileType, this, targetX, targetY);
                this._canFire = false;
                setTimeout(function () { _this._canFire = true; }, this._weapon.fireRate * 1000);
            }
        };
        return Player;
    }(animate.Animate));
    animate.Player = Player;
})(animate || (animate = {}));
var animate;
(function (animate) {
    var PlayerDummy = /** @class */ (function (_super) {
        __extends(PlayerDummy, _super);
        function PlayerDummy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerDummy.prototype.destroy = function () {
            var _this = this;
            createjs.Sound.play("player_die");
            createjs.Tween.get(this).to({ alpha: 0.6 }, 200).on("complete", function () { _this.alpha = 1; });
        };
        PlayerDummy.prototype.attackManual = function (targetX, targetY) {
            var _this = this;
            if (this._canFire) {
                var projectileType = "bullet";
                if (this.weapon.weaponType == config.Weapon.SHOTGUN) {
                    projectileType = "bullet2";
                }
                var newProjectile = new objects.Projectile(projectileType, this, targetX, targetY);
                this._canFire = false;
                setTimeout(function () { _this._canFire = true; }, this._weapon.fireRate * 1000);
            }
        };
        return PlayerDummy;
    }(animate.Player));
    animate.PlayerDummy = PlayerDummy;
})(animate || (animate = {}));
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            if (object1 == null || object2 == null || object1 == object2 || !object1.isVisible() || !object2.isVisible())
                return;
            var pointA = new glm.vec2(object1.x, object1.y);
            var pointB = new glm.vec2(object2.x, object2.y);
            // Check for collision
            if (glm.vec2.distance(pointA, pointB) < (object1.halfHeight + object2.halfHeight)) {
                object1.collide(object2);
                object2.collide(object1);
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Object.defineProperty(Game, "backgroundMusic", {
            // Setters
            get: function () {
                return managers.Game._currentMusicString;
            },
            set: function (music) {
                if (managers.Game._currentMusic)
                    managers.Game._currentMusic.stop();
                managers.Game._currentMusicString = music;
                managers.Game._currentMusic = createjs.Sound.play(music);
                managers.Game._currentMusic.loop = -1;
                managers.Game._currentMusic.volume = 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Game.stopMusic = function () {
            managers.Game._currentMusic.stop();
        };
        Game.isPlaying = false;
        Game.previousScore = 0;
        Game.currentScore = 0;
        Game.WIDTH = 640;
        Game.HEIGHT = 480;
        Game.FPS = 60;
        // Points that the player has to reach to start moving around the map
        Game.TOP_ANCHOR = 150; // move up
        Game.BOTTOM_ANCHOR = Game.HEIGHT - 20; // move down
        Game.LEFT_ANCHOR = 10; // move left
        Game.RIGHT_ANCHOR = Game.WIDTH - 10; // move right
        // Game boundaries
        Game.TOP_BOUNDARY = 0;
        Game.BOTTOM_BOUNDARY = Game.HEIGHT;
        Game.LEFT_BOUNDARY = 0;
        Game.RIGHT_BOUNDARY = Game.WIDTH;
        // Measured in pixels
        Game.BASE_MVSPD = 3;
        // Layer indices
        Game.INDEX_BACKGROUND = 0;
        Game.INDEX_GAMEOBJECTS = 1;
        Game.INDEX_UI = 2;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructors
        function Keyboard() {
            this.paused = false;
            this.enabled = false;
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Private methods
        Keyboard.prototype.togglePause = function () {
            if (this.paused) {
                this.paused = false;
            }
            else {
                this.paused = true;
            }
        };
        // Public methods
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.key) {
                case config.Key.W:
                case config.Key.ARROW_UP:
                    this.moveForward = true;
                    break;
                case config.Key.S:
                case config.Key.ARROW_DOWN:
                    this.moveBackward = true;
                    break;
                case config.Key.A:
                case config.Key.ARROW_LEFT:
                    this.moveLeft = true;
                    break;
                case config.Key.D:
                case config.Key.ARROW_RIGHT:
                    this.moveRight = true;
                    break;
                case config.Key.SPACE:
                    this.nextTooltip = true;
                    break;
                case config.Key.C:
                    this.closeTooltip = true;
                    break;
                case config.Key.ESCAPE:
                    if (managers.Game.isPlaying) {
                        this.togglePause();
                    }
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.key) {
                case config.Key.W:
                case config.Key.ARROW_UP:
                    this.moveForward = false;
                    break;
                case config.Key.S:
                case config.Key.ARROW_DOWN:
                    this.moveBackward = false;
                    break;
                case config.Key.A:
                case config.Key.ARROW_LEFT:
                    this.moveLeft = false;
                    break;
                case config.Key.D:
                case config.Key.ARROW_RIGHT:
                    this.moveRight = false;
                    break;
                case config.Key.SPACE:
                    this.nextTooltip = false;
                    break;
                case config.Key.C:
                    this.closeTooltip = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function (_super) {
        __extends(ScoreBoard, _super);
        // constructors
        function ScoreBoard() {
            var _this = _super.call(this) || this;
            // private instance variables
            _this._lives = 1;
            _this._score = 0;
            _this._enemies = 0;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            // public properties
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.LivesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "EnemyCount", {
            get: function () {
                return this._enemies;
            },
            set: function (enemyCount) {
                this._enemies = enemyCount;
                this.EnemiesLabel.text = "Enemies left: " + this._enemies;
            },
            enumerable: true,
            configurable: true
        });
        ScoreBoard.prototype.main = function () {
            //this.addChild(this.LivesLabel);
            this.addChild(this.ScoreLabel);
            this.addChild(this.EnemiesLabel);
        };
        ScoreBoard.prototype.updateEnemies = function () {
            this._enemies = managers.Game.currentSceneObject.enemies.length;
            this.EnemiesLabel.text = "Enemies left: " + this._enemies;
        };
        ScoreBoard.prototype._initialize = function () {
            var shadowColour = "rgba(80,50,20,0.7)";
            this.LivesLabel = new ui.Label("Lives: 0", "14pt", "Sporting Grotesque", "#FFFF00", 20, 10, false);
            this.LivesLabel.shadow = new createjs.Shadow(shadowColour, 1, 2, 0);
            this.ScoreLabel = new ui.Label("Score: 0", "14pt", "Sporting Grotesque", "#FFFF00", 500, 10, false);
            this.ScoreLabel.shadow = new createjs.Shadow(shadowColour, 1, 2, 0);
            this.EnemiesLabel = new ui.Label("Enemies left: 0", "14pt", "Sporting Grotesque", "#FFFF00", 20, 10);
            this.EnemiesLabel.shadow = new createjs.Shadow(shadowColour, 1, 2, 0);
            this.Lives = 1;
            this.Score = 0;
            this.EnemyCount = 0;
            this.main();
        };
        return ScoreBoard;
    }(createjs.Container));
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
var managers;
(function (managers) {
    var Style = /** @class */ (function () {
        function Style() {
        }
        Style.FONT_FAMILY_PRIMARY = "Sporting Grotesque";
        Style.FONT_COLOUR_PRIMARY = config.Color.YELLOW;
        Style.FONT_COLOUR_SECONDARY = config.Color.IVORY;
        Style.FONT_COLOUR_SUBTITLE = "rgb(210,210,210)";
        Style.SHADOW_COLOUR_PRIMARY = "rgba(0,0,0,0.5)";
        Style.SHADOW_COLOUR_WARM = "rgba(80,30,0,0.6)";
        Style.SHADOW_COLOUR_COOL = "rgba(0,30,80,0.6)";
        Style.OVERLAY_COLOUR_HOVER = "rgba(170,170,170,0.5)";
        return Style;
    }());
    managers.Style = Style;
})(managers || (managers = {}));
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        StartScene.prototype.start = function () {
            this._background = new ui.Background("background");
            this._startButton2 = new ui.Button("startButton2", 300, 240);
            this._startButton = new ui.Button("startButton", 300, 240, 0.1);
            this._finalScoreLabel = new ui.Label("Score: 0", "14pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 150, 250, false);
            this._finalScoreLabel.visible = false;
            this._creditsButton = new ui.Button("creditsButton", 10, 10, 0.7);
            this._creditsButton.x = managers.Game.WIDTH - this._creditsButton.width - 20;
            this._creditsButton.y = managers.Game.HEIGHT - this._creditsButton.height - 20;
            this.main();
        };
        StartScene.prototype.update = function () {
            return managers.Game.currentScene;
        };
        StartScene.prototype.main = function () {
            var _this = this;
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._startButton2, managers.Game.INDEX_GAMEOBJECTS);
            this.addChildAt(this._startButton, managers.Game.INDEX_UI);
            if (this._creditsButton) {
                this.addChildAt(this._creditsButton, managers.Game.INDEX_GAMEOBJECTS);
                this._creditsButton.on("click", function () { managers.Game.currentScene = config.Scene.CREDITS; });
                this._creditsButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
            }
            this.addChildAt(this._finalScoreLabel, managers.Game.INDEX_UI);
            if (managers.Game.backgroundMusic != "menu")
                managers.Game.backgroundMusic = "menu";
            this._startButton.on("click", function () { _this._startButtonClick(); });
            this._startButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
        };
        StartScene.prototype._startButtonClick = function () {
            var _this = this;
            this._startButton.visible = false;
            this._startButton.on("mouseover", function () { });
            createjs.Sound.play("accept");
            createjs.Tween.get(this._startButton2).to({ alpha: 0, y: 200 }, 3000, createjs.Ease.getPowOut(3));
            createjs.Tween.get(this).to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(2))
                .on("complete", function () { _this._switchScene(); });
        };
        StartScene.prototype._switchScene = function () {
            managers.Game.currentScene = config.Scene.TUTORIAL1;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(mapString) {
            var _this = _super.call(this) || this;
            _this._dx = 5;
            _this._dy = 5;
            _this._tooltips = [];
            _this._projectiles = [];
            _this._obstra = [];
            _this._powerups = [];
            _this._shields = [];
            _this.title = "";
            _this._map = new objects.Map(mapString);
            managers.Game.isPlaying = true;
            _this.on("click", _this._onClick);
            return _this;
        }
        Object.defineProperty(PlayScene.prototype, "topBoundary", {
            get: function () {
                return this._topAnchor - managers.Game.TOP_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "bottomBoundary", {
            get: function () {
                return this._bottomAnchor + (managers.Game.HEIGHT - managers.Game.BOTTOM_ANCHOR);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "leftBoundary", {
            get: function () {
                return this._leftAnchor - managers.Game.LEFT_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "rightBoundary", {
            get: function () {
                return this._rightAnchor + managers.Game.RIGHT_ANCHOR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "enemies", {
            get: function () {
                return this._enemies;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "player", {
            get: function () {
                return this._player;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "projectiles", {
            get: function () {
                return this._projectiles;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayScene.prototype, "tooltips", {
            get: function () {
                return this._tooltips;
            },
            enumerable: true,
            configurable: true
        });
        PlayScene.prototype.update = function () {
            if (managers.Game.keyboardManager.paused) {
                this._enemies.forEach(function (enemy) {
                    enemy.stop();
                });
                return managers.Game.currentScene;
            }
            // TODO: centralize collision check
            this._player.isColliding = false;
            this._player.update();
            this._checkBounds();
            this._tooltips.forEach(function (tooltip) {
                tooltip.update();
            });
            // Check for collisions
            this._updateEnemies();
            this._updateProjectiles();
            this._updateObstra();
            this._updatePowerups();
            this._updateShields();
            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }
            return managers.Game.currentScene;
        };
        PlayScene.prototype.start = function () {
            this._topAnchor = managers.Game.TOP_ANCHOR;
            this._bottomAnchor = managers.Game.BOTTOM_ANCHOR;
            this._leftAnchor = managers.Game.LEFT_ANCHOR;
            this._rightAnchor = managers.Game.RIGHT_ANCHOR;
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            managers.Game.scoreBoard.Score = managers.Game.previousScore;
            this._overlay = new createjs.Shape(new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT));
            this._displayTitle();
        };
        PlayScene.prototype.main = function () {
            var _this = this;
            this.addChildAt(this._map, managers.Game.INDEX_BACKGROUND);
            this._enemies.forEach(function (enemy) {
                _this.addChildAt(enemy, managers.Game.INDEX_GAMEOBJECTS);
            });
            this.addChildAt(this._player, managers.Game.INDEX_GAMEOBJECTS);
            this._tooltips.forEach(function (tooltip) {
                _this.addChildAt(tooltip, managers.Game.INDEX_UI);
            });
            this._obstra.forEach(function (obstr) {
                _this.addChildAt(obstr, managers.Game.INDEX_GAMEOBJECTS);
            });
            this.addChildAt(this._scoreBoard, managers.Game.INDEX_UI);
            managers.Game.scoreBoard.EnemyCount = this._enemies.length;
            if (managers.Game.backgroundMusic != "bgm")
                managers.Game.backgroundMusic = "bgm";
        };
        PlayScene.prototype.addProjectile = function (projectile) {
            this._projectiles.push(projectile);
            this.addChildAt(projectile, managers.Game.INDEX_GAMEOBJECTS);
        };
        PlayScene.prototype.addPowerup = function (powerup) {
            this._powerups.push(powerup);
            this.addChildAt(powerup, managers.Game.INDEX_GAMEOBJECTS);
        };
        PlayScene.prototype.addShield = function (shield) {
            this._shields.push(shield);
            this.addChildAt(shield, managers.Game.INDEX_GAMEOBJECTS);
        };
        PlayScene.prototype.pause = function () {
            managers.Game.keyboardManager.paused = true;
            this.addChild(this._overlay);
        };
        PlayScene.prototype.unpause = function () {
            managers.Game.keyboardManager.paused = false;
            // Gradually fade out the overlay
            createjs.Tween.get(this._overlay).to({ alpha: 0 }, 1000);
        };
        PlayScene.prototype.switchScene = function (scene) {
            managers.Game.previousScore = managers.Game.currentScore;
            managers.Game.currentScene = scene;
        };
        PlayScene.prototype._displayTitle = function () {
            var _this = this;
            this.pause();
            var lblTitle = new ui.Label(this.title.toUpperCase(), "40pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 0, 0, true);
            lblTitle.y = (managers.Game.HEIGHT * 0.5) - 50;
            lblTitle.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_WARM, 2, 3, 0);
            this.addChild(lblTitle);
            // Animate title across the screen
            createjs.Tween.get(lblTitle, { loop: false })
                .to({ x: 300 }, 1500, createjs.Ease.get(3))
                .to({ alpha: 0 }, 400)
                .on("complete", function () { _this.unpause(); });
        };
        PlayScene.prototype._checkBounds = function () {
            var moveX = 0;
            var moveY = 0;
            if (this._player.y <= this._topAnchor) {
                if (managers.Game.keyboardManager.moveForward) {
                    if (!(this.y + this._dy > this._map.height - managers.Game.HEIGHT)) {
                        moveY = this._dy;
                    }
                }
            }
            if (this._player.y >= this._bottomAnchor) {
                if (managers.Game.keyboardManager.moveBackward) {
                    if (!(this.y - this._dy < this.bottomBoundary)) {
                        moveY = -this._dy;
                    }
                }
            }
            if (this.x < 0 || this.x > this._map.width - managers.Game.WIDTH) {
                // Left & right boundary
                moveX = 0;
            }
            this._move(moveX, moveY);
        };
        PlayScene.prototype._move = function (x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x += x;
            this._leftAnchor -= x;
            this._rightAnchor -= x;
            this.y += y;
            this._topAnchor -= y;
            this._bottomAnchor -= y;
            this._scoreBoard.y -= y;
        };
        PlayScene.prototype._onClick = function () {
            if (managers.Game.keyboardManager.paused)
                return;
            this._player.attack();
        };
        PlayScene.prototype.destroyAll = function () {
            var _this = this;
            this._projectiles.forEach(function (projectile) {
                projectile.destroy();
                _this.removeObject(projectile);
            });
            this._enemies.forEach(function (enemy) {
                enemy.destroy(true);
                _this.removeObject(enemy, true);
            });
            this._obstra.forEach(function (obstra) {
                obstra.destroy(true);
                _this.removeObject(obstra, true);
            });
        };
        PlayScene.prototype._updateEnemies = function () {
            var _this = this;
            var keepers = [];
            this._enemies.forEach(function (enemy) {
                enemy.update();
                if (managers.Collision.check(_this._player, enemy)) {
                    _this._player.isColliding = true;
                }
                _this._projectiles.forEach(function (projectile) {
                    if (projectile.shooter instanceof animate.Player) {
                        if (managers.Collision.check(enemy, projectile)) {
                            _this.removeObject(projectile);
                        }
                    }
                });
                if (enemy.hp <= 0) {
                    managers.Game.scoreBoard.EnemyCount--;
                    _this.removeObject(enemy);
                }
                else {
                    keepers.push(enemy);
                }
            });
            this._enemies = keepers;
        };
        PlayScene.prototype._updateProjectiles = function () {
            var _this = this;
            if (this._projectiles.length) {
                var keepers_1 = [];
                this._projectiles.forEach(function (projectile) {
                    projectile.update();
                    managers.Collision.check(projectile, _this._player);
                    _this._obstra.forEach(function (obstra) {
                        if (managers.Collision.check(projectile, obstra)) {
                            _this.removeObject(projectile);
                            if (obstra.isDestroyed)
                                _this.removeObject(obstra);
                        }
                    });
                    _this._shields.forEach(function (shield) {
                        managers.Collision.check(projectile, shield);
                        if (shield.isDestroyed)
                            _this.removeObject(shield);
                    });
                    _this._projectiles.forEach(function (p) {
                        if (managers.Collision.check(p, projectile)) {
                            if (p.isDestroyed) {
                                _this.removeObject(p);
                            }
                        }
                    });
                    if (projectile.isDestroyed) {
                        _this.removeObject(projectile);
                    }
                    else {
                        keepers_1.push(projectile);
                    }
                });
                this._projectiles = keepers_1;
            }
        };
        PlayScene.prototype._updateObstra = function () {
            var _this = this;
            var keepers = [];
            this._obstra.forEach(function (obstra) {
                managers.Collision.check(obstra, _this._player);
                _this._enemies.forEach(function (enemy) {
                    managers.Collision.check(obstra, enemy);
                });
                if (obstra.isDestroyed) {
                    _this.removeObject(obstra);
                }
                else {
                    keepers.push(obstra);
                }
            });
            this._obstra = keepers;
        };
        PlayScene.prototype._updatePowerups = function () {
            var _this = this;
            var keepers = [];
            this._powerups.forEach(function (powerup) {
                managers.Collision.check(powerup, _this._player);
                if (powerup.isDestroyed) {
                    createjs.Tween.get(powerup)
                        .to({ alpha: 0, y: powerup.y - 10 }, 500, createjs.Ease.getPowOut(2))
                        .on("complete", function () { _this.removeObject(powerup); });
                }
                else {
                    keepers.push(powerup);
                }
            });
            this._powerups = keepers;
        };
        PlayScene.prototype._updateShields = function () {
            var _this = this;
            var keepers = [];
            this._shields.forEach(function (shield) {
                shield.update();
                if (shield.isDestroyed) {
                    _this.removeObject(shield);
                }
                else {
                    keepers.push(shield);
                }
            });
            this._shields = keepers;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var CreditType;
    (function (CreditType) {
        CreditType[CreditType["TITLE"] = 0] = "TITLE";
        CreditType[CreditType["ROLE"] = 1] = "ROLE";
        CreditType[CreditType["NAME"] = 2] = "NAME";
    })(CreditType || (CreditType = {}));
    var CreditsScene = /** @class */ (function (_super) {
        __extends(CreditsScene, _super);
        function CreditsScene() {
            var _this = _super.call(this) || this;
            _this._credits = {
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
            };
            _this._labels = [];
            _this._currentY = 80;
            _this.start();
            return _this;
        }
        CreditsScene.prototype.start = function () {
            var _this = this;
            this._background = new ui.Background("credits");
            this._closeButton = new ui.Button("close", managers.Game.WIDTH, 20, 0.7);
            this._closeButton.x -= this._closeButton.width + 20;
            this._makeLabel("Team", CreditType.TITLE);
            this._credits.Team.forEach(function (credit) {
                _this._makeLabel(credit[0], CreditType.ROLE);
                _this._makeLabel(credit[1], CreditType.NAME);
            });
            this._makeLabel("Music & SFX", CreditType.TITLE);
            this._credits["Music & SFX"].forEach(function (credit) {
                _this._makeLabel(credit[0], CreditType.ROLE);
                _this._makeLabel(credit[1], CreditType.NAME);
            });
            var footer = new ui.Label("Sound assets from OpenGameArt.org", "9pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            ui.centreHorizontal(footer);
            footer.y = managers.Game.HEIGHT - footer.height - 20;
            this._labels.push(footer);
            this.main();
        };
        CreditsScene.prototype.main = function () {
            var _this = this;
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this._labels.forEach(function (label) {
                _this.addChildAt(label, managers.Game.INDEX_GAMEOBJECTS);
            });
            this.addChildAt(this._closeButton, managers.Game.INDEX_UI);
            this._closeButton.on("click", function () { managers.Game.currentScene = config.Scene.START; });
            this._closeButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
        };
        CreditsScene.prototype._makeLabel = function (text, type) {
            var lblNew = new ui.Label(text, "11pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 0, this._currentY, true);
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
        };
        return CreditsScene;
    }(objects.Scene));
    scenes.CreditsScene = CreditsScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        GameOverScene.prototype.start = function () {
            this._background = new ui.Background("gameover");
            this._startButton2 = new ui.Button("startButton2", managers.Game.WIDTH * 0.5, 320, 1, true);
            this._startButton = new ui.Button("startButton", managers.Game.WIDTH * 0.5, 320, 0.1, true);
            this._finalScoreLabel = new ui.Label("Score: 0", "18pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 0, 250, false);
            this._finalScoreLabel.text = "Final Score: " + managers.Game.currentScore;
            this._finalScoreLabel.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
            ui.centreHorizontal(this._finalScoreLabel);
            managers.Game.currentScore = 0;
            this.main();
        };
        GameOverScene.prototype.main = function () {
            _super.prototype.main.call(this);
            managers.Game.stopMusic();
        };
        GameOverScene.prototype._startButtonClick = function () {
            managers.Game.currentScore = managers.Game.previousScore;
            managers.Game.currentScene = managers.Game.currentPlayScene;
        };
        return GameOverScene;
    }(scenes.StartScene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            var _this = _super.call(this, "mapLevel1") || this;
            managers.Game.currentPlayScene = config.Scene.TUTORIAL1;
            _this.title = "Level 1";
            _this.start();
            return _this;
        }
        Level1.prototype.start = function () {
            _super.prototype.start.call(this);
            console.log("Initializing enemies...");
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD, 310, 40),
                new animate.Enemy(config.Enemy.GUARD, 260, 120),
                new animate.Enemy(config.Enemy.GUARD, 560, 190),
            ];
            console.log("Enemies initialized.");
            console.log("Initializing player...");
            this._player = new animate.Player(config.Character.GUNSLINGER, 100, 420);
            console.log("Player initialized.");
            // Initialize
            var tooltipMessages = [
                "Gunslinger Sam moves slowly, but fires quickly. This makes it easier to block lasers with his bullets!",
            ];
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];
            this.main();
        };
        Level1.prototype.update = function () {
            _super.prototype.update.call(this);
            if (!this._enemies.length) {
                this.switchScene(config.Scene.TUTORIAL2);
            }
            return managers.Game.currentScene;
        };
        Level1.prototype.main = function () {
            _super.prototype.main.call(this);
        };
        return Level1;
    }(scenes.PlayScene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        function Level2() {
            var _this = _super.call(this, "mapLevel2") || this;
            managers.Game.currentPlayScene = config.Scene.TUTORIAL2;
            _this.title = "Level 2";
            _this.start();
            return _this;
        }
        Level2.prototype.start = function () {
            _super.prototype.start.call(this);
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD, 160, 110),
                new animate.Enemy(config.Enemy.GUARD, 320, 240),
                new animate.Enemy(config.Enemy.GUARD, 500, 100),
                new animate.Enemy(config.Enemy.GUARD, 237, -200),
                new animate.Enemy(config.Enemy.WATCHER, 400, -270),
                new animate.Enemy(config.Enemy.GUARD, 470, -270),
            ];
            this._obstra = [
                new objects.Destructible("crate", 1, 60, 80),
                new objects.Destructible("crate", 1, 580, 240),
                new objects.Destructible("crate", 1, 580, 300),
                new objects.Destructible("crate", 1, 237, 20),
            ];
            this._player = new animate.Player(config.Character.QUICKSILVER, 100, 420);
            var tooltipMessages = [
                "Move up and around the map to discover more areas, but beware the enemies ahead!",
            ];
            this._tooltips = [
                new ui.Tooltip("tooltipBg", tooltipMessages)
            ];
            this.main();
        };
        Level2.prototype.update = function () {
            _super.prototype.update.call(this);
            if (!this._enemies.length) {
                this.switchScene(config.Scene.SELECT);
            }
            return managers.Game.currentScene;
        };
        Level2.prototype.main = function () {
            _super.prototype.main.call(this);
        };
        return Level2;
    }(scenes.PlayScene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        function Level3() {
            var _this = _super.call(this, "mapLevel3") || this;
            managers.Game.currentPlayScene = config.Scene.SELECT;
            _this.title = "Level 3";
            _this.start();
            return _this;
        }
        Level3.prototype.start = function () {
            _super.prototype.start.call(this);
            console.log("Initializing enemies...");
            this._enemies = [
                new animate.Enemy(config.Enemy.GUARD, 120, 140),
                new animate.Enemy(config.Enemy.WATCHER, 500, 340),
                new animate.Enemy(config.Enemy.PATROLLER, 100, 100, 300, 100),
                new animate.Enemy(config.Enemy.WATCHER, 240, -350),
                new animate.Enemy(config.Enemy.GUARD, 470, -270),
                new animate.Enemy(config.Enemy.GUARD, 580, -270),
                new animate.Enemy(config.Enemy.PATROLLER, 500, -300, 300, 500)
            ];
            console.log("Enemies initialized.");
            console.log("Initializing player...");
            this._player = new animate.Player(managers.Game.currentPlayerType, 100, 420);
            console.log("Player initialized.");
            this._obstra = [
                new objects.Destructible("crate", 1, 310, 140),
                new objects.Destructible("crate", 1, 260, 220),
                new objects.Destructible("crate", 1, 100, 320),
                new objects.Destructible("crate", 1, 150, 320),
                new objects.Destructible("crate", 1, 250, 400),
                new objects.Destructible("crate", 1, 250, -220),
                new objects.Destructible("crate", 1, 190, -220),
                new objects.Destructible("crate", 1, 560, 90)
            ];
            this.main();
        };
        Level3.prototype.update = function () {
            _super.prototype.update.call(this);
            if (!this._enemies.length) {
                this.switchScene(config.Scene.WIN);
            }
            return managers.Game.currentScene;
        };
        Level3.prototype.main = function () {
            _super.prototype.main.call(this);
        };
        return Level3;
    }(scenes.PlayScene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var PauseScene = /** @class */ (function (_super) {
        __extends(PauseScene, _super);
        function PauseScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        PauseScene.prototype.start = function () {
        };
        PauseScene.prototype.update = function () {
            return 0;
        };
        PauseScene.prototype.main = function () {
        };
        return PauseScene;
    }(objects.Scene));
    scenes.PauseScene = PauseScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var SelectScene = /** @class */ (function (_super) {
        __extends(SelectScene, _super);
        function SelectScene() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        SelectScene.prototype.start = function () {
            this._background = new ui.Background("mapLevel3");
            this._overlay = new createjs.Shape(new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT));
            var selectionWidth = managers.Game.WIDTH * 0.45;
            var selectionHeight = managers.Game.HEIGHT * 0.75;
            this._select1 = new ui.Selection(20, 20, selectionWidth, selectionHeight, "Gunslinger Sam", "- Quick fire rate\n- Slow\n- Long range", "\"Pew pew!\"", new createjs.Sprite(managers.Game.textureAtlas, "cowboy1"));
            this._select2 = new ui.Selection(0, 20, selectionWidth, selectionHeight, "Quicksilver John", "- Slow fire rate\n- Quick\n- Short range\n- Bullets cut through lasers", "\"Zoom zoom!\"", new createjs.Sprite(managers.Game.textureAtlas, "cowboy2"));
            this._select2.x = managers.Game.WIDTH - this._select2.width - 20;
            this._lblPrompt = new ui.Label("Choose your cowboy for level 3!", "16pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY);
            ui.centreHorizontal(this._lblPrompt);
            this._lblPrompt.y = 420;
            this._lblPrompt.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_COOL, 1, 2, 0);
            this.main();
        };
        SelectScene.prototype.main = function () {
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChild(this._overlay);
            this.addChild(this._select1);
            this.addChild(this._select2);
            this.addChild(this._lblPrompt);
            this._select1.on("click", function () {
                managers.Game.currentPlayerType = config.Character.GUNSLINGER;
                managers.Game.currentScene = config.Scene.LEVEL3;
            });
            this._select2.on("click", function () {
                managers.Game.currentPlayerType = config.Character.QUICKSILVER;
                managers.Game.currentScene = config.Scene.LEVEL3;
            });
        };
        return SelectScene;
    }(objects.Scene));
    scenes.SelectScene = SelectScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var TutorialPage = /** @class */ (function () {
        // text: text to display in the tutorial page
        // func: function to call in the tutorial page (e.g. function with animation to play)
        function TutorialPage(text, func) {
            this.text = text;
            this.func = func;
        }
        return TutorialPage;
    }());
    scenes.TutorialPage = TutorialPage;
    var TutorialScene = /** @class */ (function (_super) {
        __extends(TutorialScene, _super);
        function TutorialScene(map, pages, nextScene) {
            var _this = _super.call(this) || this;
            _this._pageIndex = 0;
            _this._enemies = [];
            _this._projectiles = [];
            _this._obstra = [];
            _this._powerups = [];
            _this._shields = [];
            _this._canFire = false;
            _this._background = new ui.Background(map);
            _this._pages = pages;
            _this._nextScene = nextScene;
            return _this;
        }
        Object.defineProperty(TutorialScene.prototype, "topBoundary", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TutorialScene.prototype, "bottomBoundary", {
            get: function () {
                return 350;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TutorialScene.prototype, "enemies", {
            get: function () {
                return this._enemies;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TutorialScene.prototype, "player", {
            get: function () {
                return this._player;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TutorialScene.prototype, "projectiles", {
            get: function () {
                return this._projectiles;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TutorialScene.prototype, "pages", {
            get: function () {
                return this._pages;
            },
            enumerable: true,
            configurable: true
        });
        TutorialScene.prototype.start = function () {
            this._overlay = new createjs.Shape(new createjs.Graphics().beginFill(managers.Style.SHADOW_COLOUR_PRIMARY)
                .drawRect(0, 0, managers.Game.WIDTH, managers.Game.HEIGHT));
            this._closeButton = new ui.Button("close", managers.Game.WIDTH, 20, 0.7);
            this._closeButton.x -= this._closeButton.width + 20;
            this._nextButton = new ui.Button("next", managers.Game.WIDTH, managers.Game.HEIGHT, 0.7);
            this._nextButton.x -= this._nextButton.width + 20;
            this._nextButton.y -= this._nextButton.height + 20;
            this._lblPrompt = new ui.Label(this._pages[0].text, "16pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_SECONDARY);
            this._lblPrompt.lineWidth = managers.Game.WIDTH * 0.9;
            ui.centreHorizontal(this._lblPrompt);
            this._lblPrompt.y = 360;
            this._lblPrompt.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
        };
        TutorialScene.prototype.main = function () {
            var _this = this;
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._overlay, managers.Game.INDEX_GAMEOBJECTS);
            this.addChildAt(this._lblPrompt, managers.Game.INDEX_UI);
            this.addChildAt(this._closeButton, managers.Game.INDEX_UI);
            this.addChildAt(this._nextButton, managers.Game.INDEX_UI);
            this._closeButton.on("click", function () { _this.finish(); });
            this._closeButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
            this._nextButton.on("click", function () { _this.displayNext(); });
            this._nextButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
            this.on("click", this._onClick);
            if (managers.Game.backgroundMusic != "bgm")
                managers.Game.backgroundMusic = "bgm";
            this.displayNext();
        };
        TutorialScene.prototype.update = function () {
            this._player.isColliding = false;
            this._player.update();
            this._updateEnemies();
            this._updateProjectiles();
            this._updateObstra();
            this._updatePowerups();
            this._updateShields();
            if (!this._player.isColliding) {
                this._player.lastValidPosition.x = this._player.x;
                this._player.lastValidPosition.y = this._player.y;
            }
            return managers.Game.currentScene;
        };
        TutorialScene.prototype.displayNext = function () {
            this._lblPrompt.text = this._pages[this._pageIndex].text;
            this._pages[this._pageIndex].func();
            this._pageIndex++;
            if (this._pageIndex >= this._pages.length) {
                this.removeChild(this._nextButton);
            }
        };
        TutorialScene.prototype.addProjectile = function (projectile) {
            this._projectiles.push(projectile);
            this.addToScene(projectile, managers.Game.INDEX_UI);
        };
        TutorialScene.prototype.addPowerup = function (powerup) {
            this._powerups.push(powerup);
            this.addToScene(powerup, managers.Game.INDEX_UI);
        };
        TutorialScene.prototype.addShield = function (shield) {
            this._shields.push(shield);
            this.addToScene(shield, managers.Game.INDEX_UI);
        };
        TutorialScene.prototype.finish = function () {
            this.destroyAll();
            managers.Game.currentScene = this._nextScene;
        };
        TutorialScene.prototype.destroyAll = function () {
            var _this = this;
            this._projectiles.forEach(function (projectile) {
                projectile.destroy();
                _this.removeObject(projectile);
            });
            this._enemies.forEach(function (enemy) {
                enemy.destroy(true);
                _this.removeObject(enemy, true);
            });
            this._obstra.forEach(function (obstra) {
                obstra.destroy(true);
                _this.removeObject(obstra, true);
            });
        };
        TutorialScene.prototype.addToScene = function (child, index) {
            if (index === void 0) { index = 0; }
            child.visible = true;
            this.addChildAt(child, index);
        };
        TutorialScene.prototype._onClick = function () {
            if (this._canFire)
                this._player.attack();
        };
        TutorialScene.prototype._updateEnemies = function () {
            var _this = this;
            this._enemies.forEach(function (enemy) {
                enemy.update();
                if (managers.Collision.check(_this._player, enemy)) {
                    _this._player.isColliding = true;
                }
                _this._projectiles.forEach(function (projectile) {
                    if (projectile.shooter instanceof animate.Player) {
                        if (managers.Collision.check(enemy, projectile)) {
                            if (projectile.isDestroyed)
                                _this.removeObject(projectile);
                        }
                    }
                });
                if (enemy.hp <= 0)
                    enemy.visible = false;
            });
        };
        TutorialScene.prototype._updateProjectiles = function () {
            var _this = this;
            if (this._projectiles.length) {
                var keepers_2 = [];
                this._projectiles.forEach(function (projectile) {
                    projectile.update();
                    managers.Collision.check(projectile, _this._player);
                    _this._obstra.forEach(function (obstra) {
                        if (managers.Collision.check(projectile, obstra)) {
                            if (projectile.isDestroyed)
                                _this.removeObject(projectile);
                            if (obstra.isDestroyed)
                                obstra.visible = false;
                        }
                    });
                    _this._projectiles.forEach(function (p) {
                        if (managers.Collision.check(p, projectile)) {
                            if (p.isDestroyed) {
                                _this.removeObject(p);
                            }
                        }
                    });
                    if (projectile.isDestroyed) {
                        _this.removeObject(projectile);
                    }
                    else {
                        keepers_2.push(projectile);
                    }
                });
                this._projectiles = keepers_2;
            }
        };
        TutorialScene.prototype._updateObstra = function () {
            var _this = this;
            this._obstra.forEach(function (obstra) {
                managers.Collision.check(obstra, _this._player);
                _this._enemies.forEach(function (enemy) {
                    managers.Collision.check(obstra, enemy);
                });
                if (obstra.isDestroyed) {
                    obstra.visible = false;
                }
            });
        };
        TutorialScene.prototype._updatePowerups = function () {
            var _this = this;
            var keepers = [];
            this._powerups.forEach(function (powerup) {
                managers.Collision.check(powerup, _this._player);
                if (powerup.isDestroyed) {
                    createjs.Tween.get(powerup)
                        .to({ alpha: 0, y: powerup.y - 10 }, 500, createjs.Ease.getPowOut(2))
                        .on("complete", function () { _this.removeObject(powerup); });
                }
                else {
                    keepers.push(powerup);
                }
            });
            this._powerups = keepers;
        };
        TutorialScene.prototype._updateShields = function () {
            var _this = this;
            var keepers = [];
            this._shields.forEach(function (shield) {
                shield.update();
                if (shield.isDestroyed) {
                    _this.removeObject(shield);
                }
                else {
                    keepers.push(shield);
                }
            });
            this._shields = keepers;
        };
        return TutorialScene;
    }(objects.Scene));
    scenes.TutorialScene = TutorialScene;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Tutorial1 = /** @class */ (function (_super) {
        __extends(Tutorial1, _super);
        function Tutorial1() {
            var _this = this;
            var pages = [
                new scenes.TutorialPage("This is Gunslinger Sam. Use WASD or arrow keys to move.", function () { _this.page1(); }),
                new scenes.TutorialPage("Watch out for lasers! You can hide behind crates.", function () { _this.page2(); }),
                new scenes.TutorialPage("Left-click to shoot the alien, but be careful: your bullets break crates!", function () { _this.page3(); }),
                new scenes.TutorialPage("Ready to play? Click the close button on the top right.", function () { _this.page4(); }),
            ];
            _this = _super.call(this, "mapLevel1", pages, config.Scene.LEVEL1) || this;
            _this._hasPlayerMoved = false;
            _this.start();
            return _this;
        }
        Tutorial1.prototype.start = function () {
            _super.prototype.start.call(this);
            this._player = new animate.PlayerDummy(config.Character.GUNSLINGER, 0, 300);
            this._enemies = [
                new animate.EnemyDummy(config.Enemy.GUARD, 0, 100),
                new animate.EnemyDummy(config.Enemy.GUARD, 0, 150)
            ];
            this._obstra.push(new objects.DestructibleDummy("crate", 1, 0, 230));
            this._resetPlayer();
            ui.centreHorizontal(this._enemies[0]);
            ui.centreHorizontal(this._enemies[1]);
            ui.centreHorizontal(this._obstra[0]);
            this._controlsIntroduck = new ui.Image("controlsIntroduck", this._player.x + this._player.halfWidth, this._player.y);
            this._controlsIntroduck.y -= this._controlsIntroduck.height + this._player.halfHeight;
            this.main();
        };
        Tutorial1.prototype.main = function () {
            _super.prototype.main.call(this);
        };
        Tutorial1.prototype.update = function () {
            // Make controls intro bubble disappear when player moves
            if (!this._hasPlayerMoved) {
                if (managers.Game.keyboardManager.moveForward || managers.Game.keyboardManager.moveBackward
                    || managers.Game.keyboardManager.moveLeft || managers.Game.keyboardManager.moveRight) {
                    this._hasPlayerMoved = true;
                    this.removeChild(this._controlsIntroduck);
                }
            }
            _super.prototype.update.call(this);
            return managers.Game.currentScene;
        };
        Tutorial1.prototype.page1 = function () {
            this.addToScene(this._player, managers.Game.INDEX_UI);
            this.addToScene(this._controlsIntroduck, managers.Game.INDEX_UI);
        };
        Tutorial1.prototype.page2 = function () {
            this._resetPlayer();
            this.addToScene(this._enemies[0], managers.Game.INDEX_UI);
            this._enemies[0].start();
            this.addToScene(this._obstra[0], managers.Game.INDEX_UI);
        };
        Tutorial1.prototype.page3 = function () {
            this._canFire = true;
        };
        Tutorial1.prototype.page4 = function () { };
        Tutorial1.prototype._resetPlayer = function () {
            ui.centreHorizontal(this._player);
            this._player.y = 300;
        };
        return Tutorial1;
    }(scenes.TutorialScene));
    scenes.Tutorial1 = Tutorial1;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Tutorial2 = /** @class */ (function (_super) {
        __extends(Tutorial2, _super);
        function Tutorial2() {
            var _this = this;
            var pages = [
                new scenes.TutorialPage("Powerups spawn randomly from crates. This is super speed. It makes you faster.", function () { _this.page1(); }),
                new scenes.TutorialPage("This is super armour. It gives you a shield that can block one laser.", function () { _this.page2(); }),
                new scenes.TutorialPage("This is Quicksilver John. His range and fire rate is lower, but he's quicker, and his bullets cut through lasers.", function () { _this.page3(); }),
                new scenes.TutorialPage("This alien is a Watcher - it shoots directly at you, not just straight down!", function () { _this.page4(); }),
                new scenes.TutorialPage("Use John's speed to quickly take it out!", function () { _this.page5(); }),
            ];
            _this = _super.call(this, "mapLevel2", pages, config.Scene.LEVEL2) || this;
            _this.start();
            return _this;
        }
        Tutorial2.prototype.start = function () {
            _super.prototype.start.call(this);
            this._player = new animate.PlayerDummy(config.Character.QUICKSILVER, 0, 300);
            this._enemies = [
                new animate.EnemyDummy(config.Enemy.WATCHER, 0, 150)
            ];
            this._powerups = [
                new objects.PowerupDummy(config.Powerup.SUPERSPEED, 270, 240),
                new objects.PowerupDummy(config.Powerup.SUPERARMOUR, 370, 240)
            ];
            this._resetPlayer();
            ui.centreHorizontal(this._enemies[0]);
            this.main();
        };
        Tutorial2.prototype.main = function () {
            _super.prototype.main.call(this);
        };
        Tutorial2.prototype.page1 = function () {
            var p = this._powerups[0];
            p.alpha = 0;
            this.addToScene(p, managers.Game.INDEX_UI);
            createjs.Tween.get(p).to({ alpha: 1 }, 1000);
        };
        Tutorial2.prototype.page2 = function () {
            var p = this._powerups[1];
            p.alpha = 0;
            this.addToScene(p, managers.Game.INDEX_UI);
            createjs.Tween.get(p).to({ alpha: 1 }, 1000);
        };
        Tutorial2.prototype.page3 = function () {
            this.addToScene(this._player, managers.Game.INDEX_UI);
            this._canFire = true;
        };
        Tutorial2.prototype.page4 = function () {
            this._resetPlayer();
            this.addToScene(this._enemies[0], managers.Game.INDEX_UI);
            this._enemies[0].hp = 9999;
        };
        Tutorial2.prototype.page5 = function () {
            this._enemies[0].hp = 1;
            this._enemies[0].start();
        };
        Tutorial2.prototype._resetPlayer = function () {
            ui.centreHorizontal(this._player);
            this._player.y = 300;
        };
        return Tutorial2;
    }(scenes.TutorialScene));
    scenes.Tutorial2 = Tutorial2;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var WinScreen = /** @class */ (function (_super) {
        __extends(WinScreen, _super);
        function WinScreen() {
            var _this = _super.call(this) || this;
            _this.start();
            return _this;
        }
        WinScreen.prototype.start = function () {
            this._background = new ui.Background("win");
            this._startButton = new ui.Button("playagain", 0, 280, 0.7);
            ui.centreHorizontal(this._startButton);
            this._finalScoreLabel = new ui.Label("Score: 0", "18pt", managers.Style.FONT_FAMILY_PRIMARY, managers.Style.FONT_COLOUR_PRIMARY, 0, 220, false);
            this._finalScoreLabel.text = "Final Score: " + managers.Game.currentScore;
            this._finalScoreLabel.shadow = new createjs.Shadow(managers.Style.SHADOW_COLOUR_PRIMARY, 1, 2, 0);
            this._finalScoreLabel.visible = true;
            ui.centreHorizontal(this._finalScoreLabel);
            this._creditsButton = new ui.Button("creditsButton", 10, 10, 0.7);
            this._creditsButton.x = managers.Game.WIDTH - this._creditsButton.width - 20;
            this._creditsButton.y = managers.Game.HEIGHT - this._creditsButton.height - 20;
            this.main();
        };
        WinScreen.prototype.main = function () {
            var _this = this;
            this.addChildAt(this._background, managers.Game.INDEX_BACKGROUND);
            this.addChildAt(this._startButton, managers.Game.INDEX_UI);
            if (this._creditsButton) {
                this.addChildAt(this._creditsButton, managers.Game.INDEX_GAMEOBJECTS);
                this._creditsButton.on("click", function () { managers.Game.currentScene = config.Scene.CREDITS; });
                this._creditsButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
            }
            this.addChildAt(this._finalScoreLabel, managers.Game.INDEX_UI);
            if (managers.Game.backgroundMusic != "menu")
                managers.Game.backgroundMusic = "menu";
            this._startButton.on("click", function () { _this._startButtonClick(); });
            this._startButton.on("mouseover", function () { createjs.Sound.play("select").duration = 500; });
        };
        WinScreen.prototype._startButtonClick = function () {
            managers.Game.currentScene = config.Scene.LEVEL1;
        };
        return WinScreen;
    }(scenes.StartScene));
    scenes.WinScreen = WinScreen;
})(scenes || (scenes = {}));
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var helloLabel;
    var clickMeButton;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    var stats;
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
        { id: "background", src: "./assets/images/background.png" },
        { id: "gameover", src: "./assets/images/gameover.png" },
        { id: "credits", src: "./assets/images/backgroundCredits.png" },
        { id: "win", src: "./assets/images/backgroundWin.png" },
        { id: "mapLevel1", src: "./assets/images/mapLevel1.png" },
        { id: "mapLevel2", src: "./assets/images/mapLevel2.png" },
        { id: "mapLevel3", src: "./assets/images/mapLevel3.png" },
        { id: "shot", src: "./assets/audio/shoot.mp3" },
        { id: "blaster", src: "./assets/audio/blaster.mp3" },
        { id: "monster_die", src: "./assets/audio/monster_die.mp3" },
        { id: "player_die", src: "./assets/audio/player_die.mp3" },
        { id: "breaking", src: "./assets/audio/breaking.wav" },
        { id: "dying", src: "./assets/audio/dying.wav" },
        { id: "menu", src: "./assets/audio/menu.mp3" },
        { id: "bgm", src: "./assets/audio/bgm.mp3" },
        { id: "select", src: "./assets/audio/select.wav" },
        { id: "accept", src: "./assets/audio/accept.mp3" },
        { id: "superspeed", src: "./assets/audio/superspeed.mp3" },
        { id: "superarmour", src: "./assets/audio/superarmour.mp3" }
    ];
    function init() {
        console.log("Initializing...");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", start, this);
    }
    function start() {
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
    function update() {
        stats.begin();
        if (currentState != managers.Game.currentScene) {
            main();
        }
        currentScene.update();
        stage.update();
        stats.end();
    }
    function main() {
        stage.removeAllChildren();
        managers.Game.isPlaying = false; // set to true when a PlayScene is initialized
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.LEVEL1:
                managers.Game.currentScore = 0;
                currentScene = new scenes.Level1();
                break;
            case config.Scene.LEVEL2:
                managers.Game.currentScore = managers.Game.scoreBoard.Score;
                currentScene = new scenes.Level2();
                break;
            case config.Scene.LEVEL3:
                managers.Game.currentScore = managers.Game.scoreBoard.Score;
                currentScene = new scenes.Level3();
                break;
            case config.Scene.GAMEOVER:
                managers.Game.currentScore = managers.Game.scoreBoard.Score;
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
//# sourceMappingURL=game.js.map