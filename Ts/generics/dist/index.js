"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Providing a type to querySelector:
var inputEl = document.querySelector('#username');
console.dir(inputEl);
inputEl.value = 'Hacked!';
var btn = document.querySelector('.btn');
// Without Generics...Lots of Repetition!
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any{
//   return item;
// }
// With A Generic...Super Reusable!
function identity(item) {
    return item;
}
identity(7);
identity('hello');
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
getRandomElement([5, 6, 21, 354, 567, 234, 654]);
getRandomElement([1, 2, 3, 4]);
// Generics With Constraints:
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
console.log(merge({ name: 'Colt' }, { num: 9 }));
merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }
printDoubleLength('asdasd');
// printDoubleLength(234); //Not allowed!
function makeEmptyArray() {
    return [];
}
var nums = makeEmptyArray();
var bools = makeEmptyArray();
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
