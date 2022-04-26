const refs = {
    input: document.querySelector('input#name-input'),
    nameLabel: document.querySelector('span#name-output'),
};
refs.input.addEventListener("input", (event) => {
    refs.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value == 0)
        {refs.nameLabel.textContent = 'Anonymous';}
    }
    
);