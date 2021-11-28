// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
////////////////////
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// function newname(n){
//     n1.replaceAll('..', ' ')
//     replaceAll('---', ' ')
//     replaceAll('__', ' ');
// }
//
////
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function randomArray(lenght) {
//     let emptyArray = []
//     for (let i = 0 ; i < lenght ; i++) {
//         emptyArray.push(Math.round(Math.random() * 100));
//     }
//     return emptyArray;
// }
// console.log(randomArray(15));
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let array = randomArray(25);
// array.sort(a,b) => a - b ;
// array.sort(a,b) => b - a ;


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// function randomArray(lenght) {
//     let emptyArray = []
//     for (let i = 0 ; i < lenght ; i++) {
//         emptyArray.push(Math.round(Math.random() * 100));
//     }
//     return emptyArray.filter(value => value % 2 === 0);;
// }
// console.log(randomArray(25));



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// function randomArray(lenght) {
//     let emptyArray = []
//     for (let i = 0 ; i < lenght ; i++) {
//         emptyArray.push(Math.round(Math.random() * 100));
//     }
//     return emptyArray;
// }
//
// let array = randomArray(15);
// array.map(value => value+ ` `);
//
// console.log(array);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending' ) return arr.sort((a,b) => a-b);
//     if (direction === 'descending' ) return arr.sort((a,b) => b-a);
//
// }
// console.log(sortNums([4,78,6,45,32,1], 'descending' ));


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration));



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
