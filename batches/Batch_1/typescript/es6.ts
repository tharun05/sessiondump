console.log('let and const');
let variable = "digitallync";

console.log(variable);

variable = "another value";
console.log(variable);

const adharnumber = 12345678912;


// blocked scopes

function person(){
    let name = null;
    console.log(name)
}
person();
console.log(variable);

// arrow functions 
console.log('ARROW FUNCTIONS');

const addNumbers = function(num1:number,num2:number):number{
    return num1+num2;
}

console.log(addNumbers(20,10));

const addNum = (num1:number,num2:number):number=>{
    return num1*num2;
}
console.log(addNum(20,30));


const countNumb = (num1:number,num2:number)=> num1*num2;

const count = (start:number = 10):void=>{
    console.log(start);
    while(start>0){
        start--;

        console.log("done with the count" + start);
    }
   
}
count();
console.log("REST AND SPREAD OPERATORS");

const numbers = [1,2,3,4,5,189];
console.log(Math.max(...numbers));


function makeArray(name:string,...arr:number[]){
    return arr;
}

console.log(makeArray('THARUN',1,2,3,4,5,6,7,8,9));

