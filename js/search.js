export {searchListener, drawAutocomplete}

import { getSearchGiphyArray, getGiphyAutocomplete } from "./async.js";
import { drawGifos } from "./results.js";
let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
let searchIcon = document.getElementById('search__icon')
let searchBar = document.getElementById('search__bar')
let giphyAutocompletePath = 'https://api.giphy.com/v1/gifs/search/tags'
let giphySearchPath = 'https://api.giphy.com/v1/gifs/search'
let giphySearchSuggestionPath = 'https://api.giphy.com/v1/tags/related/'
let resultsSection = document.getElementById('results')
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
        searchBar.style.borderRadius = "27px"
        searchBar.style.borderBottom = "1px solid #572EE5"
        searchIcon.style.left = "45rem"
        resultsSection.innerHTML = (`
                                    <h2 class="results__title" id="results__title">Trending:</h2>
                                    <h3 class="results__tags" id="results__tags">Reactions, Entertainment, Sports, Stickers, Artists</h3>
                                    <div class="results__container" id="results__container">
                                        <!-- all gifos will be here -->
                                    </div>
        `)
    })
    searchBar.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || searchBar.value === '') {
            getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
                (response) => {
                    let gifoArray = response.data
                    drawGifos(gifoArray)
                }
            )
            searchAutocomplete.style.display = "none"
            searchBar.style.borderRadius = "27px"
            searchBar.style.borderBottom = "1px solid #572EE5"
            searchIcon.style.left = "45rem"
            resultsSection.innerHTML = (`
                                        <h2 class="results__title" id="results__title">Trending:</h2>
                                        <h3 class="results__tags" id="results__tags">Reactions, Entertainment, Sports, Stickers, Artists</h3>
                                        <div class="results__container" id="results__container">
                                            <!-- all gifos will be here -->
                                        </div>
            `)
        } else {
            getGiphyAutocomplete(giphyAutocompletePath, searchBar.value, apiKey).then(
                (response) => {
                    let autocompleteArray = response.data
                    drawAutocomplete(autocompleteArray)
                }
            )
            searchAutocomplete.style.display = "block"
            searchBar.style.borderRadius = "27px 27px 0 0"
            searchBar.style.borderBottom = "0"
            searchIcon.style.left = "2.5rem"
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
        tagBox.className = "search__tag-container"
        tagBox.innerHTML = (`
                            <div class="search__tag-icon"></div>
                            <p class="search__autocomplete-tag">${tag}</p>
        `)
        searchAutocomplete.appendChild(tagBox)
    }
}