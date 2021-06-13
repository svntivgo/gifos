// import {
//     getSearchGiphyArray,
//     getTrendingGiphyArray,
//     getGiphyAutocomplete
// } from "./async.js";

// import {
//     searchListener
// } from "./search.js";

// import {
//     drawTrendingGifos
// } from "./trending.js";

import { 
    darkMode
} from "./dark.js";

import { menuButton } from "./menu.js";

window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'
    let giphySearchSuggestionPath = 'https://api.giphy.com/v1/tags/related/'

    darkMode()
    menuButton()

    /**
     * Allows searching on search bar and autocomplete function
     * On click or Enter key, draw gifs on screen
     * @event
     * @module from search.js
     */
    // searchListener()

    /**
     * Draws gifs on trending section
     * @module from async.js
     * @param {giphyTrendingPath} its the url´s API
     * @param {apiKey} its the Key access to API
     */
    // getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
    //     (response) => {
    //         let trendingArray = response.data
    //         drawTrendingGifos(trendingArray)
    //     }
    // )
}