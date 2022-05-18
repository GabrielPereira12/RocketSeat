const button_openModal = document.getElementById('openModal')
const body = document.querySelector('body')
const divModal = document.querySelector('.modal-wrapper')

button_openModal.addEventListener('click', ()=> {
    divModal.classList.remove('invisible')
    body.addEventListener('keydown', (event)=> {
        if(event.key === "Escape") {
            divModal.classList.add('invisible')
            body.removeEventListener('keydown', true)
        }
    })
})

