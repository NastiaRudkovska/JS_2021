// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// let mainDiv = document.getElementsByClassName('main') [0];
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             postDiv.innerHTML = `
//                          <h3>ID: ${item.id}</h3>
//                          <h4>Title: ${item.title}</h4>
//                          <h5>${item.body}</h5>
//                         ` ;
//
//
//           mainDiv.appendChild(postDiv);
//           document.body.appendChild(mainDiv);
//
//         }
//
//         });






//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let mainDiv = document.getElementsByClassName('main') [0];
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment')

            let id = document.createElement('div');
            id.innerText = 'id - ' + item.id;

            let name = document.createElement('div');
            name.innerText = 'name - ' + item.name;

            let email = document.createElement('div');
            email.innerText = 'e-mail - ' + item.email;

            let body = document.createElement('p');
            body.innerText = 'comment :   '+ item.body;


          commentDiv.append(id ,name , email , body);
          mainDiv.appendChild(commentDiv);

        }

        });
