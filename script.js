
/* 20° - Passo */
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

/* 21° - Passo */
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){

    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    console.log(listItems)
    console.log(thumbItems)

    if(type === 'next'){
        list.append(listItems[0])
        thumb.append(thumbItems[0])

        /* 22° Passo */
        container.classList.add('next') 
        setTimeout(() => {container.classList.remove('next')}, 1000);
    }
     else{
        list.prepend(listItems[listItems.length -1])
        thumb.prepend(thumbItems[thumbItems.length -1])

        /* 22° Passo */
        container.classList.add('back') 
        setTimeout(() => {container.classList.remove('back')}, 1000);
    }
}



