// string
let userName: string = "Qodri";

// number
let myNumber: number = 10;

// regex
let myRegex: RegExp = /[a-zA-Z0-9]/gm;

// array of strings
const myName: string[] = userName.split(" ") // ["Q", "o", "d", "r", "i"];
console.log(myName);

// generic array types
const myValues: Array<number> = [1, 2, 3, "saya"] // emang dibiarin error

// object

const myPerson: {
    first: string;
    second: string;
    age: number;
} = {
    first: "Hazlan",
    second: "Qodri",
    age: 23
};

export default { myNumber, myRegex };

