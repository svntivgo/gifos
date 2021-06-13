export {darkMode}

function darkMode() {
    let darkModeButton = document.getElementById('navigation__dark-mode')

    darkModeButton.addEventListener ('click', () => {
        classChanger('navigation')
        classChanger('navigation__logo')
        classChanger('navigation__button')
        classChanger('navigation__new-button')
        classChanger('navigation__menu')
        classChanger('search')
        classChanger('search__title')
        classChanger('search__bar')
        classChanger('search__autocomplete')
        classChanger('search__icon')
        classChanger('results')
        classChanger('results__title')
        classChanger('results__tags')
        classChanger('trending')
        classChanger('trending__title')
        classChanger('trending__text')
        classChanger('footer')
        classChanger('social')
        classChanger('social__text')
        classChanger('social__icon-facebook')
        classChanger('social__icon-twitter')
        classChanger('social__icon-instagram')
        classChanger('copyrights')
    })

}

function classChanger(elementId) {
    document.getElementById(elementId).classList.toggle(`${elementId}--dark`)
    
}