// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log( str.length);
//
// let str2 = `lorem ipsum`;
// console.log( str2.length);
//
// let str3 = "javascript is cool";
// console.log( str3.length);
//
//
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
//
// let toUpperCase1 = str2.toUpperCase();
// console.log(toUpperCase1);
//
// let toUpperCase2 = str3.toUpperCase();
// console.log(toUpperCase2);
//
//
//
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let  toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
//
// let  toLowerCase1 = str2.toLowerCase();
// console.log(toLowerCase1);
//
// let  toLowerCase2 = str3.toLowerCase();
// console.log(toLowerCase2);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// const stringToarray = (str) =>
// {
//     return str.split(' ');
// }
// let array = stringToarray(str);
// console.log(array);




//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => {return str.substr(0, length);
// };
//
// console.log(delete_characters(str, 7));



//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// function  insert_dash(str) {
//     return str.replaceAll(' ','-').toUpperCase();
// }
//
// console.log(insert_dash(str));



//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//

// let str = 'such a beautiful  day';
//
// function firstUpper(stc) {
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log(firstUpper(str));

//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'such a beautiful  day';
// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
//
// console.log(capitalize(str));