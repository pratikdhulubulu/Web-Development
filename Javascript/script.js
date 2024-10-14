// console.log("Hello World")
var v = 1;//globle scope
let a = 5;//local scope
let b = 6;
let c = "RAM"
console.log(a + b);

{
      let a = 66;
      console.log(a);

} 
console.log(a);

//primitive datatypes : 
let x = "ram";
let y = 22;
let z = 3.12;
const p = true;
let q = undefined;
let r = null;

//typeof
console.log(x, typeof (x)); 
console.log(y, typeof (y));
console.log(z, typeof (z));
console.log(p, typeof (p));
console.log(q, typeof (q));
console.log(r, typeof (r)); 
// type of null is object but it is primitive data type in js

let obj = { "name": "pratik", "job role": "SDE","is_handsome": true };
obj.salary = 1000000000;

// object elements values can have primitive, objects, function
console.log(obj);

// ** is a expo
let d = 5;
console.log(d ** 2);


//javascript conditional
// if ...else if ....else

// == checks only value "3"==3 is true
// === checks value and type "3"===3 is false

// && || !

// ternary operator cond? st1:st2;

//loops 
//for
for (let i = 0; i < 5; i++){
      console.log(i);
}

//for in
for (const key in obj) {
      const element = obj[key];
      console.log(key, element);
}

//for of
let s = "Pratik"
for (const c of s) {
      console.log(c);
}

//while
let i = 0;
while (i < 6) {
      console.log(i);
      i++;
}

//do while
let j = 0;
do {
      console.log("j", j);
      i++
} while (j > 5);


//functions
function print(name) {
      console.log("Hii " + name);
}
print("Divu");
print("pratik"); // calling the function

function sum(a, b) {
      return a + b;
}
let absum;
absum = sum(3, 5);

console.log("absum : ", absum);

function sumWithC(a, b, c = 9) {
      return a + b +c;
}

console.log(sumWithC(1, 2));
// if arguments are not passed then return value will be NaN = Not a Number


//Arrow function
// function as a variable , you can pass the function in turn in another function
const fun = (x) => {
      console.log(x + " I am X");
}

fun(3);
fun(45);

// generate random number
let ran = Math.random();
  

//Strings
let ss = "minestring";
//ss[index];

//ss.length
console.log(ss.length);

n = "mYnAMe";

// methods/ fun
console.log(n.toUpperCase());
console.log(n.toLowerCase());

//string slicing
console.log(n.slice(0, 3));//last exclusive

//replace
console.log(n.replace("m", "O"));

//concatination 
//escape sequence character \n \t
console.log(n + " Pratik");

//also with concat function
let mstring = "How??";
console.log(n.concat(" ", mstring, " I Dont Know")); 

// template literal / string interpolation
console.log(`My name is ${n} !!!`);

//trim : remove white spaces from start and end
let ystirng = " abs ";
console.log("A" + ystirng + "B");
console.log("A" + ystirng.trim() + "B");




//Arrays
// Collection of multiple data types
let arr = [1, 2, 6,5,7, 4, "A"];
console.log(arr);
console.log(arr.length);
//type of aaray is object
console.log(typeof (arr));

//to string
console.log(arr.toString());

//join
console.log(arr.join(" and "));

//push
//add element at the end of array
arr.push("old");
arr.push("New");

//pop
//remove element from the end of array
arr.pop();

//shift
//remove element from the start of array
arr.shift();

//unshift
//add element at the start of array
arr.unshift("old");

//delete
//delete element from array
//delete keyword is used to delete a property from an object
delete arr[1];

//concat arrays
//arr1 and arr2 will not change
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log(arr1);

//sort
//sort array in ascending order
console.log(arr.sort());
 
//sort with locale compare
//arr.sort((a, b) => a.localeCompare(b));

//sort with reverse
arr.sort((a, b) => b - a);

//splice
//remove element from array
//splice(start, deleteCount, item1, item2, item3)
arr.splice(1, 1, "old");
//splice(1, 1) means remove 1 element from index 1
//splice(1, 1, "old") means remove 1 element from index 1
//and
//insert "old" at index 1

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
//what happned in above code
//months array is not changed
//spliced array is created with new array elements
console.log(months);
console.log(spliced);

//difference between splice and toSpliced
//splice returns the removed elements
//toSpliced returns the removed elements and the array is modified


let array = [1, 4, 3, 6, 9];
array.forEach((value, index, array)=> {
      console.log(value, index, array);
});
//above code is used to iterate over array
//value is the current element
//index is the index of the current element
//array is the array itself
//forEach is a method of array

//forOf
//forOf is used to iterate over array
//forOf is used to iterate over object
//code
let ary = [1, 4, 3, 6, 9];
for (const value of ary) {
      console.log(value);
}  

//map
//map is used to create a new array
let arry = [1, 4, 3, 6, 9];
console.log("arry", arry);
let mapped = array.map(value => {return value ** 2;});
console.log("mapped",mapped);

//filter
//filter is used to create a new array
let barray = [1, 4, 3, 6, 9];
console.log("barray", barray);
let filtered = barray.filter(value => { return value > 4; });
console.log("filtered", filtered);

//seprate fun from the filter
function isGreater(value) {
      return value > 3;
}
let filtered2 = barray.filter(isGreater);
console.log("filtered2", filtered2);

//reduce
//reduce is used to reduce the array to a single value
let carray = [1, 4, 3, 6, 9];
console.log("carray", carray);
let reduced = carray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
});
console.log("reduced", reduced);

//from
//from is used to create a new array
//code
let darray = Array.from("DIVU");
console.log("darray", darray);
      
console.log(arr);

//DOM : Document Object Model
//DOM is a tree like structure of the document
//DOM is used to access and manipulate the elements of the document
//Document.title
//Document.body
//Document.head
//Document.querySelector
//Document.querySelectorAll
//Document.getElementById
//Document.getElementsByClassName
//Document.getElementsByTagName
//document.title = "Hello World";
//document.body.style.background = "red";
//document.body.style.color = "white";
//document.querySelector("#id").style.background = "red";
//document.querySelector(".class").style.background = "red";
//document.querySelector("tag").style.background = "red";
//document.querySelector("tag#id").style.background = "red";

//BOM
//BOM is used to access and manipulate the browser
//BOM is used to get the information about the browser
//BOM is used to get the information about the screen
//BOM is used to get the information about the navigator
//window
//window.location.href
//window.location.reload()
//window.history.back()
//window.history.forward()
//window.history.go()
//window.open()
//window.close()
//window.print()
//window.alert()
//window.console.log()
//window.console.error()
//window.console.warn()
//window.console.clear()

//Screen
//Screen is used to get the information about the screen
//Screen is used to get the information about the screen width and height
//Screen is used to get the information about the screen color depth
//screen.width
//screen.height

//navigator
//navigator is used to get the information about the browser
//navigator is used to get the information about the browser type and version
//navigator.appName
//navigator.appVersion
//navigator.appName = "Hello World";
//navigator.appVersion = "Hello World";
//navigator.userAgent
//navigator.language
//navigator.platform
//navigator.plugins
//navigator.cookieEnabled
//navigator.geolocation.getCurrentPosition()
//navigator.geolocation.watchPosition()
//navigator.geolocation.clearWatch()
//navigator.geolocation.clearWatch() is used to clear the watch position

