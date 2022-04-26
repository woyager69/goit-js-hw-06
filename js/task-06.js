const refs = {
    input: document.querySelector('#validation-input'),
};
refs.input.addEventListener('blur', () => {
    if (refs.input.value.length == refs.input.dataset.length) { return refs.input.classList.add('valid'), refs.input.classList.remove('invalid'); };
    console.log(refs.input);
    return refs.input.classList.add('invalid'), refs.input.classList.remove('valid') ;
})