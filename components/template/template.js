
const popupBtn = document.querySelector('.open-popup')

if(popupBtn) {
  popupBtn.addEventListener('click', (e) => {

    e.stopPropagation()

    const popupTemplate = document.getElementById('popupTemplate')
    const copyTemplate = popupTemplate.content.cloneNode(true)

    document.body.appendChild(copyTemplate)

    if(document.querySelector('.popup-overlay')) {
      document.querySelector('.popup-overlay .popup-close').addEventListener('click', () => {
        document.body.removeChild(document.querySelector('.popup-overlay'))
      })
    }

  })

  document.addEventListener('click', (e) => {

    const clickTarget = e.target.closest('.popup-content')

    if(!clickTarget) {

      const overlay = document.querySelector('.popup-overlay')

      if(overlay) {
        overlay.remove()
      }
    }

  })
}