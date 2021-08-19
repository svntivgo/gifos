export let click = (navigationMenu, navigationButton) => {
    for (let i = 0; i < navigationMenu.children.length; i += 2) {
        navigationMenu.children.item(i).addEventListener('click', () => {
            navigationButton.classList.toggle('navigation__button--expanded')
            navigationMenu.classList.toggle('navigation__menu--expanded')
        })
    }
}
