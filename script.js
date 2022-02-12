
function divClicked(value){

if(isNaN(value)){

    handleSymbol()

} else {


    handleNumber()

}

}


function init(){


    const allButtons = document.querySelector('.wrapper').addEventListener('click', event =>{

        divClicked(event.target.innerText);
    
    })
}


init()


