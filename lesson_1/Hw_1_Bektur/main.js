// 1) Используя регулярные выражения необходимо сделать
// поле для ввода формата ИНН - ппервыми цифрами должны быть либо 1 либо 0
// , а затем еще 13 цифр (в общем должно быть 14 цифр).

const phoneInput = document.querySelector('.phoneInput');
const phoneButton = document.querySelector('.phoneButton')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^(1||0)-\d{4}-\d{4}-\d{4}-\d{1}$/

phoneButton.addEventListener('click', () =>{
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'Все правильно';
    }else{
        phoneResult.innerText = 'Проверьте правильность написания ,' +
            ' или возможно вы написали неподходящий символ "A-Z, @#$%^&*"'
    }
})


// 2) используя рекурсию необходимо заставить блок двигаться по странице.
//     Создайте один большой блок и один маленький внутри него.
//     Задайте большому блоку position: relative, а малому absolute.
//     Используя addEventListener изменяйте параметр позиции
//     малого блока (.style.left=`${переменная}px`).


// let num = 50;
//
// const move = document.querySelector('.littleBlock');
//
// move.addEventListener("click",() => {
//   num++
//   (move.style.left=`${num}px`)
//     if(num <50) {
//       return move()
//     }
// })
// move()