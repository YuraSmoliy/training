class Animal{
    constructor(name, age, type, weight){
        this.name = name;
        this.type = type;
        this.age = age;
        this.weight = weight;
    }
    
    jump(){
        console.log(`${this.type[0].toUpperCase()} ${this.name} is jumping`);
    }
    run(){
        console.log(`${this.type[0].toUpperCase()} ${this.name} is running`);
    }
    eat(){
        console.log(`${this.type[0].toUpperCase()} ${this.name} is eating`);
    }

}

class Cat extends Animal{
    constructor(name, age, weight){
        super(name, age, 'Cat', weight)
    }
    meow(){console.log(`Cat ${this.name} is meowing`)}
}

class Dog extends Animal{
    constructor(name, age, weight){
        super(name, age, 'Dog', weight)
    }
    wow(){console.log(`Dog ${this.name} is wowing`)}
}

let catTom = new Cat("Tom", 5, 4);
let dogBobic = new Dog("Bobic", 6, 7);

catTom.meow()
dogBobic.wow()
