import * as async from "./async.js";

import * as searchBar from "./search-bar.js";

import * as gifs from "./gifs.js";

import * as theme from "./theme.js";

import * as button from "./button.js";

window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'


    theme.switcher()
    theme.buttonChanger()
    button.burger()

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
    async.getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
        (response) => {
            let trendingArray = response.data
            console.log(trendingArray);
            gifs.painter(trendingArray, "trending")
        }
    )
}