const data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

// Task 1 find type.
function findType() {
    let types = [];
    for(let i = 0; i < arguments.length; i++) {
        types.push(typeof(arguments[i]));
    }
    return types;
}
console.log(findType('alo', 5, true, undefined, null));

// task 2 forEach
function executeforEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
executeforEach([1, 2, 3], el => console.log(el));

// Task 3, el plus 3
function mapArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, el => {
        newArr.push(callback(el));
    });
    return newArr;
}
console.log(mapArray([2, 5, 6], el => el + 3));

// Task 4
function filterArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, el => {
        if(callback(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}
console.log(filterArray([2, 5, 1, 8], el => el > 3));

// Task 5
function getAmountOfAdultPeople(arr) {
    let ageArr = [];
    filterArray(arr, user => {
      if(user.age > 18) {
          ageArr.push(user);
      }
    });
    return ageArr.length;
}

console.log(getAmountOfAdultPeople(data));

//Task 6
function getGreenAdultBananaLovers(arr) {
    let filterUser = [];
    filterArray(arr, user => {
        if(user.age > 18 && user.favoriteFruit === 'banana' && user.eyeColor === 'green') {
            filterUser.push(user);
        }
    });
    return mapArray(filterUser, user => console.log(user.name));
}
getGreenAdultBananaLovers(data);

//Task 7
function keys(obj) {
    let keyArr = [];
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            keyArr.push(key);
        }
    }
    return keyArr;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

//task 8
function values(obj) {
    let valueArr = [];
    for (let value in obj) {
        if(obj.hasOwnProperty(value)) {
            valueArr.push(obj[value]);
        }
    }
    return valueArr;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

//task 9
function showFormattedDate(date) {
    return `Date: ${date.getDate()} of ${date.toLocaleString('en-US', { month: 'short' })}, ${date.getFullYear()}`
}

console.log(showFormattedDate(new Date('2019-02-27T01:10:00')));

// Task 10
function isEvenYear(date) {
    let year = date.getFullYear();
    return year % 2 === 0;
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00')));

//Task 11
function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    return month % 2 === 0;
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));