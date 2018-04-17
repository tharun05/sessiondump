"use strict";
var firstname = 'digital';
var age = 30;
var hasHobbies = true;
var realage;
realage = 22;
var anything = 'technologies';
anything = 10;
var hobbies = ['reading books', 'playing games', 17, { name: 'tharun' }];
var Players;
(function (Players) {
    Players[Players["sachin"] = 0] = "sachin";
    Players[Players["smith"] = 13] = "smith";
    Players[Players["kholi"] = 14] = "kholi";
    Players[Players["gilchrist"] = 15] = "gilchrist";
})(Players || (Players = {}));
var topPlayer = Players.gilchrist;
console.log(topPlayer);
var obj = {
    name: 'digital-lync',
    location: 'gachibowli',
};
var returnNames = function (num1, num2) {
    return num1 * num2;
};
returnNames(3, 6);
//# sourceMappingURL=index.js.map