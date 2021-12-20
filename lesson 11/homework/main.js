// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//

let form = document.forms.form;

form.onsubmit = function () {
    let name = document.forms.form.name.value;
    let age = document.forms.form.age.value;
    localStorage.setItem('person', JSON.stringify({name , age}))
}








//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let newForm = document.forms.form2;
newForm.style.marginTop = '10px';

newForm.onsubmit = function () {
    let  model = document.forms.form2.model.value ;
    let  type = document.forms.form2.type.value ;
    let  volume = document.forms.form2.volume.value ;

    let auto = {model: model , type: type , volume: volume};
    let cars = JSON.parse(localStorage.getItem(`cars`)) || [];
    console.log(cars);
    cars.push(auto);
    localStorage.setItem(`cars`,JSON.stringify(cars));
}