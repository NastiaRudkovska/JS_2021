// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

let idcontent = document.getElementById('content');
console.log(idcontent.innerText);

// -- отримує текст з блоку з id "rules"

let idrules = document.getElementById('rules');
console.log(idrules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

let = textchange = document.getElementById('content');
 textchange.innerText = `Каждое слово, которое вы прочитаете, бессмысленно — вы просто тратите напрасно очередную частичку своей жизни…`;


// -- замініть текст параграфа з id 'rules' на будь-який інший

let = paragraphchange = document.getElementById('rules');
paragraphchange.innerText = `Когда у тебя во рту пистолет, и ты сжимаешь зубами его ствол, говорить удается только одними гласными.`;


// -- змініть кожному елементу колір фону на червоний

let elements = document.body.children;
for(const element of elements) {
    element.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let items = document.body.children;
for(const item of items) {
    item.style.background = 'blue';
}



// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let classitem = document.getElementById('rules');
console.log(classitem.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let rules = document.getElementsByClassName('fc_rules');
for (const rule of rules) {
    rule.style.color = 'red'
}


