const idGrab = document.querySelector('#id-grab')
const idColor = document.querySelector('#color-grab')


function setCard(){
    const card = document.querySelector(`${idGrab.value}`)
    console.log(card);
    card.style.color = idColor.value;
}

document.querySelector('#editCardButton').addEventListener('click', setCard)