function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'cho', last: 'kim' });
// 객체 리터럴로 전달할 때는 지정된 프로퍼티만 전달할 수 있지만, 다른 변수로 할당하는 선과정을 거치면 필요 프로퍼티가 존재하는지만 확인하고 다른 프로퍼티는 부수적인 것으로 취급한다.
// printName({ first: 'cho', last: 'kim', age: 7 });
var cho = { first: 'cho', last: 'kim', age: 7 };
printName(cho);
var coordinate = { x: 1, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function prinNUM(point) {
    return {
        x: point.x,
        y: point.y
    };
}
var numbers = { x: 12, y: 45 };
var callName = function (name) {
    console.log("this is ".concat(name));
    console.log('이름');
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'asdg',
    artist: ' sfsdf',
    numStreams: 1232134,
    credits: {
        producer: 'sdfsdf',
        writer: 'cfsdf'
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
