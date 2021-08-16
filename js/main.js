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

import { trendingTerms } from "./modules/trend-terms/trend-terms.js";

import * as user from "./user.js"

import { favs } from "./favorites.js";

window.onload = () => {
    let favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem('favorites')) : favs

    let resultsGifs = []
    let trendingGifs = []
    let testTrendingGifs = JSON.parse(localStorage.getItem('trending'))
    let terms = {
        "data": [
            "relaxing",
            "thinking",
            "begin",
            "divine",
            "funny dog",
            "frozen elsa",
            "face palm",
            "champagne",
            "sad face",
            "comedy",
            "super saiyan 3",
            "beer",
            "cant read",
            "airplane",
            "sharon stone",
            "chile",
            "Hotdog",
            "dog",
            "flirting",
            "hugging"
        ],
        "meta": {
            "status": 200,
            "msg": "OK",
            "response_id": "1aea4e97aedf84e64c1a4df0f3ec1f245d2dd0ed"
        }
    }

    theme()
    menu()
    button()
    searchBar(getSearchGiphyArray, getGiphyAutocomplete, 0, Gifo)
    trendingTerms(terms)

    user.saved('favorites', 'Favoritos', 'favorites')
    // user.saved('user-gifos', 'Mis gifos', 'mis-gifos')


    /**
     * Draws gifs on trending section
     * @param {string} giphyTrendingPath is the url to the API
     * @param {string} apiKey is the key access to the API
     */
    // getTrendingGiphyArray(3).then(
    //     (response) => {

    //         let trendingArray = response.data
    //         console.log(trendingArray);
    //         testgifs('trending', trendingGifs, trendingArray)

    //     }
    // )

    function testgifs(section, arrayPush, array, favo) {

        let id = document.getElementById(`${section}__container`).childElementCount

        for (let i = 0; i < array.length; i++) {
            arrayPush.push(array[i])
            let trendings = new Gifo(i, `${section}`, id, arrayPush)
            trendings.gifoBuilder(favo)
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

    testgifs('results', trendingGifs, testTrendingGifs, favorites)
    testgifs('trending', trendingGifs, testTrendingGifs, favorites)
}
