export let button = (navigationMenu, navigationButton) => {
    navigationButton.addEventListener('click', () => {
        navigationButton.classList.toggle('navigation__button--expanded')
        navigationMenu.classList.toggle('navigation__menu--expanded')
    })
}
