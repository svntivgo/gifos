export let switcher = (button, body) => {
    button.addEventListener('click', () => {

        body.classList.toggle('--dark-mode')
        localStorage.setItem('theme', `${button.innerText}`)
        if (button.innerText === 'Modo Nocturno') {
            button.innerText = 'Modo Diurno'
            document.querySelector("#search__bar").style.border = "1px solid #FFFFFF"
        } else {
            button.innerText = 'Modo Nocturno'
            document.querySelector("#search__bar").style.border = "1px solid #572EE5"
        }
    })
}
