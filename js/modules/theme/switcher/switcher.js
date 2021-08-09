export let switcher = (button, body) => {
    button.addEventListener('click', () => {
        body.classList.toggle('--dark-mode')
        localStorage.setItem('theme', `${button.innerText}`)
        if (button.innerText === 'Modo Nocturno') {
            button.innerText = 'Modo Diurno'
        } else {
            button.innerText = 'Modo Nocturno'
        }
    })
}
