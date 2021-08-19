import {
    Gifo
} from "./modules/constructor/constructor.js";


export function saved(array, name, iconClass) {

    let favoritesBtn = document.getElementById(`navigation__favorites`)
    let gifsOnLocal = getLocalData(`${array}`)
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

        if (array.length === 0) {
            resultsContainer.innerHTML = `
                <div class="alert-container">
                    <div class = "alert-icon favorites"></div>
                    <h3 >"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!"</h3>
                </div>
            `
        } else {
            for (let i = 0; i < gifsOnLocal.length; i++) {

                let trendings = new Gifo(i, `results`, i, gifsOnLocal)
                trendings.gifoBuilder(gifsOnLocal)
            }
        }



    })

}

export function created(array, name, iconClass) {

    let favoritesBtn = document.getElementById(`navigation__user-gifos`)
    let gifsOnLocal = getLocalData(`${array}`)
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

        if (array.length === 0) {
            resultsContainer.innerHTML = `
                <div class="alert-container">
                    <div class = "alert-icon user-gifos"></div>
                    <h3>¡Anímate a crear tu primer GIFO!</h3>
                </div>
            `
        } else {
            for (let i = 0; i < gifsOnLocal.length; i++) {

                let trendings = new Gifo(i, `results`, i, gifsOnLocal)
                trendings.gifoBuilder(gifsOnLocal)
            }
        }

    })

}

function getLocalData(item) {
    let data = JSON.parse(localStorage.getItem(item))
    return data
}
