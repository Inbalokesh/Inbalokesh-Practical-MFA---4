
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

let result = document.querySelector("#password__result");
let length = document.getElementById('result').innerHTML;
let upp = document.querySelector("#uppercase");
let low = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let generateButton = document.querySelector("#generate");
const copyPass = document.querySelector("#copy");
// To generate uppercase letters //
const gen_uppercase = document.querySelector("#uppercase:checked") == true;
// console.log(gen_uppercase);

const btn = document.querySelector("#btn");


// btn.addEventListener("click", low);

function upp() {
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let password = "";
    for (let i = 0; i <= length; i++) {
        const gen_password = Math.floor(Math.random() * upper_case.length);
        password += upper_case.substring(gen_password, gen_password + 1)
    }
    document.querySelector("#password__result").value = password
}

function low() {
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    let length = document.getElementById('result').innerHTML
    let password = "";
    for (let i = 0; i <= length; i++) {
        const gen_password = Math.floor(Math.random() * lower_case.length);
        password += lower_case.substring(gen_password, gen_password + 1)
    }
    document.querySelector("#password__result").value = password
}

function num() {
    const numbers = "0123456789";
    let length = document.getElementById('result').innerHTML
    let password = "";
    for (let i = 0; i <= length; i++) {
        const gen_password = Math.floor(Math.random() * numbers.length);
        password += numbers.substring(gen_password, gen_password + 1)
    }
    document.querySelector("#password__result").value = password
}

function char() {
    const characters = "!@#$%^&*";
    let length = document.getElementById('result').innerHTML
    let password = "";
    for (let i = 0; i <= length; i++) {
        const gen_password = Math.floor(Math.random() * characters.length);
        password += characters.substring(gen_password, gen_password + 1)
    }
    document.querySelector("#password__result").value = password
}




