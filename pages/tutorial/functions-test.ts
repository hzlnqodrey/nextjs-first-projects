import multiply, { addStrings, getUser } from './functions'

console.log(multiply(202, 30));
console.log(multiply(100, 500));

console.log(addStrings("a", "b"))
console.log(addStrings("a", 2))
console.log(addStrings("a"))

console.log(getUser({
    first: "Hazlan",
    last: "Qodrey"
}));