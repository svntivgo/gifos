export { drawTrendingGifos };

/**
 * Draws trending gifs on trending section
 * @param {array} response taken from async.js
 */
function drawTrendingGifos(response) {
    for (let i = 0; i < 3; i++) {
        let trendingOverlay = document.getElementsByClassName('trending__overlay')
        let trendingImg = document.getElementsByClassName('trending__img')
        let trendingImgUrl = response[0].images.preview_webp.url
        let trendingGifoOwner = document.getElementsByClassName('trending__gifo-owner')
        let trendingGifoTitle = document.getElementsByClassName('trending__gifo-title')
        trendingImg[i].src = `${trendingImgUrl}`
        trendingGifoOwner[i].innerHTML = (`${response[0].username}`)
        trendingGifoTitle[i].innerHTML = (`${response[0].title}`)

        trendingImg[i].addEventListener("mouseenter", () => {
            trendingOverlay[i].style.display = "flex"

        })
        trendingOverlay[i].addEventListener("mouseleave", () => {
            trendingOverlay[i].style.display = "none"
        })
    }
}