// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let Maintext = document.getElementById(`text`);
// let button = document.getElementById(`button`);
// document.getElementById('button').style.width = '100px';
// document.getElementById('button').style.height = '40px';
// document.getElementById('button').style.backgroundColor = 'blue';
// button.onclick = function () {
//
//     document.getElementById(`text`).style.display = 'none';
//     document.getElementById('button').style.backgroundColor = 'green';
// }


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById(`button`);
// document.getElementById('button').style.width = '100px';
// document.getElementById('button').style.height = '40px';
// document.getElementById('button').style.backgroundColor = 'blue';
// button.onclick = function () {
//
//     document.getElementById(`button`).style.display = 'none';
//
// }


//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//


// let checkage = document.getElementById('button2');
// checkage.onclick = function () {
//       let age =   document.getElementById('age').value;
//         if (age=>18) {
//             console.log('Hello');
//         } else if (+age < 18) {
//             console.log('You are under 18, bye');
//         } else {
//             console.log('Error');
//         }
// }




// - Создайте меню, которое раскрывается/сворачивается при клике
//

// let menu = document.querySelector('.menu');
// let main = menu.querySelector('.main');
//
// main.onclick = function () {
//     menu.classList.toggle('hidden');
// };





//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

let comments = [ {title : 'Anastasia', body:'Customer Opertion Specialist'},
               {title : 'Oleksandr', body:'Media buyer'},
               {title : 'Valeria', body:'UI/UX designer'},
               {title : 'Serhii', body:'Crypto Analyst'} ]

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

for (const com of comments) {
    let div = document.createElement('div');
    div.classList.add('comment')
    div.style.backgroundColor = 'pink';
    div.style.textAlign = 'center';

    let name = document.createElement('h1');
    name.innerText = com.title;
    let occupation = document.createElement('div');
    occupation.innerText = com.body;
    let button = document.createElement('button');
    button.innerText = 'hide';
    button.style.backgroundColor = 'red';

    button.onclick= function () {
        occupation.classList.toggle('hide');
    }

    div.append(name  , occupation , button );

    document.body.appendChild(div);



}


