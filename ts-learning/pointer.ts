// classes
export class Pointer{
    //using the private keyword to avoid direct access
//    private x: number;
//    private y: number;

    constructor(private _x: number, private _y:number){
        // this.x = x;
        // this.y = y;
    }

    draw(){
        // can be written like this
        console.log('X: ' + this._x + ', Y: ' + this._y);

        // or like this
        console.log('X: ' + this.getX() + ', Y: ' + this.getY());
        
    }
    
    // this function below can be written like this 
    getX(){
        return this.x;
    }

    // or like this
    get x(){
        return this._x;
    }

    // the above code is called a property

    
    getY(){
        return this._y;
    }

    // this function below can be written like this 
    setX(x: number){

        if (x < 0) {
            throw new Error("value cannot be less than 0.");
        }

        this._x = x;
    }

    // or like this
    set x(x: number){
        if (x < 0) {
            throw new Error("value cannot be less than 0.");
        }

        this._x = x;
    }

    // the above code is called a property

    setY(y: number){

        if (y < 0) {
            throw new Error("value cannot be less than 0.");
        }

        this._y = y;
    }
}