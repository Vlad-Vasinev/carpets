
const form = document.querySelector('form')

if(form) {

    function validate (formData) {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

        const formName = formData.get('name')
        const formTel = formData.get('tel')
        const formEmail = formData.get('email')

        if(formName.length < 2) {
            return false
        }
        if(!formEmail || !emailRegex.test(formEmail)) {
            return false
        }
        if(!formTel || phoneRegex.test(formTel)) {
            return false
        }
        else {
            return true
        }

    }

    async function sendData(data) {
        const response = await fetch('https:mysite.commmm', {
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
        
        const validateValue = validate(formData)
        if(validateValue) {
            try {
                await sendData(formData)    
                form.insertAdjacentHTML('beforeend', '<p>Your data was successfully sent!</p>')
            }
            catch (error){
                form.insertAdjacentHTML('beforeend', '<p>Unfortunately your data was not sent!</p>')
            }
        }
    })

}