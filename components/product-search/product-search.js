
const products = document.querySelector('.product-search')

if(products) {

  const searchForm = products.querySelector('form')
  const searchInput = products.querySelector('form input')
  const searchButton = products.querySelector('form button')

  const categories = products.querySelectorAll('[data-category]')
  const categoriesArray = Array.from(categories)
  const cardsWrapper = products.querySelector('.cards')

  let inputValue = undefined

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
  })

  if(searchInput) {

    searchInput.addEventListener('input', (e) => {
      if(e.target.value == "") {
        setTimeout(() => {
          if(products.querySelector('p')) {
            products.querySelector('p').remove()
          }
        }, 200)
        categoriesArray.forEach((el) => {
          el.style.display = ""
        })
      }
    })

    searchButton.addEventListener('click', () => {

      if(products.querySelector('p')) {
        products.querySelector('p').remove()
      }
      categoriesArray.forEach((el) => {
        el.style.display = ""
      })

      inputValue = searchInput.value
      const filteredCategories = categoriesArray.filter((category) => !category.dataset.category.includes(inputValue))

      if(filteredCategories.length > 0) {
        console.log('categoryies is empty')
        filteredCategories.forEach((el) => {
          el.style.display = "none"
        })
      }

      const visibleFiltered = Array.from(cardsWrapper.querySelectorAll('.card')).filter((card) => card.style.display == "block")

      if(visibleFiltered.length == 0) {
        products.insertAdjacentHTML('beforeend', "<p>Nothing was found</p>")
      }

    })
  }
        
}


// const products = document.querySelector('.products')

// if(products) {
//     const productsForm = products.querySelector('form')
//     const productsInput = productsForm.querySelector('input')
//     const productsButton = productsForm.querySelector('button')

//     const cards = products.querySelectorAll('[data-category]')

//     const functionFilter = (elements, inputValue) => Array.from(elements).filter((card) => !card.dataset.category.includes(inputValue.value))
//     const functionDom = (elements, value) => {
//         elements.forEach((el) => {
//             el.style.display = value
//         })
//     }
        
//     productsForm.addEventListener('submit', (e) => {
//         e.preventDefault()
//     })

//     productsInput.addEventListener('input', () => {
//         if(productsInput.value == '') {
//             functionDom(cards, "block")
//         }
//     })

//     productsButton.addEventListener('click', () => {
//         functionDom(cards, "block")
//         const filtered = functionFilter(cards, productsInput)
//         functionDom(filtered, "none")

//     })

// }