// let person = {
//     name: 'abduqahhor',
//     age: 18,
//     job: 'dasturchi',
//     address: function (x) {
//         return x + this.age
//     }
// };

// console.log(person.address(2005));

// console.log(person);

// function example(x, y, z) {
//     console.log(`Foydalanilgan muddati: ${x - this.year} yil`);
//     console.log(`Barcha balonlar soni: ${y} ta`);
//     console.log(`Yo'lovchilar soni: ${z} ta`);
//     // console.log(this.name);
// };

// const car = {
//     name: 'BMW',
//     year: '2020',
//     metod: example
// }

// const car2 = {
//     name: 'Mercendez',
//     year: '2000',
// }

// car2.surname = "Benz";

// console.log(car2);

// car.metod.bind(car2)(2023);
// car.metod.call(car2, 2023, 4, 2);
// car.metod.apply(car2, [2023, 4, 2]);

// Object.prototype.handmadePrototype = function () {
//     console.log(this.name);
// }

// Prototype
// const vegetable = {
//     name: 'pumpkin',
//     kg: '3',
//     umumiy: function () {
//         console.log(this.name, this.kg);
//     }
// }

// const fruits = {
//     name: 'apple',
//     gr: '200'
// }

// fruits.handmadePrototype();

// console.log(fruits);

// const vegetable2 = Object.create(vegetable);

// vegetable.umumiy();

// console.log(vegetable);

// let txt = 'HELLO WORLD';

// let txt = new String('hello world');
// let num = new Number(123);

// console.log(num);



// Object.prototype.stringaOtkaz = function (value) {
//     return value + ''
// };


// let num = 123;

// let a = stringaOtkaz(true);

// console.log(a);



// const allData = [
//     {
//         name: 'elmurod',
//         age: 20,
//         email: 'elmurod@gmail.com'
//     },
//     {
//         name: 'feruzbek',
//         age: 15,
//         email: 'feruzbek@gmail.com'
//     },
//     {
//         name: 'islomjon',
//         age: 10,
//         email: 'islomjon@gmail.com'
//     },
//     {
//         name: 'asilbek',
//         age: 25,
//         email: 'asilbek@gmail.com'
//     },
// ]