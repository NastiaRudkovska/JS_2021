// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangle = (a,b) => a * b ;
//
// console.log(rectangle(8,10));



// - створити функцію яка обчислює та повертає площу кола
// let circle= (r) => 3.14 * r **2 ;
//
// console.log(circle(7))


// - створити функцію яка обчислює та повертає площу циліндру

// let float = (h, r) => 2 * 3.14 * r* h ;
//
// console.log(float(3,9))


// - створити функцію яка приймає масив та виводить кожен його елемент



// let array = ['spring','summer',20,21, true];
// let accept = (array) => {
//
//     for (let i = 0; i < array.length; i++) {
//        console.log(array[i])
//     }
// }
// accept(array);
//



// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент


// let paragraf =  (text) => {
//     document.write(`<p> ${text}</p>`);
// }
//
// paragraf(`hello`);



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let create = (text) >= {
//     document.write(`<ul>`),
//
//     document.write(`<li>${text}</li>`),
//     document.write(`<li>${text}</li>`),
//     document.write(`<li>${text}</li>`),
//
//     document.write(`</ul>`),
//
// }
// create(`you look great today`);


// let create = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// create('you look great today');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulul = (text, quantity) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//     document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// ulul('Monday', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let elements = ['mini', 34, false, 'maxi', 32 , true ];
// let list = (item) => {
//     document.write(`<ul>`)
//         for (let i = 0; i < item.length; i++) {
//             document.write(`<li>${item[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// list(elements);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let productlist = [
// {id: 1, name: 'cake', price: 88},
// {id: 2, name: 'orange', price: 6},
// {id: 3, name: 'rice', price: 23},
// {id: 4, name: 'meat', price: 120},
// {id: 5, name: 'banana', price: 12}
// ];
// let list = (product) => {
//     for (const item of product) {
//         document.write(`<div>${item.id}.${item.name} - ${item.price}</div>`);
//     }
// }
// list(productlist);