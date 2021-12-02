// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let main = document.getElementById('main_header');
main.innerText = 'september-2021';

// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
ul[0].style.width = `400px` ;


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elements = document.getElementsByClassName('linkList');
for ( const  element of elements) {
    element.style.width = `50%` ;
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listText = document.getElementsByClassName(`listElement2`);
console.log(listText.innerText);


// e) отримує всі елементи li та змінює ім колір фону на сірий
let elementsLi = document.getElementsByTagName(`li`);
for(const elementLi of elementsLi) {
    elementLi.style.background = 'grey';
}


// f) отримує всі елементи 'a' та додає їм клас anchor

let newClass = document.getElementsByTagName(`a`);
for (const newCla of newClass ) {
    newCla.classList.add('anchor');
    console.log(newCla);
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aClass = document.getElementsByTagName(`a`);
for (const aCla of aClass ) {
    if (aCla.innerText === `link3`) {
        aCla.style.fontSize = `40px`;
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let elementsX = document.getElementsByTagName('a');
for (let elementX of elementsX) {
    let hello = elementX.innerText;
    elementX.classList.add(`element_${hello}`)
}



// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let headers = document.getElementsByClassName(`sub-header`);
// for (header of headers) {
//     header.style.background = prompt('background color');
// }



// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let headers = document.getElementsByClassName(`sub-header`);
for (header of headers) {
    if (header.innerText === `content 2 segment`) {
        header.style.color = prompt('text color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let text = document.getElementsByClassName('content_1');
text.innerText = prompt('write something');

// l) отримати елементи p та змінити їм padding на 20px
let paragraph = document.getElementsByTagName(`p`);

for (p of paragraph) {
    p.style.padding = `20px`;
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let list = document.getElementsByClassName(`text2`);
list.innerText = `september-2021`;