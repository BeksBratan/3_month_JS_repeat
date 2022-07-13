// //i- для всех Caps или без
// //g- для всех букв , будет искать всеееее
// // \d- это найти все цифры
// // \w-это все и цифры и буквы
// // ^ = это обязательно чтобы началось с этого
// // $ = это обяххательно чтобы кончалось на это


// let string = prompt('Tell your name')
// // let regExp = /y/
// let regExp = /y/i
// console.log(string.match(regExp))


// Второй способ
// let regExp = new RegExp('d', 'i')
// let letter = "abbdGHJCds"
//
// let regExp = /d/g
// console.log(letter.match(regExp))


// const letter = '1241vbvb421312gdfhsgs4421dfd41'
// const regExp = /\d/g
//
// // console.log(letter.match(regExp))
// console.log(letter)
// console.log(letter.replace(regExp, "*"))

// ЗАДАЧА
// const phoneInput = document.querySelector('.phoneInput')
// const phoneCheck = document.getElementsByClassName('phoneCheck')
// const phoneResult = document.querySelector('.phoneResult')
//
//
// const phoneRegExp = /^\+996 \d{3} \d{2} \d{2} \d{2}$/;
//
// phoneCheck[0].addEventListener("click", () => {
//     if (phoneRegExp.test(phoneInput.value)){
//         phoneResult.innerText = "OKey"
//         phoneResult.style.color = 'green'
//     }else{
//         phoneResult.innerText = "Not OKey"
//         phoneResult.style.color = 'red'
//     }
// });

let num = 0
const count = () =>{
    num++
    console.log(num)
    if (num <= 10){
        count()
    }}
count()