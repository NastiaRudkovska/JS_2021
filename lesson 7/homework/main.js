// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//

// function User(id, name, surname , email, phone) {
//     this.id = id ;
//     this.name = name ;
//     this.surname = surname;
//     this.email = email ;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let Users = [
//     new User(121, 'Anastsia' , 'Rudkovska' , 'anrar@ukr.net' , 10264728917 ),
//     new User(42, 'Serhii' , 'Popov' , 'popopopov@gmail.com' , 10264452835 ),
//     new User(12, 'Oleksiy' , 'Hordiuk' , 'hordhord@ukr.net' , 13729146380 ) ,
//     new User(100, 'Galyna' , 'Krasiuk' , 'kras234@ukr.net' , 11528394680 ) ,
//     new User(1, 'Artur' , 'Kurma' , 'blavith@onet.pl' , 10263527280 ),
//     new User(22, 'Olga' , 'Folga' , 'folgaF45@mail.ru' , 10236228917 ),
//     new User(5, 'Valentyna' , 'Nytina' , 'nnnnr54rf@gmail.com' , 10264788815 ),
//     new User(18, 'Roman' , 'Avram' , 'romeo8@icloud.com' , 134564728913 ),
//     new User(10, 'Oleksandr' , 'Chichali' , 'chichachsk@ukr.net' , 19999728919 ),
//    new  User(3, 'Vadym' , 'Cherchuk' , 'vadymiam@gmail.com' , 136271828910 ),
// ]

// console.log(Users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

// let filter = Users.filter(value => value.id % 2 === 0);
//
// console.log(filter);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = Users.sort((a,b) => a.id - b.id);
//
// console.log(sort);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }


// створити пустий масив, наповнити його 10 об'єктами Client

// let  Clients = [
//     new Client(121, 'Anastsia' , 'Rudkovska' , 'anrar@ukr.net' , 10264728917, ['tomato' , 'juice' , 'ketchup']),
//     new Client(42, 'Serhii' , 'Popov' , 'popopopov@gmail.com' , 10264452835, ['orange' , 'apple' , 'carrot', 'pie'] ),
//     new Client(12, 'Oleksiy' , 'Hordiuk' , 'hordhord@ukr.net' , 13729146380, ['cheese' , 'water'] ) ,
//     new Client(100, 'Galyna' , 'Krasiuk' , 'kras234@ukr.net' , 11528394680, ['tomato']) ,
//     new Client(1, 'Artur' , 'Kurma' , 'blavith@onet.pl' , 10263527280, ['tomato' , 'juice' , 'ketchup', 'cheese' , 'water']),
//     new Client(22, 'Olga' , 'Folga' , 'folgaF45@mail.ru' , 10236228917, ['soup' , 'wine','becon' , 'water','tomato', 'kiwi' ,'rucola'] ),
//     new Client(5, 'Valentyna' , 'Nytina' , 'nnnnr54rf@gmail.com' , 10264788815, ['wine','becon', 'tomato' , 'juice' , 'ketchup'] ),
//     new Client(18, 'Roman' , 'Avram' , 'romeo8@icloud.com' , 134564728913, ['juice']),
//     new Client(10, 'Oleksandr' , 'Chichali' , 'chichachsk@ukr.net' , 19999728919, ['apple' , 'juice' , 'rucola', 'cheese'] ),
//    new  Client(3, 'Vadym' , 'Cherchuk' , 'vadymiam@gmail.com' , 136271828910,['banana' , 'coconut' , 'watermelon'] ),
// ]
//
// console.log(Clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(Clients.sort((a, b) => a.order.length - b.order.length));
