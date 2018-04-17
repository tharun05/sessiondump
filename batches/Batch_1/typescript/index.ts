var firstname:string = 'digital';

var age:number = 30;

let hasHobbies:boolean = true;

let realage:number;
realage = 22;

let anything:any = 'technologies'
anything = 10;

let hobbies:any[] = ['reading books','playing games',17,{name:'tharun'}];


enum Players{
    sachin,
    smith = 13,
    kholi,
    gilchrist
}

var topPlayer:Players = Players.gilchrist;
console.log(topPlayer);

let obj:{name:any,location:string,age?:number} = {
    name:'digital-lync',
    location:'gachibowli',
}

let returnNames = (num1:number,num2:number):number=>{
    return num1*num2;
}
returnNames(3,6);


