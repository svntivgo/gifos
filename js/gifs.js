
/**
 * Draws the gifos with overlay and buttons functionality
 * @param {JSON} response is the array that contains all gifs info
 * @param {string} sectionClass is the section where be drawed the gifs
 */
export function painter(response, sectionClass) {
    let sectionContainer = document.getElementById(`${sectionClass}__container`)
    let gifoContainer = document.getElementsByClassName(`${sectionClass}__gifo-container`)
    let overlay = document.getElementsByClassName(`${sectionClass}__overlay`)
    let newContainer
    let imgUrl
    let owner
    let title
    for (let i = 0; i < response.length; i++) {
        imgUrl = response[i].images.preview_webp.url
        owner = response[i].username
        title = response[i].title
        newContainer = document.createElement('div')
        newContainer.className = (`${sectionClass}__gifo-container`)
        newContainer.innerHTML = (`
                            <img class="${sectionClass}__img" src="${imgUrl}" alt="">
                            <div class="${sectionClass}__overlay">
                                <div class="${sectionClass}__gifo-buttons-container">
                                    <div class="${sectionClass}__gifo-button ${sectionClass}__gifo-button-favorite" id="favbtn${i}"></div>
                                    <div class="${sectionClass}__gifo-button ${sectionClass}__gifo-button-download"></div>
                                    <div class="${sectionClass}__gifo-button ${sectionClass}__gifo-button-maximize"></div>
                                </div>
                                <div class="${sectionClass}__gifo-text-container">
                                    <p class="${sectionClass}__gifo-owner">${owner}</p>
                                    <p class="${sectionClass}__gifo-title">${title}</p>
                                </div>
                            </div>
        `)
        sectionContainer.appendChild(newContainer)
        gifoContainer[i].addEventListener("mouseenter", () => {
            overlay[i].style.display = "flex"
        })
        overlay[i].addEventListener("mouseleave", () => {
            overlay[i].style.display = "none"
        })
        overlay[i].style.display = "none"
        let favbtn = document.getElementById(`favbtn${i}`)
        favbtn.addEventListener('click', () => {
            favorites.push(response[i])
            localStorage.setItem('favorites', JSON.stringify(favorites))
        })
    }
}