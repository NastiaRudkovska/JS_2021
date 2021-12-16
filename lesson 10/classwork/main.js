//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

document.getElementById('button').onclick = function () {

let name = document.forms.one.name.value;
let surname = document.forms.one.surname.value;
let age = document.forms.two.age.value;
let occuoation = document.forms.two.occupation.value;
console.log(name, surname, age , occuoation);
}
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms[`three`];
btn2.addEventListener('click', function () {

    let rows = form.rows.value;
    let columns = form.columns.value;
    let content = form.content.value;

    console.log(rows, columns, content);

    let table = document.createElement(`table`)


    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; i < columns; i++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);

        }

        table.appendChild(tr);

    }
    document.body.appendChild(table);
})




//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


let bad = ['ванючка', 'чорт', 'бляха' , 'лишенько'];
let button = document.getElementById('btn3')

button.onclick =  function () {
    let words = document.getElementById('words').value;

    for (let b of bad) {
        if (b === words) {
            alert('Іди геть');

        }


        if (words) {
            alert('Привіт');
        }
    }
}