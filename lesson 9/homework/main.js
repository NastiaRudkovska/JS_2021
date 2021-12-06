// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div')
block.classList.add('wrap' , 'collapse', 'alpha' , 'beta')
block.style.backgroundColor = 'blue'
block.style.color = 'red'
block.style.fontSize = '25px'
block.innerText = 'Have a nice day!!';
document.body.appendChild(block);
let block__block = block.cloneNode(true);
document.body.appendChild(block__block);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// ????? розгубилась із цим завданням

let array = ['Main','Products','About us','Contacts']
const list = document.getElementsByClassName('menu') [0];
for (let item of array) {
    item = document.createElement('li')
    list.innerText = item;
    list.appendChild(item);
}



//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = `${course.title}  - duration: ${course.monthDuration}`
//     document.body.appendChild(div);
//     div.style.backgroundColor = 'green';
// }



//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item')
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description')
    h1.innerText = `${course.title}`;
    p.innerText = `${course.monthDuration}`;
    div.append(h1 , p );
    document.body.appendChild(div);
    div.style.backgroundColor = 'green';
    div.style.fontSize = '10px';


        }