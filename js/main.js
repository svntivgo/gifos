import {
    getSearchGiphyArray,
    getTrendingGiphyArray,
    getGiphyAutocomplete
} from "./_async.js";

import {
    searchListener
} from "./_search.js";

import {
    drawTrendingGifos
} from "./_trending.js";

window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'
    let giphySearchSuggestionPath = 'https://api.giphy.com/v1/tags/related/'

    /**
     * Allows searching on search bar and autocomplete function
     * On click or Enter key, draw gifs on screen
     * @event
     * @module from search.js
     */
    searchListener()

    /**
     * Draws gifs on trending section
     * @module from _async.js
     * @param {giphyTrendingPath} its the url´s API
     * @param {apiKey} its the Key access to API
     */
    getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
        (response) => {
            let trendingArray = response.data
            drawTrendingGifos(trendingArray)
        }
    )
}