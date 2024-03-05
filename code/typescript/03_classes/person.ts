export class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}