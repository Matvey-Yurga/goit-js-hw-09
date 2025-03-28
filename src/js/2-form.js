let formData = { email: "", message: "" }
const form = document.querySelector(".feedback-form")

const data = localStorage.getItem("feedback-form-state")
if (data) {
    const saveData = JSON.parse(data)
    formData = {...formData, ...saveData}
    form.email.value = formData.email
    form.message.value = formData.message
}

form.addEventListener("input", (event) => {
    
    const { name, value } = event.target
    if (name === "email"|| name === "message") {
        formData[name] = value
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
})
    
form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!formData.email || !formData.message) {
        alert("Fill please all fields")
    } else { 
        console.log(formData)
        localStorage.removeItem("feedback-form-state")
        formData = { email: "", message: "" }
        form.reset()
    }
})
