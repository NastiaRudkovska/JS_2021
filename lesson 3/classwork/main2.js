// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbers = [2,17,13,6,22,31,45,66,100,-18] ;

// 1. перебрати його циклом while

// // let i = 0 ;
// while ( i < numbers.length) {
// console.log(numbers);
// i++
// }

//     2. перебрати його циклом for

// for (let i = 0 ; i<numbers.length; i++) {
//     const num= numbers [i];
//     console.log(num);
// }
//

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0 ;
// while ( i < numbers.length) {
//
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0 ; i<numbers.length; i++) {
//     const num= numbers [i];
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0 ;
// while ( i < numbers.length) {
//
//     if (i % 3 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0 ; i<numbers.length; i++) {
//     const num= numbers [i];
//     if (num % 3 === 0) {
//         console.log(num);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 3 === 0) {
        numbers[i] = "okten";
        console.log(numbers[i]);

    }
}
    console.log(numbers);

// 8. вивести масив в зворотньому порядку.

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
