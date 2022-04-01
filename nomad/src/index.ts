const sayHi = (name:string, age:number, gender:string):string /*what i am going to return? void? string? something else?*/ => {
    return `Hello, ${name}, you are ${age}, you are ${gender}!`;
};

console.log(sayHi("Wille", 13, "male"));

export {};
