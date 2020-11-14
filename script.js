const divsBall = document.getElementsByClassName('ball');


function numberRandom() {
    const number = Math.floor(Math.random() * 256);
    return number;
};

function collorRandom(){

    const rgb = `rgb(${numberRandom()}, ${numberRandom()}, ${numberRandom()})`;
    return rgb;


}

console.log(numberRandom());
console.log(collorRandom());


