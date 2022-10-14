var pt = { x: 123, y: 567 };
var thomas = {
    id: 1234,
    first: 'Thomas',
    last: 'Hardy',
    nickname: 'Tom',
    sayHi: function () {
        return 'Hi';
    }
};
// readonly 프로퍼티는 수정 불가능
thomas.first = 'sdfsdf';
var shoes = {
    name: 'Blue sneakers',
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
