// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array = [10, 18 , 33, 5, 8];
console.log(array);

let cars = ['audi' , 'bmw' , 'volkswagen' , 'tesla' , 'volvo'];
console.log(cars);

let mix = [8 , true , 'gold' , false , -5 ];
console.log(mix);


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

let empty = [];
empty [1] = true ;
empty [5] = 3 ;
empty [7] = 'hello';

console.log(empty);



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i=0; i < 10; i++) {
    document.write('<div> good morning </div>');
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let a=0; a < 10; a++) {
document.write(`<div>`);
document.write(`Hello` +  a);
document.write(`</div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let b=0;
while(b<20)
{
    document.write(`<h1>hey you</h1>`); b++

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let m=0;
while(m<20)
{
    document.write(`<h1>hey you  ${m}</h1>`); m++

}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers = [ 1, 5, 12, 43 , 23, 99, 2, 56, 3 , 10];
for( let i= 0; i < numbers.length; i++)
{
    const number = numbers[i];
    console.log(numbers[i]);
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let words = [ 'hello', 'my' , 'name' , 'is', 'Anastasia', 'so' , 'nice' , 'to' , 'meet' , 'you' ];
for( let  b= 0; b < words.length; b++)
{ console.log(`${words[b]}`);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let different = [ 'one', 1  , 'two' , true , 'three', false , 88 , 55 , 'hello' , 'bip__bip' ];
for( let c= 0; c < different.length; c++)
{ console.log(`${different[c]}`);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let income = [ 'masha', 55 , 'igor' , 284 , 12, true , 'iam' , false , 3 , true ] ;

for ( let x =0; x < income.length ; x++) {
    const incomeOne = income[x];
    if (typeof incomeOne === 'boolean') {
        console.log(incomeOne);
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let things = [ 'masha', 55 , 'igor' , 284 , 12, true , 'iam' , false , 3 , true ] ;

for ( let f =0; f < things.length ; f++) {
    const item = things[f];
    if (typeof item === 'number') {
        console.log(item);
    }
}



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let staff = [ 'masha', 55 , 'igor' , 284 , 12, true , 'iam' , false , 3 , true ] ;

for ( let v =0; v < staff.length ; v++) {
    const staffs = staff[v];
    if (typeof staffs === 'string') {
        console.log(staffs);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let blank = [];
blank [1] = true ;
blank [2] = 'me' ;
blank [3] = '4582' ;
blank [4] = false ;
blank [5] = 3 ;
blank [6] = 'spring' ;
blank [7] = 'summer';
blank [8] = 22 ;
blank [9] = true ;
blank [10] = 'verona' ;

console.log(blank[0]);
console.log(blank[1]);
console.log(blank[2]);
console.log(blank[3]);
console.log(blank[4]);
console.log(blank[4]);
console.log(blank[6]);
console.log(blank[7]);
console.log(blank[8]);
console.log(blank[9]);




// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let r = 0; r<10; r++) {
    console.log(r);
    document.write(`<div>`);
    document.write(`your number is ` +  r);
    document.write(`</div>`);

}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let y = 0; y<100; y++) {
    console.log(y);
    document.write(`<div>`);
    document.write(`lucky number ` +  y);
    document.write(`</div>`);

}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let k = 0; k<100; k += 2) {
    console.log(k);
    document.write(`<div>`);
    document.write(` ` +  k);
    document.write(`</div>`);

}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let q = 0; q<100; q++) {
    if (q%2 === 0 && q !== 0) {
console.log(q);
        document.write(`<div>`);
        document.write(` ` +  q);
        document.write(`</div>`);
    }

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let t = 0; t<100; t++) {
    if (t%3 === 0 && t !== 0) {
        console.log(t);
        document.write(`<div>`);
        document.write(` ` +  t);
        document.write(`</div>`);
    }

}