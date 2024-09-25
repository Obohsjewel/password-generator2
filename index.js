const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

let password1length = 15
let password2length = 15

function generate(){
    let passwordOne = ''
    let passwordTwo = ''
    while(password1length > passwordOne.length){
    passwordOne += characters[Math.floor(Math.random()*characters.length)]
    }
    
    while(password2length > passwordTwo.length){
    passwordTwo += characters[Math.floor(Math.random()*characters.length)]
    }
    password1El.value = passwordOne
    password2El.value = passwordTwo
}

function copyPassword1(){
    password1El.select()
    document.execCommand("copy")
}

function copyPassword2(){
    password2El.select()
    document.execCommand("copy")
}