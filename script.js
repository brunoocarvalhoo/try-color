const divsBall = document.getElementsByClassName('ball');


function numberRandom() {
    const number = Math.floor(Math.random() * 256);
    return number;
}//fim funcao

function colorRandom(){

    const rgb = `rgb(${numberRandom()}, ${numberRandom()}, ${numberRandom()})`;
    return rgb;
}//fim funcao

for (let ball = 0; ball < divsBall.length; ball ++){
divsBall[ball].style.backgroundColor = colorRandom();

}



