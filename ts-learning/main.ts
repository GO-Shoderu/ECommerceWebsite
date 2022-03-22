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

// classes
class Pointer{
    x: number;
    y: number;

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(){
        // 
    }
}

let point: Pointer;
point.draw();