//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minimum (one,two,three) {
//     if (one < two && one < three) {
//         document.write(one);
//         } else if
//     (two<three && two<one) {
//             document.write(two);
//         }
//     else{
//         document.write(three);
//     }
//     }
//     minimum(55,43,19);




// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maximum (a,b,c) {
//     if (a > b && a > c) {
//         document.write(a);
//         } else if
//     (b>c && b>a) {
//             document.write(b);
//         }
//     else{
//         document.write(c);
//     }
//     }
//     maximum(123,333,2);


// - створити функцію яка повертає найбільше число з масиву

// let numbers = [10,999,43,1025,33];
// function maxNumber (array)
// {
//     let max = array[0];
//     for (const element of array) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`${maxNumber(numbers)}`)



// - створити функцію яка повертає найменьше число з масиву
// let numbers = [3332,2437,4026,1025,3300];
// function minNumber (num)
// {
//     let min = num[0];
//     for (const element of num) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`${minNumber(numbers)}`)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let list = [88,10,34,5];
// function suma (numbers) {
//     let result = 0;
//     for (const num of numbers) {
//         result = result + num ;
//     }
//     return result;
//
// }
//
// document.write(suma(list));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let list = [100,28,2,18];
//
// function medium (num){
//     let average = 0;
//     for (const item of num) {
//         average = item + average;
//     }
//     return average/list.length;
// }
// document.write(medium(list))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function MinMaxValues (nums) {
//  let min = nums [0];
//  let max = nums [0];
//  for (const num of nums) {
//      if (num > max){
//          max = num;
//      }
//
//      if (num < min) {
//          min = num;
//      }
//  }
//  console.log(max);
//  return min;
//
// }
// MinMaxValues(56,44,78,8,990,12,3);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(limit,length) {
//     let arr = [];
//     for (let i=0; i < length; i++){
//         arr.push(Math.round(Math.random() * length));
//     }
//     return arr;
//
// }
// document.write(random(15,8));




// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomlimit(num , limit) {
//     for (let i= 0 ; i < limit ; i++){
//         num[i] = Math.round(Math.random() + limit);
//     }
//     return num;
// }
// document.write(randomlimit(23,15));



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse (num) {
//     let newNum = [] ;
//     for (let i = num.length - 1, ri = 0 ; i >= 0; i-- , ri++) {
//         newNum[ri] = newNum[i];
//     }
//     return newNum;
// }
// console.log(reverse(3,8,9,34))
