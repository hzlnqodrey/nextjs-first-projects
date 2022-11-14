// function
function multiply(a: number, b: number): number {
    return a * b
}

export default multiply;

// export const
export const addStrings = (str1: string, str2: string): string => 
    `${str1} ${str2}`

// union data type
export const format = (title: string, param: string | number): string => 
    `${title} ${param}`

// void function
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
    
}

// Promise function
export const fetchData = (url: string): Promise<string> => 
    Promise.resolve(`Data from ${url}`)

// Rest function
function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}

// Miscocenption about TypeScript => TypeChecking at Compile time not in the runtime env
export function getUser(user: { first: string, last: string}): string {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}