function test(x, y) {
    return ((x === 50) || (y === 50)) || (x + y === 50);
}
var test1 = test(50, 50);
console.log(test1);

test(25, 25);
test(25, 35);