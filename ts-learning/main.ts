import { Pointer } from "./pointer";

// functions
// function log(message){
//     console.log(message);
// }

// variables
// var message = 'Hello World';

// log(message);

// var number = 1;
// let count = 2;

// function doSomething() {

//     let index;

//     for (index = 0; index < 5; index++) {
//         console.log(index);
//     }

//     console.log('Finally: ' + index);
// }

// doSomething();

// dataTypes
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[];
// let f: number[] = [1, 2, 3];
// let g: any[] = [1, true, 'a', false];

//instead of this
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

//use this for constants
// enum Color {Red = 0, Green = 1, Blue = 2};

// let backgroundColor1 = Color.Blue;
// let backgroundColor2 = Color.Green;
// let backgroundColor3 = Color.Red;

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// let log = function (message: any) {
//     console.log(message);    
// }

// arrow function
// let doLog = (message: any) => {
//     console.log(message);    
// }

// Interfaces
// interface Point{
//     x: number,
//     y: number
// }
// interfaces can only have declarations and not implementations
// the above code can also have the declaration of a function

// arrow function
// let drawPoint = (point: Point) => {

// }

// // classes
// class Pointer{
//     //using the private keyword to avoid direct access
// //    private x: number;
// //    private y: number;

//     constructor(private _x: number, private _y:number){
//         // this.x = x;
//         // this.y = y;
//     }

//     draw(){
//         // can be written like this
//         console.log('X: ' + this._x + ', Y: ' + this._y);

//         // or like this
//         console.log('X: ' + this.getX() + ', Y: ' + this.getY());
        
//     }
    
//     // this function below can be written like this 
//     getX(){
//         return this.x;
//     }

//     // or like this
//     get x(){
//         return this.x;
//     }

//     // the above code is called a property

    
//     getY(){
//         return this.y;
//     }

//     // this function below can be written like this 
//     setX(x: number){

//         if (x < 0) {
//             throw new Error("value cannot be less than 0.");
//         }

//         this.x = x;
//     }

//     // or like this
//     set x(x: number){
//         if (x < 0) {
//             throw new Error("value cannot be less than 0.");
//         }

//         this.x = x;
//     }

//     // the above code is called a property

//     setY(y: number){

//         if (y < 0) {
//             throw new Error("value cannot be less than 0.");
//         }

//         this._y = y;
//     }
// }

// converted the class above to a module, imported as a module on line 1

// object
// without constructor
// let point = new Pointer();  //an object is an instance of a class
// point.x = 1;
// point.y = 2;
// point.draw();

// with a constructor
let point = new Pointer(1, 2)
point.draw();

point.setX(10);
point.setY(20);

point.draw();

// trying to access property that was created
point.x = 15;

console.log(point.x);
