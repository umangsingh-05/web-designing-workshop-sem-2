function check() {
    let  ch = document.getElementById("char").value;
    let result = document.getElementById("result");

    if (ch == "") {
        result.innerHTML = "Enter a character";
    } else if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
        result.innerHTML = ch + "  is a Vowel";
    } else {
        result.innerHTML =ch + " is a Consonant";
    }
}