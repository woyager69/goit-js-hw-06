
const form = document.querySelector(".login-form");
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
}