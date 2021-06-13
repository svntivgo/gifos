export {drawGifos}

let searchBar = document.getElementById('search__bar')
let resultsContainer = document.getElementById('results__container')
let gifosfav = localStorage.getItem("test") ? JSON.parse(localStorage.getItem('test')) : []

/**
 * Draws gifs on results section
 * @param {array} response from async.js
 */
function drawGifos(response) {

    let resultsTags = document.getElementById('results__tags')
    let resultsTitle = document.getElementById('results__title')
    resultsTags.innerText = ""
    resultsTitle.innerText = `${searchBar.value}`
    resultsTitle.style.display = "block"
    resultsTitle.style.textAlign = "center"
    resultsTitle.style.marginBottom = "50px"

    for (let i = 0; i < 12; i++) {
        let resultsOverlay = document.getElementsByClassName('results__overlay')
        let resultsImgUrl = response[i].images.preview_webp.url
        let resultsGifoContainer = document.getElementsByClassName(`results__gifo-container`)
        let newResultsGifoContainer = document.createElement('div')
        newResultsGifoContainer.className = 'results__gifo-container'
        newResultsGifoContainer.innerHTML = (`
                                    <img class="results__img" src="${resultsImgUrl}" alt="">
                                    <div class="results__overlay">
                                        <div class="results__gifo-buttons-container">
                                            <div class="results__gifo-button results__gifo-button-favorite" id="favbtn${i}"></div>
                                            <div class="results__gifo-button results__gifo-button-download"></div>
                                            <div class="results__gifo-button results__gifo-button-maximize"></div>
                                        </div>
                                        <div class="results__gifo-text-container">
                                            <p class="results__gifo-owner">${response[i].username}</p>
                                            <p class="results__gifo-title">${response[i].title}</p>
                                        </div>
                                    </div>
        `)

        resultsContainer.appendChild(newResultsGifoContainer)
        resultsGifoContainer[i].addEventListener("mouseenter", () => {
            resultsOverlay[i].style.display = "flex"
        })
        resultsOverlay[i].addEventListener("mouseleave", () => {
            resultsOverlay[i].style.display = "none"
        })
        resultsOverlay[i].style.display = "none"
        let boton = document.getElementById(`favbtn${i}`)
        boton.addEventListener('click', () => {
            gifosfav.push(response[i])
            localStorage.setItem('test', JSON.stringify(gifosfav))
        })
    }
}
