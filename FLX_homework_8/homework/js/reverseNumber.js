function reverseNum(num) {
    let result = 0;

    while (num !== 0) {
        result += (num % 10);
        result *= 10;
        num = Math.floor(num / 10);
    }
    return result / 10;
}
reverseNum(123);