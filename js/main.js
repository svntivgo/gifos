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
    getGiphyAutocomplete
} from "./modules/getters/getters.js";

import {
    searchBar
} from "./modules/searchbar/searchbar.js";

import {
    Gifo
} from "./modules/constructor/constructor.js";

import * as user from "./user.js"

import { favs } from "./favorites.js";

window.onload = () => {
    let favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem('favorites')) : favs

    let resultsGifs = []
    let trendingGifs = []

    theme()
    menu()
    button()
    searchBar(getSearchGiphyArray, getGiphyAutocomplete, 0, Gifo)

    user.saved('favorites', 'Favoritos', 'favorites')
    // user.saved('user-gifos', 'Mis gifos', 'mis-gifos')


    /**
     * Draws gifs on trending section
     * @param {string} giphyTrendingPath is the url to the API
     * @param {string} apiKey is the key access to the API
     */
    // async.getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
    //     (response) => {
    //         let trendingArray = response.data
    //         for (let i = 0; i < trendingArray.length; i++) {
    //             let trendings = new constructor.Gif(i, trendingArray[i], 'trending')
    //             trendings.containerBuilder()
    //             trendings.overlayListener()
    //             trendings.buttons()
    //         }
    //     }
    // )

    function testgifs(section, arrayPush) {

        let gifsOnLocal = favorites
        let id = document.getElementById(`${section}__container`).childElementCount

        for (let i = 0; i < gifsOnLocal.length; i++) {
            arrayPush.push(gifsOnLocal[i])
            let trendings = new Gifo(i, `${section}`, id, arrayPush)
            trendings.gifoBuilder(gifsOnLocal)
            id ++
        }
    }

function vermas() {
    let boton = document.getElementById("results__title")
    boton.addEventListener('click', () => {
        console.log("object");
        testgifs('results', resultsGifs)
    })
}
vermas()


    testgifs('trending', trendingGifs)
    testgifs('results', resultsGifs)
}
