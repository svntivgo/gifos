import {
    Gifo
} from "./modules/constructor/constructor.js";


export function saved(array, name, iconClass) {

    let favoritesBtn = document.getElementById(`navigation__${array}`)
    let gifsOnLocal = getLocalData(`${array}`)
    let resultsContainer = document.getElementById(`results__container`)
    let resultsTitle = document.getElementById(`results__title`)
    let resultsTags = document.getElementById('results__tags')
    let sectionSearch = document.getElementById('search')

    favoritesBtn.addEventListener('click', () => {

        console.log("object");
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

            let trendings = new Gifo(i, `results`, i, gifsOnLocal)
            trendings.gifoBuilder(gifsOnLocal)

        }

    })

}

function getLocalData(item) {
    let data = JSON.parse(localStorage.getItem(item))
    return data
}
