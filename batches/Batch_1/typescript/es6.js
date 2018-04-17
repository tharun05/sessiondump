"use strict";
console.log('let and const');
var variable = "digitallync";
console.log(variable);
variable = "another value";
console.log(variable);
var adharnumber = 12345678912;
// blocked scopes
function person() {
    var name = null;
    console.log(name);
}
person();
console.log(variable);
// arrow functions 
console.log('ARROW FUNCTIONS');
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(20, 10));
var addNum = function (num1, num2) {
    return num1 * num2;
};
console.log(addNum(20, 30));
var countNumb = function (num1, num2) { return num1 * num2; };
var count = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
        console.log("done with the count" + start);
    }
};
count();
console.log("REST AND SPREAD OPERATORS");
var numbers = [1, 2, 3, 4, 5, 189];
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return arr;
}
console.log(makeArray('THARUN', 1, 2, 3, 4, 5, 6, 7, 8, 9));
//# sourceMappingURL=es6.js.map