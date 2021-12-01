//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

// function car(model,producent,year,maxspeed,volume)
//
// {
// this.model = model;
// this.producent = producent;
// this.year = year;
// this.maxspeed = maxspeed;
// this.volume = volume;
// this.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
// }
// this.info = function () {
//     console.log(`model - ${this.model} , producent - ${this.producent}, year - ${this.year}, maximum speed - ${this.maxspeed}, volume - ${this.volume}`)}
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxspeed = newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue ;
//     }
//
//     this.addDriver = function (driver) {
//     this.driver = driver;
//     }
//
// }





// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class CarC {
//     constructor(model, producent, year, maxspeed, volume) {
//         this.model = model;
//         this.producent = producent;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//
//     info () {
//         console.log(`model - ${this.model} , producent - ${this.producent}, year - ${this.year}, maximum speed - ${this.maxspeed}, volume - ${this.volume}`)
//     }
//
//
//     increaseMaxSpeed =  (newSpeed) {
//         this.maxspeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }



//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//
// class Princess {
//     constructor(name, age , size ) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//
//
// }
//
// const Princesslist = [
//        new Princess('Cinderella' , 18 , 36),
//         new Princess('Zhasmin' , 21 , 38),
//          new Princess('Rapunzel' , 19 , 35),
//          new Princess('Elza' , 23 , 39),
//          new Princess('Pokahontas' , 17 , 34),
//         new Princess('Ariel' , 19 , 32),
//        new  Princess('Anastasia' , 24 , 37),
//        new Princess('ShowWhite' , 22 , 40),
//         new Princess('Bell' , 16 , 41),
//         new Princess('Mulan' , 25 , 33),
//
//
//     ];
//
// console.log(Princesslist);
//
//
// class Prince {
//     constructor(name, age , shoe ) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
//
//
// }
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// const Princelist = [
//     new Prince('Erik' , 22 , 32),
//     new Prince('Navin' , 25 , 39),
//     new Prince('Phillip' , 25 , 40),
//     new Prince('Aladin' , 23 , 38),
//     new Prince('Li Shang' , 28 , 33),
//     new Prince('Adam' , 22 , 41),
//     new  Prince('John' , 24 , 34),
//     new Prince('Judgyn' , 22 , 35),
//     new Prince('Aleksandr' , 27 , 37),
//     new Prince('Charming' , 25 , 36),
//
//
// ];
//
// console.log(Princelist);



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


// const couple = (Princesslist, Prince) => {
//     for (const item of Princesslist) {
//         if (item.size === Prince.shoe) {
//             return `your couple: ${item.name}`
//         }
//     }
// };
// console.log(couple(Princesslist, Prince))



//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// const newPrincess = Princesslist.find((item) => item.size === Prince.shoe);
// console.log(emptyPrincess);