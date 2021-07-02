import * as async from "./async.js";
import * as constructor from "./constructor.js"

let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
let searchIcon = document.getElementById('search__icon')
let searchBar = document.getElementById('search__bar')
let searchAutocomplete = document.getElementById('search__autocomplete')
let giphyAutocompletePath = 'https://api.giphy.com/v1/gifs/search/tags'
let giphySearchPath = 'https://api.giphy.com/v1/gifs/search'
let giphySearchSuggestionPath = 'https://api.giphy.com/v1/tags/related/'
let resultsSection = document.getElementById('results')

/**
 * Allows searching on search bar and autocomplete function
 * On click or Enter key, draw gifs on screen
 * @param {string} section is the section were will be draw the gifs after search
 * @function getSearchGiphyArray from async.js
 * @function drawGifos from gifs.js
 * @function drawAutocomplete from this document
 */
export function searchBarListener(section) {
    searchIcon.addEventListener('click', () => {
        async.getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
            (response) => {
                let gifsArray = response.data
                eraseAutocomplete()
                for (let i = 0; i < gifsArray.length; i++) {
                    let onClick = new constructor.Gif(i, gifsArray, 'results')
                    onClick.containerBuilder()
                    onClick.overlayListener()
                    onClick.buttons()
                }
            }
        )
    })
    searchBar.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || searchBar.value == '') {
            async.getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
                (response) => {
                    let gifsArray = response.data
                    eraseAutocomplete()
                    for (let i = 0; i < gifsArray.length; i++) {
                        let onEnter = new constructor.Gif(i, gifsArray, 'results')
                        onEnter.containerBuilder
                        onEnter.overlayListener
                        onEnter.buttons
                    }
                }
            )
        } else {
            async.getGiphyAutocomplete(giphyAutocompletePath, "cats", apiKey).then(
                (response) => {
                    searchBar.style.borderRadius = "27px 27px 0 0"
                    searchBar.style.borderBottom = "1px solid #572EE5"
                    searchIcon.style.right = "87%"
                    let autocompleteArray = response.data
                    drawAutocomplete(autocompleteArray)
                }
            )
        }
    })
}

/**
 * Draws suggetion tags on search bar
 * @param {array} response is the array that contains all suggestion tags
 */
function drawAutocomplete(response) {
    searchAutocomplete.innerHTML = ""
    for (let i = 0; i < response.length; i++) {
        searchAutocomplete.style.display = "block"
        let tag = response[i].name
        let tagBox
        tagBox = document.createElement('div')
        tagBox.className = "search__tag-container"
        tagBox.innerHTML = (`
                            <div class="search__tag-icon"></div>
                            <p class="search__autocomplete-tag">${tag}</p>
        `)
        searchAutocomplete.appendChild(tagBox)
    }
}

/**
 * Erase the autocomplete box after press or click on search bar
 */
function eraseAutocomplete() {
    searchAutocomplete.style.display = "none"
    searchBar.style.borderRadius = "27px"
    searchBar.style.borderBottom = "1px solid #572EE5"
    searchIcon.style.right = "2rem"
    resultsSection.innerHTML = (`
                                <h2 class="results__title" id="results__title">Trending:</h2>
                                <h3 class="results__tags" id="results__tags">Reactions, Entertainment, Sports, Stickers, Artists</h3>
                                <div class="results__container" id="results__container">
                                    <!-- all gifos will be here -->
                                </div>
    `)
}
