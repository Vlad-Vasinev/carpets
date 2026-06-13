

const grid = document.querySelector('.product-search')

if(grid) {

    const cards = grid.querySelector('.cards')

    cards.addEventListener('click', (e) => {

        const targetCard = e.target.closest('.card')

        if(!targetCard) return 

        console.log(targetCard)
        targetCard.classList.toggle('card--active')

    })
}