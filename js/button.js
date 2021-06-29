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
        // for (let i = 0; i < elementIdMax.length; i++) {
        //     document.getElementById(elementIdMax[i]).classList.toggle(`${elementClassMax[i]}--max`)
        // }
        maximizedCarrousel(favorites, 'maximized')
    })
    closeBtn.addEventListener('click', () => {
        for (let i = 0; i < elementIdMax.length; i++) {
            document.getElementById(elementIdMax[i]).classList.toggle(`${elementClassMax[i]}--max`)
        }
    })

    function maximizedCarrousel(localItems, section) {
        let items = localItems
        let container = document.getElementById('maximized')
        let imgUrl = items[0].images.preview_webp.url
        let owner = items[0].username
        let title = items[0].title
        container.innerHTML = (`
            <div class="${section}__close" id="${section}__close"></div>
            <img class="${section}__img" id="${section}__img" src="${imgUrl}" alt="">
                <div class="${section}__gifo-buttons-container" id="${section}__gifo-buttons-container">
                    <div class="${section}__gifo-button ${section}__gifo-button-favorite" id="${section}__gifo-button-favorite"></div>
                    <div class="${section}__gifo-button ${section}__gifo-button-download" id="${section}__gifo-button-download">
                        <a href="https://media4.giphy.com/media/${items[0].id}/giphy.gif" target="_self" rel="noopener noreferrer" id="${section}__gifourl"></a>
                    </div>
                    <div class="${section}__gifo-button ${section}__gifo-button-maximize" id="${section}__gifo-button-maximize"></div>
                </div>
                <div class="${section}__gifo-text-container" id="${section}__gifo-text-container">
                    <p class="${section}__gifo-owner">${owner}</p>
                    <p class="${section}__gifo-title">${title}</p>
                </div>
            </div>
        `)
    }

}