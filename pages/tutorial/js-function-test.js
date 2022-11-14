const { getUser } = require('./function')

console.log(getUser());
console.log(getUser({
    first: "Hazlan",
    last: "Qodrey"
}));