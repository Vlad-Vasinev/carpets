

document.addEventListener('DOMContentLoaded', () => {
  const modalOpen = document.querySelector('.modal-open-btn')
  const modal = document.querySelector('.modal')
  
  if(modalOpen && modal) {

    const modalClose = modal.querySelector('.modal__close')

    modalOpen.addEventListener('click', (e) => {
      e.stopPropagation()
      if(modal) {
        modal.classList.add('modal--active')
      }
    })

    document.addEventListener('click', (e) => {

      const modalTarget = e.target.closest('.modal__content')

      if(!modalTarget) {
        modal.classList.remove('modal--active')
      }
        
    })

    modalClose.addEventListener('click', () => {
      modal.classList.remove('modal--active')
    })

  }

})