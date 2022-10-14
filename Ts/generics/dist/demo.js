"use strict";
// function getRandomElement<T>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }
var getRandomElement = function (list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
