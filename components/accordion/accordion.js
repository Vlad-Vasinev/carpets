
const accordionWrapper = document.querySelector('.drop-blocks__inner')

if(accordionWrapper) {

  accordionWrapper.addEventListener('click', (e) => {

    const accordionTitle = e.target.closest('.drop-el__title')

    if(!accordionTitle) return 

    accordionTitle.parentElement.querySelector('.drop-el__inside').classList.toggle('dropContent_active')

  })

}