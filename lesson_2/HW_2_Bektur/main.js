// 1) используя setTimout и рекурсию
// заставить блок дигаться
// по определенному шаблону(как было показано на уроке)

const block = document.querySelector('.block')

let positionX = 0
let positionY = 0


const move = ()=>{
    if(positionX <= 440 && positionY == 0){
        positionX += 16
        block.style.left = `${positionX}px`
        setTimeout(move, 100)
        block.style.backgroundColor = "black"
    }else if(positionX >= 440 && positionY <= 440){
        positionY += 16
        block.style.top = `${positionY}px`
        setTimeout(move, 100)
        block.style.backgroundColor = "green"
    }else if(positionY >= 440 && positionX != 0){
        positionX -= 16
        block.style.left = `${positionX}px`
        setTimeout(move, 100)
        block.style.backgroundColor = "red"
    }else if (positionX == 0 && positionY != 0){
        positionY -=16
        block.style.top = `${positionY}px`
        setTimeout(move,100)
        block.style.backgroundColor = "blue"
    }
}
move()


// const move = () => {
// 	if (position <= 360 && topPosition == 0) {
// 		position += 16;
// 		block.style.left = `${position}px`;
// 		setTimeout(move, 300);}
// 	else if (position >= 360 && topPosition <= 360) {
// 		topPosition += 16;
// 		block.style.top = `${topPosition}px`;
// 		setTimeout(move, 300);
// 	} else if (topPosition >= 360 && position != 0) {
// 		position -= 16;
// 		block.style.left = `${position}px`;
// 		setTimeout(move, 300);
// 	} else if (position == 0 && topPosition != 0) {
// 		topPosition -= 16;
// 		block.style.top = `${topPosition}px`;
// 		setTimeout(move, 300);
// 	}
// };
// 2) создать Интервал который будет выводить
// в консоль колтчество секунд, прошедших с
// момента запуска программы.

let num = 0
const interval = setInterval(() =>{
    num++
    console.log(`С момента запуска программы прошло : ${num}sec`)
},1000)

