// function log(message){
//     console.log(message);
// }
// var message = 'Hello World';
// log(message);
// var number = 1;
// let count = 2;
function doSomething() {
    var index;
    for (index = 0; index < 5; index++) {
        console.log(index);
    }
    console.log('Finally: ' + index);
}
doSomething();
var a;
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'a', false];
//instead of this
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//use this for constants
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor1 = Color.Blue;
var backgroundColor2 = Color.Green;
var backgroundColor3 = Color.Red;
