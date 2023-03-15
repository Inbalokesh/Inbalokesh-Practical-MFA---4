
/*get the number of characters*/
function charLength() {
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

function generate() {
    let length = document.getElementById('result').innerText;

    let Include_uppercase = document.getElementById("uppercase").checked;
    let Include_lowercase = document.getElementById("lowercase").checked;
    let Include_numbers = document.getElementById("numbers").checked;
    let Include_symbols = document.getElementById("symbols").checked;


    let up_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let low_characters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*+";

    if (Include_uppercase) {
        let gen = "";
        for (let i = 0; i < length; i++) {
            gen += up_characters.charAt(Math.floor(Math.random() * up_characters.length));
        }
        document.getElementById("password__result").value = gen
    }

    if (Include_uppercase && Include_lowercase) {
        let gen = "";
        for (let i = 0; i < length; i++) {
            gen += (low_characters+up_characters).charAt(Math.floor(Math.random() * (low_characters+up_characters).length));
            // console.log(gen)
        }
        document.getElementById("password__result").value = gen
    }
    if (Include_uppercase && Include_lowercase && Include_numbers) {
        let gen = "";
        for (let i = 0; i < length; i++) {
            gen += (low_characters+up_characters+numbers).charAt(Math.floor(Math.random() * (low_characters+up_characters+numbers).length));
            // console.log(gen)
        }
        document.getElementById("password__result").value = gen
    }
    if (Include_uppercase && Include_lowercase && Include_numbers && Include_symbols) {
        let gen = "";
        for (let i = 0; i < length; i++) {
            gen += (symbols+low_characters+up_characters+numbers).charAt(Math.floor(Math.random() * (low_characters+up_characters+numbers+symbols).length));
            // console.log(gen)
        }
        document.getElementById("password__result").value = gen
    }
}
document.getElementById("btn").addEventListener("click", generate)
