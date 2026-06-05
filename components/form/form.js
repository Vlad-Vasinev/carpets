
const form = document.querySelector('form')

if(form) {

    async function sendData(data) {
        fetch('https:mysite.commmm', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(data))
        })

        if(!response.ok) {
            throw new Error('Server error')
        }
    }

    form.addEventListener('submit', async (e) => {

        e.preventDefault()

        const formData = new FormData(form)
        
        try {
            await sendData(formData)    
            form.insertAdjacentHTML('beforeend', '<p>Your data was successfully sent!</p>')
        }
        catch (error){
            form.insertAdjacentHTML('beforeend', '<p>Unfortunately your data was not sent!</p>')
        }
    })

}