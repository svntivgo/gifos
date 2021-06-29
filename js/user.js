import * as constructor from "./constructor.js";

export function saved(items, name, iconClass) {
    let favoritesBtn = document.getElementById(`navigation__${items}`)
    let gifsOnLocal = getLocalData(`${items}`)
    let resultsContainer = document.getElementById(`results__container`)
    let resultsTitle = document.getElementById(`results__title`)
    let resultsTags = document.getElementById('results__tags')
    let sectionSearch = document.getElementById('search')
    favoritesBtn.addEventListener('click', () => {
        sectionSearch.style.display = 'none'
        resultsContainer.innerHTML = ''
        resultsTitle.style.paddingTop = '10rem'
        resultsTitle.style.paddingBottom = '2rem'
        resultsTitle.innerHTML = (`
            <div class="${iconClass}-icon"></div>
            ${name}
        `)
        resultsTags.innerHTML = ''
        for (let i = 0; i < gifsOnLocal.length; i++) {
            let favorites = new constructor.Gif(i, gifsOnLocal[i], 'results')
            favorites.containerBuilder()
            favorites.overlayListener()
            favorites.buttons()
        }
    })
}

function getLocalData(item) {
    let data = JSON.parse(localStorage.getItem(item))
    return data
}