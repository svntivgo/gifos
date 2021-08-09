export let loader = (button, body, localTheme) => {
    if (localTheme === 'Modo Nocturno') {
        button.innerHTML = 'Modo Diurno'
        body.classList.toggle('--dark-mode')
    } else {
        button.innerText = 'Modo Nocturno'
    }
}
