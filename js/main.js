import {
    getSearchGiphyArray,
    getTrendingGiphyArray,
    getGiphyAutocomplete
} from "./async.js";

import * as searchBar from "./search-bar.js";

import * as gifs from "./gifs.js";

import * as theme from "./theme.js";

import * as menu from "./menu.js";

window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'
    let favorites = localStorage.getItem("test") ? JSON.parse(localStorage.getItem('test')) : []

    theme.switcher()
    theme.buttonChanger()
    menu.burgerButton()

    /**
     * Allows searching on search bar and autocomplete function
     * On click or Enter key, draw gifs on screen
     * @event
     * @module from search.js
     */
    searchBar.searchBarListener("results")

    /**
     * Draws gifs on trending section
     * @module from async.js
     * @param {giphyTrendingPath} its the url´s API
     * @param {apiKey} its the Key access to API
     */
    getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
        (response) => {
            let trendingArray = response.data
            gifs.painter(trendingArray, "trending")
        }
    )
}