// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var LowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialCharacter = ["!@#$%^&*()"];



function generatePassword() {
    var passwordLength = parseInt(prompt("How many characters will the password be?"));
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid! Please insert a number between 8 and 128.")
        console.log(passwordLength);
    }

    var hasSpecialCharacters = confirm("Does the password include special characters?");
    var hasLowerCaseLetters = confirm("Does the password include lowercase letters?");
    var hasUpperCaseLetters = confirm("Does the password include uppercase letters?");
    var hasNumberCharacters = confirm("Does the password include number characters?");

    var characters = [];
    if (hasSpecialCharacters) {
        characters = characters.concat(specialCharacter);
    }
    if (hasLowerCaseLetters) {
        characters = characters.concat(LowerCase);
    }
    if (hasUpperCaseLetters) {
        characters = characters.concat(upperCase);
    }
    if (hasNumberCharacters) {
        characters = characters.concat(numbers);
    }

    var passwords = "";
    for (i = 0; i < characters.length; i++) {
        passwords += characters[i];
    }

    var result = "";
    for (var i = 0; i < passwordLength; i++) {
        result += passwords.charAt(Math.floor(Math.random() *
            passwords.length));
    }
    return result;
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);