/* eslint-disable import/no-anonymous-default-export */
// string
var userName = "Hazlan Qodri";
// number
var myNumber = 10;
// regex
var myRegex = /[a-zA-Z0-9]/gm;
// array of strings
var myName = userName.split(" "); // ["Q", "o", "d", "r", "i"];
console.log(myName);
// generic array types
var myValues = [1, 2, 3]; // emang dibiarin error
// object
var myPerson = {
    first: "Hazlan",
    second: "Qodri",
    age: 23,
    cool: true
};
// Record
var IDs = {
    10: "a",
    20: "b"
};
IDs[30] = "c";
// Conditional
if (IDs[30] === "D") {
}
// Loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// forEach
[1, "kamu", 2, 3, "saya"].forEach(function (v) { return console.log(v); });
// Map
var out = [4, 5, 6].map(function (v) { return "".concat(v * 10); });
console.log(out);
