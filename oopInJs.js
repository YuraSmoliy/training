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

function Car(model, producer, max_speed, weight){
    this.model = model,
    this.producer = producer,
    this.max_speed = max_speed,
    this.weight = weight
}
Car.prototype.drive=function (){
    console.log(`The car ${this.model} is driving`)
}

function SportCar(model, producer, max_speed, weight, acceleration){
    Car.call(this,model, producer, max_speed, weight)
    this.acceleration = acceleration
}
SportCar.prototype = Object(Car.prototype)
SportCar.prototype.constructor = SportCar


const myCar = new Car('911', 'Porshe', 280, 2500, 9.5)
myCar.drive()
console.log(myCar.constructor)




