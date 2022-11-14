// function
function multiply(a: number, b: number): number {
    return a * b
}

export default multiply;

// export const
export const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`

// union data type
export const format = (title: string, param: string | number): string => `${title} ${param}`

// void function
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
    
}