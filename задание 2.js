function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return Object.assign({ isDomestic }, this);
}
const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};
 
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};
 
let obj1 = makeDomestic.bind(dog)(true);
console.log(obj1);
let obj2 = makeDomestic.call(bird, false);
console.log(obj2);
let obj3 = makeDomestic.apply(bird, [false]);
console.log(obj3);