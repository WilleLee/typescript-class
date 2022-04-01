## why using TypeScript?

typescript
자바스크립트는 규칙에 있어서의 flexibility 때문에 유명한 것
하지만 이것이 큰 프로젝트 등에서는 많은 버그를 만드는 원인이 될 수 있음.
---> here we use TypeScript!

const name = 'Wille',
    age = 13,
    gender = 'male';

const sayHi = (name, age, gender?) => {
    console.log(`Hello, ${name}, you are ${age}, you are ${gender}.`);
};

sayHi(name, age);

export {};