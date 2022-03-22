"use strict";
exports.__esModule = true;
exports.Pointer = void 0;
// classes
var Pointer = /** @class */ (function () {
    //using the private keyword to avoid direct access
    //    private x: number;
    //    private y: number;
    function Pointer(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Pointer.prototype.draw = function () {
        // can be written like this
        console.log('X: ' + this._x + ', Y: ' + this._y);
        // or like this
        console.log('X: ' + this.getX() + ', Y: ' + this.getY());
    };
    // this function below can be written like this 
    Pointer.prototype.getX = function () {
        return this.x;
    };
    Object.defineProperty(Pointer.prototype, "x", {
        // or like this
        get: function () {
            return this._x;
        },
        // or like this
        set: function (x) {
            if (x < 0) {
                throw new Error("value cannot be less than 0.");
            }
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    // the above code is called a property
    Pointer.prototype.getY = function () {
        return this._y;
    };
    // this function below can be written like this 
    Pointer.prototype.setX = function (x) {
        if (x < 0) {
            throw new Error("value cannot be less than 0.");
        }
        this._x = x;
    };
    // the above code is called a property
    Pointer.prototype.setY = function (y) {
        if (y < 0) {
            throw new Error("value cannot be less than 0.");
        }
        this._y = y;
    };
    return Pointer;
}());
exports.Pointer = Pointer;
