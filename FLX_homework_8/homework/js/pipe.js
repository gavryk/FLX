function addOne(x) {
    return x + 1;
}
function pipe(num, ...callback) {
    for (let i = 0; i < callback.length; i++) {
        num = callback[i](num);
    }
    return num;
}
pipe(1, addOne, addOne, addOne);