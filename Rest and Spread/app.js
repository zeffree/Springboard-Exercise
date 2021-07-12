// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter(num => num % 2 ===0);


// function findMin(...args){
//     min = args[0];
//     return args.reduce(function(acc,v){
//         if(v<acc){
//             acc = v;
//         }
//         return acc;
//     },min)
// }

const findMin = (...args) => Math.min(...args);

console.log(findMin(1,4,12,-3)); // -3
console.log(findMin(1,-1)) // -1
console.log(findMin(3,1)) // 1

const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr,...args) => [...arr, ...args.map(v => v*2)]

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]




/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let index = Math.floor(items.length * Math.random());
    return [...items.slice(0,index), ...items.slice(index+1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj.key;
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1,...obj2})

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj.key = val;
    return newObj;
}
