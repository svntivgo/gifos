
let localTheme = localStorage.getItem('theme')
let darkModeButton = document.getElementById('navigation__dark-mode')
let elementIdDarkMode = [

    'navigation',
    'navigation__logo',
    'navigation__button',
    'navigation__new-button',
    'navigation__menu',
    'search',
    'search__title',
    'search__bar',
    'search__autocomplete',
    'search__icon',
    'results',
    'results__title',
    'results__tags',
    'trending',
    'trending__title',
    'trending__text',
    'footer',
    'social',
    'social__text',
    'social__icon-facebook',
    'social__icon-twitter',
    'social__icon-instagram',
    'copyrights'

]

/**
 * Switch between night and day mode
 * @event
 */
export function switcher() {

    darkModeButton.addEventListener('click', () => {

        elementIdDarkMode.forEach(element => {
            classChanger(element)
        });

        localStorage.setItem('theme', `${darkModeButton.innerText}`)
        darkModeButton.innerText === 'Modo Nocturno' ? darkModeButton.innerText = 'Modo Diurno' : darkModeButton.innerText = 'Modo Nocturno'
    })

}

/**
 * Changes the text of theme button changer
 */
export function buttonChanger() {

    if (localTheme !== 'Modo Nocturno') {

        darkModeButton.innerText === 'Modo Nocturno'

    } else if (localTheme !== 'Modo Diurno') {

        darkModeButton.innerText === 'Modo Diurno'

        elementIdDarkMode.forEach(element => {
            classChanger(element)
        });

        localStorage.setItem('theme', `${darkModeButton.innerText}`)
        darkModeButton.innerText === 'Modo Nocturno' ? darkModeButton.innerText = 'Modo Diurno' : darkModeButton.innerText = 'Modo Nocturno'
    }
}


/**
 * Toggle classes from nomal to --dark
 * @param {string} elementId the Id of the html element
 */
export function classChanger(elementId) {

    document.getElementById(elementId).classList.toggle(`${elementId}--dark`)

}