// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle (a,b) {
//     return a*b;
// }
// console.log(rectangle(5, 7))



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r) {
//     let radius = r ** 2;
//     let circle__result = 3.14 * radius;
//     return circle__result;
// }
// console.log(circle(7))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function float (h, r)  {
//     return(3.14*r*r*h);
//
// }
// console.log(float(8,7))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['spring','summer',20,21, true];
// function accept (arr) {
//
//     for (let i = 0; i < array.length; i++) {
//        console.log(array[i])
//     }
// }
// accept(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf (text) {
//     document.write(`<p> ${text}</p>`);
// }
//
// paragraf(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function makeul (text) {
//     document.write(`<ul>`);
//
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//
//     document.write(`</ul>`);
//
// }
// makeul(`you look great today`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)\

// function ulul (text, quantity) {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// ulul('Monday', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let basic = ['bear', 34, true, 'pig', 55 , false ];
// function list (item){
//     document.write(`<ul>`)
//         for (let i = 0; i < item.length; i++) {
//             document.write(`<li>${item[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// list(basic);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let studentslist = [
// {id: 1, name: 'Anastasia', age: 24},
// {id: 2, name: 'Oleksandr', age: 26},
// {id: 3, name: 'Olena', age: 23},
// {id: 4, name: 'Dmytro', age: 25},
// {id: 5, name: 'Danylo', age: 30}
// ];
// function list(student) {
//     for (const item of student) {
//         document.write(`<div>${item.id}.${item.name} - ${item.age}</div>`);
//     }
// }
// list(studentslist);