
const showBD = document.querySelector('.showBD');
const mainForm = document.querySelector('.container');
const btnSumbit = document.querySelector('.form__submit');
const formInput = document.querySelectorAll('.form__item-input'); 
 
showBD.addEventListener("click", () => {
    if (mainForm.style.display !== 'none') {
        mainForm.style.display = 'none';
        showBD.value = "Показать Анкету";
    }
 
    else {
        mainForm.style.display = ''; 
        showBD.value = "Показать Таблицу";
    }
})
 
btnSumbit.addEventListener("click", async () => {
   
    let form = document.forms[0]; 
    let data = new FormData(form);
 
    try {
        let response = await fetch("test.php", {
            method: "POST",
            body: data
        });
        if (response.ok) {
            alert("Отправлено");
        }
        else {
            alert(`${response.status}: ${response.statusText}`);
        }
    }
    catch (e) {
        alert(e.message);
    }
});