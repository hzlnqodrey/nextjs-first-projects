/* eslint-disable import/no-anonymous-default-export */
// string
let userName: string = "Hazlan Qodri";

// number
let myNumber: number = 10;

// regex
let myRegex: RegExp = /[a-zA-Z0-9]/gm;

// array of strings
const myName: string[] = userName.split(" ") // ["Q", "o", "d", "r", "i"];
console.log(myName);

// generic array types
const myValues: Array<number> = [1, 2, 3] // emang dibiarin error

// INTERFACE
interface Person {
    first: string;
    second: string;
    age: number;
    cool: boolean;
}

// object
const myPerson: Person = {
    first: "Hazlan",
    second: "Qodri",
    age: 23,
    cool: true
};

// Record
const IDs: Record<number, string> = {
    10: "a",
    20: "b"
}
IDs[30] = "c"

// Conditional
if ( IDs[30] === "D" ) {

}

// Loop
for( let i = 0; i < 10; i++ ) {
    console.log(i);
}

// forEach
[1, "kamu", 2, 3, "saya"].forEach((v) => console.log(v));

// Map
const out: number[] = [4, 5, 6].map((v) => v * 10)
console.log(out)

