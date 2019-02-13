/*
- Write a function, deepEqual, that takes two values and returns true only if 
- they are the same value or are objects with the same properties whose values 
- are also equal when compared with a recursive call to deepEqual.
- To find out whether to compare two things by identity (use the === operator for that)
- or by looking at their properties, you can use the typeof operator.
- If it produces "object" for both values, you should do a deep comparison. 
- But you have to take one silly exception into account: by a historical
- accident, typeof null also produces "object".
*/

function deepEqual(x, y) {
    if(typeof x == "object" && x != null && typeof y == "object" && y != null) {
        var xProps = Object.getOwnPropertyNames(x);
        var yProps = Object.getOwnPropertyNames(y);

        if(xProps.length != yProps.length) {
            return false;
        } 

        for(var i = 0; i < xProps.length; i++) {
            var propName = xProps[i];

            if(x.propName != y.propName) {
                return false;
            } else {
                return deepEqual(x[propName], y[propName]);
            }
        }
    } else if(x === y) {
        return true;
    } else {
        return false;
    }
};



var object1 = {
    value: 1
};
var object2 = {
    value: 1,
    animal: "dog"
};
var object3 = {
    value: 1
};
var object4 = {
    value: 2
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); //true
console.log(deepEqual(obj, {here: 1, object: 2})); //false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); //true


console.log(deepEqual(1, 1)); //true
console.log(deepEqual(1, 2)); //false
console.log(deepEqual(object1, null)); //false
console.log(deepEqual(object1, object2)); //false
console.log(deepEqual(object1, object3)); //true
console.log(deepEqual(object1, object4)); //false
console.log(deepEqual(1)); //false
