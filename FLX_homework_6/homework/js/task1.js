// Your code goes here
let a, b, c;
a = prompt('Enter first value', '');
b = prompt('Enter second value', '');
c = prompt('Enter third value', '');


if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('invalid input data');
} else {
    let x1, x2;
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        alert('not solution');
    } else if (d > 0) {
        x1 = ((-b) - Math.sqrt(d)) / (2 * a);
        x2 = ((-b) + Math.sqrt(d)) / (2 * a);
        alert('x1= ' + x1 + ' , ' + 'x2= ' + x2);
    } else {
        let x = (-b) / (2 * a);
        alert('x = ' + x);
    }
}


