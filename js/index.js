// all js code here

let formallclass = document.querySelector('#formAllClass');
let forms = formallclass.querySelector('#submits');
let ids = formallclass.querySelector('.idFi');
let dates = formallclass.querySelector('.datessT');
let selects = formallclass.querySelector('#selects');
let names = formallclass.querySelector('.names');
let policys = formallclass.querySelector('.policys');
let subjects = formallclass.querySelector('.subjects');
let phoneNumber = formallclass.querySelector('.phoneNumber');

forms.addEventListener('submit', function(e){
    console.log('Print');
    e.preventDefault();
});
