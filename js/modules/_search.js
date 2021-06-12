export {searchListener, drawAutocomplete}

import { getSearchGiphyArray, getGiphyAutocomplete } from "./_async.js";
import { drawGifos } from "./_results.js";
let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
let searchIcon = document.getElementById('search__icon')
let searchBar = document.getElementById('search__bar')
let giphyAutocompletePath = 'https://api.giphy.com/v1/gifs/search/tags'
let giphySearchPath = 'https://api.giphy.com/v1/gifs/search'
let giphySearchSuggestionPath = 'https://api.giphy.com/v1/tags/related/'
let searchAutocomplete = document.getElementById('search__autocomplete')


/**
 * Allows searching on search bar and autocomplete function
 * On click or Enter key, draw gifs on screen
 * @function getSearchGiphyArray taken from _async.js
 * @function drawGifos taken from _results.js 
 * @function drawAutocomplete taken from _search.js 
 */
function searchListener() {
    searchIcon.addEventListener('click', () => {
        getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
            (response) => {
                let gifoArray = response.data
                drawGifos(gifoArray)
            }
        )
        searchAutocomplete.style.display = "none"
    })
    searchBar.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
                (response) => {
                    let gifoArray = response.data
                    drawGifos(gifoArray)
                }
            )
            searchAutocomplete.style.display = "none"
        } else {
            getGiphyAutocomplete(giphyAutocompletePath, searchBar.value, apiKey).then(
                (response) => {
                    let autocompleteArray = response.data
                    drawAutocomplete(autocompleteArray)
                }
            )
            searchAutocomplete.style.display = "block"
        }
    })
}

/**
 * Allows drawing suggetions on search bar
 * @param {array} response
 */
function drawAutocomplete(response) {
    searchAutocomplete.innerHTML = ""
    for (let i = 0; i < response.length; i++) {
        let tag = response[i].name
        let tagBox = document.createElement('div')
        tagBox.innerHTML = (`
                            <p class="search__autocomplete-tag">${tag}</p>
        `)
        searchAutocomplete.appendChild(tagBox)
    }
}