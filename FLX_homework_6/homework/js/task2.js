let price = prompt('Enter your price', '');
let discount = prompt('Enter your discount', '');
let save,res;

if (discount > 99 || discount < 0 || isNaN(discount)) {
    alert('Invalid input data');
} else if (price <= 0 || isNaN(price) || price >= 9999999 || price === '') {
    alert('Invalid data');
} else {
    let calcSave = price / 100 * discount;
    let calcRes = price - calcSave;
    res = Math.floor(calcRes * 100) / 100;
    save = Math.floor(calcSave * 100) / 100;
    alert(
        'Price without discount: ' + price +
        '\nDiscount: ' + discount + '%' +
        '\nPrice with discount: ' + res +
        '\nSaved: ' + save
    );
}



