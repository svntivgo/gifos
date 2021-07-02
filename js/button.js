let favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem('favorites')) : []

export function logo() {
    let logoBtn = document.getElementById('navigation__logo')
    let sectionSearch = document.getElementById('search')
    let resultsContainer = document.getElementById(`results__container`)
    let resultsTitle = document.getElementById(`results__title`)
    let resultsTags = document.getElementById('results__tags')
    logoBtn.addEventListener('click', () => {
        resultsContainer.innerHTML = ''
        resultsTitle.style.paddingTop = '0rem'
        resultsTitle.style.paddingBottom = '0rem'
        sectionSearch.style.display = "flex"
        resultsTitle.innerHTML = ('Trending')
        resultsTags.innerHTML = ('Reactions, Entertainment, Sports, Stickers, Artists')
    })
}

export function burger() {
    let navigationButton = document.getElementById('navigation__button')
    let navigationMenu = document.getElementById('navigation__menu')
    for (let i = 0; i < navigationMenu.children.length; i+=2) {
        navigationMenu.children.item(i).addEventListener('click', () => {
            let theme = localStorage.getItem('theme')
            if (theme === 'Modo Diurno' || !theme) {
                navigationButton.classList.toggle('navigation__button--expanded')
                navigationMenu.classList.toggle('navigation__menu--expanded')
            } else if (theme === 'Modo Nocturno') {
                navigationButton.classList.toggle('navigation__button--dark--expanded')
                navigationMenu.classList.toggle('navigation__menu--expanded')
            }
        })
    }
    navigationButton.addEventListener('click', () => {
        let theme = localStorage.getItem('theme')
        if (theme === 'Modo Diurno' || !theme) {
            navigationButton.classList.toggle('navigation__button--expanded')
            navigationMenu.classList.toggle('navigation__menu--expanded')
        } else if (theme === 'Modo Nocturno') {
            navigationButton.classList.toggle('navigation__button--dark--expanded')
            navigationMenu.classList.toggle('navigation__menu--expanded')
        }
    })
}
