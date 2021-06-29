import * as async from "./async.js";

import * as searchBar from "./search-bar.js";

import * as constructor from "./constructor.js";

import * as theme from "./theme.js";

import * as button from "./button.js";

import * as user from "./user.js"

window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'


    theme.switcher()
    theme.buttonChanger()
    button.logo()
    button.burger()
    user.saved('favorites', 'Favoritos', 'favorites')
    user.saved('user-gifos', 'Mis gifos', 'mis-gifos')

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
    //         for (let i = 0; i < trendingArray.length; i++) {
    //             let trendings = new constructor.Gif(i, trendingArray[i], 'trending')
    //             trendings.containerBuilder()
    //             trendings.overlayListener()
    //             trendings.buttons()
    //         }
    //     }
    // )

    
    function getLocalData(item) {
        let data = JSON.parse(localStorage.getItem(item))
        return data
    }

    // function testgifs(items) {
    //     let gifsOnLocal = getLocalData(`${items}`)
    //     gifs.painter(gifsOnLocal, 'trending')
    // }
    // testgifs('favorites')

    // let cars = []

    // let newcar = new constructor.Gif (0, getLocalData(`favorites`),  'results')
    // cars.push(newcar)
    // console.log(cars[0].containerBuilder(), cars[0].overlayListener(), cars[0].buttons());
}