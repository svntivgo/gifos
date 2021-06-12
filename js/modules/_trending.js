export { drawTrendingGifos };

/**
 * Draws trending gifs on trending section
 * @param {array} response taken from _async.js
 */
function drawTrendingGifos(response) {
    for (let i = 0; i < 3; i++) {
        let trendingOverlay = document.getElementsByClassName('trending__overlay')
        let trendingImg = document.getElementsByClassName('trending__img')
        let trendingImgUrl = response[i].images.preview_webp.url
        let trendingGifoOwner = document.getElementsByClassName('trending__gifo-owner')
        let trendingGifoTitle = document.getElementsByClassName('trending__gifo-title')
        trendingImg[i].src = `${trendingImgUrl}`
        trendingGifoOwner[i].innerHTML = (`${response[i].username}`)
        trendingGifoTitle[i].innerHTML = (`${response[i].title}`)

        trendingImg[i].addEventListener("mouseenter", () => {
            trendingOverlay[i].style.display = "flex"

        })
        trendingOverlay[i].addEventListener("mouseleave", () => {
            trendingOverlay[i].style.display = "none"
        })
    }
}