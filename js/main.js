import * as async from "./async.js";

import * as searchBar from "./search-bar.js";

import * as gifs from "./gifs.js";

import * as theme from "./theme.js";

import * as menu from "./menu.js";

window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'


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
     * @param {string} giphyTrendingPath is the url to the API
     * @param {string} apiKey is the key access to the API
     */
    // async.getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
    //     (response) => {
    //         let trendingArray = response.data
    //         gifs.painter(trendingArray, "trending")
    //     }
    // )
}