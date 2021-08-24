import {
    theme
} from "./modules/theme/theme.js";

import {
    menu
} from "./modules/menu/menu.js";

import {
    button
} from "./modules/logo/logo.js";

import {
    getSearchGiphyArray,
    getTrendingGiphyArray,
    getGiphyAutocomplete,
    getGiphyTrendingTerms
} from "./modules/getters/getters.js";

import {
    searchBar
} from "./modules/searchbar/searchbar.js";

import {
    Gifo
} from "./modules/constructor/constructor.js";

import {
    trendingTerms
} from "./modules/trend-terms/trend-terms.js";

import * as user from "./user.js"

import {
    favs,
    gifsOnLocal
} from "./favorites.js";

window.onload = () => {
    let favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem('favorites')) : []

    let resultsGifs = []
    let trendingGifs = []
    let testTrendingGifs = localStorage.getItem('trending') ? JSON.parse(localStorage.getItem('trending')) : gifsOnLocal


    theme()
    menu()
    button()
    searchBar(getSearchGiphyArray, getGiphyAutocomplete, 6, Gifo, resultsGifs, favorites)


    user.saved('favorites', 'Favoritos', 'favorites')
    user.created([], 'Mis GIFOS', 'user-gifos')


    /**
     * API for trending terms on search
     */
    // getGiphyTrendingTerms().then(
    //     (response) => {

    //     let container = document.getElementById('results__tags')
    //     let terms = response.data
    //     container.innerText = (`${terms[0]}, ${terms[1]}, ${terms[2]}, ${terms[3]}, ${terms[4]}`);

    //     }
    // )


    /**
     * API for treding content
     * @param {number} 6 the number of objects on response
     */
    getTrendingGiphyArray(3).then(
        (response) => {

            let trendingArray = response.data
            arrayToGif('trending', trendingGifs, trendingArray, favorites)

        }
    )

    function arrayToGif(section, arrayPush, array, favo) {

        let id = document.getElementById(`${section}__container`).childElementCount

        for (let i = 0; i < array.length; i++) {
            arrayPush.push(array[i])
            let trendings = new Gifo(i, `${section}`, id, arrayPush)
            trendings.gifoBuilder(favo)
            id++
        }
    }

    // function vermas() {
    //     let boton = document.getElementById("results__title")
    //     boton.addEventListener('click', () => {
    //         console.log("object");
    //         testgifs('results', resultsGifs)
    //     })
    // }
    // vermas()

    // testgifs('results', trendingGifs, testTrendingGifs, favorites)
    // testgifs('trending', trendingGifs, testTrendingGifs, favorites)
}
