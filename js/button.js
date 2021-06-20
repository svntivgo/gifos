let favorites = localStorage.getItem("test") ? JSON.parse(localStorage.getItem('test')) : []

export function burger() {
    let navigationButton = document.getElementById('navigation__button')
    let navigationMenu = document.getElementById('navigation__menu')
    navigationButton.addEventListener('click', () => {
        navigationButton.classList.toggle('navigation__button--expanded')
        navigationMenu.classList.toggle('navigation__menu--expanded')
    })
}

export function gifo(gifArray, i, section) {
    let favoriteBtn = document.getElementById(`${section}__gifo-button-favorite-${i}`)
    let downloadBtn = document.getElementById(`${section}__gifo-button-download-${i}`)
    let maximizeBtn = document.getElementById(`${section}__gifo-button-maximize-${i}`)
    let closeBtn = document.getElementById(`${section}__close-${i}`)
    let elementIdMax = [
        `${section}__gifo-container-${i}`,
        `${section}__close-${i}`,
        `${section}__img-${i}`,
        `${section}__overlay-${i}`,
        `${section}__gifo-buttons-container-${i}`,
        `${section}__gifo-button-favorite-${i}`,
        `${section}__gifo-button-download-${i}`,
        `${section}__gifo-button-maximize-${i}`,
        `${section}__gifo-text-container-${i}`
    ]
    let elementClassMax = [
        `${section}__gifo-container`,
        `${section}__close`,
        `${section}__img`,
        `${section}__overlay`,
        `${section}__gifo-buttons-container`,
        `${section}__gifo-button-favorite`,
        `${section}__gifo-button-download`,
        `${section}__gifo-button-maximize`,
        `${section}__gifo-text-container`
    ]

    favoriteBtn.addEventListener('click', () => {
        favorites.push(gifArray[i])
        localStorage.setItem('favorites', JSON.stringify(favorites))
    })
    downloadBtn.addEventListener('click', () => {
        window.open (`https://i.giphy.com/media/${gifArray[i].id}/source.gif`, "_blank");
    })
    maximizeBtn.addEventListener('click', () => {
        for (let i = 0; i < elementIdMax.length; i++) {
            document.getElementById(elementIdMax[i]).classList.toggle(`${elementClassMax[i]}--max`)
        }
    })
    closeBtn.addEventListener('click', () => {
        for (let i = 0; i < elementIdMax.length; i++) {
            document.getElementById(elementIdMax[i]).classList.toggle(`${elementClassMax[i]}--max`)
        }
    })
}