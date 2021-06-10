window.onload = () => {
    let apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
    let giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'
    let giphySearchPath = 'https://api.giphy.com/v1/gifs/search'
    let giphyAutocompletePath = 'https://api.giphy.com/v1/gifs/search/tags'
    let giphySearchSuggestionPath = 'https://api.giphy.com/v1/tags/related/{term}'
    let searchBar = document.getElementById('searchBar')
    let searchIcon = document.getElementById('searchIcon')
    let gifoContainer = document.getElementById('gifoContainer')
    // let gifoTrending = document.getElementsByClassName('trendingImg')

    async function getSearchGiphyArray(path, key, input) {
        let response = await fetch(`${path}?api_key=${key}&q=${input}`)
        response = await response.json()
        console.log(response);
        return response
    }
    

    async function getTrendingGiphyArray(path, key) {
        let response = await fetch(`${path}?api_key=${key}&limit=3`)
        response = await response.json()
        return response
    }

    function searchListener() {
        searchIcon.addEventListener('click', () => {
            getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
                (response) => {
                    let gifoArray = response.data
                    drawGifos(gifoArray)
                }
            )
        })
        searchBar.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                getSearchGiphyArray(giphySearchPath, apiKey, searchBar.value).then(
                    (response) => {
                        let gifoArray = response.data
                        drawGifos(gifoArray)
                    }
                )
            }
        })
    }
    searchListener()

    getTrendingGiphyArray(giphyTrendingPath, apiKey).then(
        (response) => {
            let trendingArray = response.data
            drawTrendingGifos(trendingArray)
        }
    )

    function drawGifos(response) {
        gifoContainer.innerHTML = ""
        for (let i = 0; i < 2; i++) {
            let gifoHeaderOverlay = document.getElementsByClassName('gifoHeaderOverlay')
            let gifoUrl = response[i].images.original.url
            let gifo = document.getElementsByClassName(`gifoHeader`)
            let gifoHeader = document.createElement('div')
            gifoHeader.className = 'gifoHeaderContainer'
            gifoHeader.innerHTML = (`
                                        <img class="gifo gifoHeader" id="img${gifoUrl}" src="${gifoUrl}" alt="">
                                        <div class="gifoHeaderOverlay">
                                            <div class="buttonsContainer">
                                                <div class="favoriteBtn gifoButton"></div>
                                                <div class="downloadBtn gifoButton"></div>
                                                <div class="maximizeBtn gifoButton"></div>
                                            </div>
                                            <div class="gifoInfoText">
                                                <p class="trendingGifoOwner">${response[i].username}</p>
                                                <p class="trendingGifoName">${response[i].title}</p>
                                            </div>
                                        </div>
            `)

            gifoContainer.appendChild(gifoHeader)
            gifo[i].addEventListener("mouseenter", () => {
                gifoHeaderOverlay[i].style.display = "flex"
            })
            gifoHeaderOverlay[i].addEventListener("mouseleave", () => {
                gifoHeaderOverlay[i].style.display = "none"
            })
            gifoHeaderOverlay[i].style.display = "none"
        }
    }

    function drawTrendingGifos(response) {
        
        for (let i = 0; i < 3; i++) {
            let gifoTrendingOverlay = document.getElementsByClassName('gifoTrendingOverlay')
            let trendingImg = document.getElementsByClassName('trendingImg')
            let gifoUrl = response[i].images.original.url
            let trendingGifoOwner = document.getElementsByClassName('trendingGifoOwner')
            let trendingGifoName = document.getElementsByClassName('trendingGifoName')
            trendingImg[i].id = `trendingImg${gifoUrl}`
            trendingImg[i].src = `${gifoUrl}`
            trendingGifoOwner[i].innerHTML = (`${response[i].username}`)
            trendingGifoName[i].innerHTML = (`${response[i].title}`)

            trendingImg[i].addEventListener("mouseenter", (e) => {
                e.stopPropagation()
                gifoTrendingOverlay[i].style.display = "flex"
                
            })
            gifoTrendingOverlay[i].addEventListener("mouseleave", (e) => {
                gifoTrendingOverlay[i].style.display = "none"
            })
        }
    }

    // function gifoHover(toHover) {
    //     for (let i = 0; i < toHover.length; i++) {
    //         toHover[i].addEventListener("mouseenter", () => {
    //             gifoOverlay[i].style.display = "flex"
    //         })
    //         gifoOverlay[i].addEventListener("mouseleave", () => {
    //             gifoOverlay[i].style.display = "none"
    //         })
    //     }
    // }
}
