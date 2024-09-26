let birthday = document.querySelector('#birthday');
let btn = document.querySelector('#btn');
let result = document.querySelector("#result");

function calculate(event) {

    let BirthdayValue = birthday.value;
    if (BirthdayValue == "") {
        alert("Please Enter Birthday Date and Year")
    }
    else {
        event.preventDefault();
        const age = getAge(BirthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getData())) {
        age--;
    }

    return age;


}



btn.addEventListener('click', calculate)