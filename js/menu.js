
export function burgerButton() {
    let navigationButton = document.getElementById('navigation__button')
    let navigationMenu = document.getElementById('navigation__menu')
    navigationButton.addEventListener('click', () => {
        navigationButton.classList.toggle('navigation__button--expanded')
        navigationMenu.classList.toggle('navigation__menu--expanded')
    })
}