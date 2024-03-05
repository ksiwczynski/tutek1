import { Person } from "./person";
import * as Animals from "./animals";

let person = new Person("Janusz");
person.sayHello();

let dog = new Animals.Dog();
dog.sayHello();

let cat = new Animals.Cat();
cat.sayHello();