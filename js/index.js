// page action
let mainContent = document.querySelector('#mainContent');
let formContent = document.querySelector('#formContent');
let formPage = document.querySelector('#formPage');
let contentPage = document.querySelector('#contentPage');
let printPage = document.querySelector('#printPage');
let mainContentPrint = document.querySelector('#mainContentPrint');
formPage.addEventListener('click', function(){
    formContent.classList.add('d-none');
    mainContent.classList.remove('d-none');
    mainContent.classList.add('d-block');
});
contentPage.addEventListener('click', function(){
    formContent.classList.add('d-block');
    formContent.classList.remove('d-none');
    mainContent.classList.add('d-block');
    document.location.reload();
});
printPage.addEventListener('click', function(){
    mainContentPrint.classList.add('d-block');
    mainContentPrint.classList.remove('d-none');
    mainContent.classList.add('d-none');
});




// all js code here

let formallclass = document.querySelector('#formAllClass');
let forms = document.querySelector('#formSubmit');
let ids = document.querySelector('.idFi');
let dates = document.querySelector('.datessT');
let selects = document.querySelector('#selects');
let names = document.querySelector('.names');
let policys = document.querySelector('.policys');
let subjects = document.querySelector('.subjects');
let phoneNumber = document.querySelector('.phoneNumber');
let displayDatas = document.querySelector('#loadContent');
let alertShow = document.querySelector('#alert-show');
let loadContentPrint = document.querySelector('#loadContentPrint');

forms.addEventListener('submit', function(e){
    e.preventDefault();
    if(ids.value === '' || dates.value === '' || selects.vlaue === 'Open this select menu' || names.value === '' || policys.value === '' || subjects.value === ''){
        alertShow.textContent = 'please FillUp All The Fields';
        alertShow.classList.add('alert-danger')
        alertShow.classList.remove('alert-success')
    }else{
        acceptData();
    }
});

let allData = [];

function acceptData(){
    let receiveData = {
        ID : ids.value,
        DATE : dates.value,
        SELECT : selects.value,
        NAME : names.value,
        POLICY : policys.value,
        SUBJ : subjects.value + '/-',
        PNONE : phoneNumber.value
    }
    allData.push(receiveData);
    localStorage.setItem('userData', JSON.stringify(allData));
    displayData()
    alertShow.textContent = 'Data Add SuccessFully';
    alertShow.classList.add('alert-success')
    alertShow.classList.remove('alert-danger')
    clearFields()
}

function clearFields(){
    dates.value = ''
    names.value = ''
    policys.value = ''
    subjects.value = ''
    phoneNumber.value = ''
}

function displayData(){
    displayDatas.innerHTML = '';
    loadContentPrint.innerHTML = '',
    ids.value = allData.length + 1;
    allData.map((data, index)=>{
        displayDatas.innerHTML += `
            <tr id=${index}>
                <td>${data.ID}</td>
                <td>${data.NAME}</td>
                <td>${data.POLICY}</td>
                <td>${data.SELECT}</td>
                <td>${data.DATE}</td>
                <td>${data.PNONE}</td>
                <td>${data.SUBJ}</td>
                <td><button onclick="deleteData(this)" title="Delete This Item" class="btn btn-light">X</button></td>
            </tr>
        ` 
        loadContentPrint.innerHTML += `
        <tr id=${index}>
                <td>${data.ID}</td>
                <td>${data.NAME}</td>
                <td>${data.POLICY}</td>
                <td>${data.SELECT}</td>
                <td>${data.DATE}</td>
                <td>${data.PNONE}</td>
                <td>${data.SUBJ}</td>
            </tr>
        `
    });
 
}

function deleteData(e){
    e.parentElement.parentElement.remove();
    allData.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem('userData', JSON.stringify(allData));
};
// javascript print
let printPages = document.querySelector('#printPages');
printPage.addEventListener('click', function(){
    window.print();
});



(()=>{
    allData = JSON.parse(localStorage.getItem('userData')) || [];
    displayData();
})();

