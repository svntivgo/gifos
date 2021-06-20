import * as button from "./button.js"

/**
 * Draws the gifos with overlay and buttons functionality
 * @param {JSON} response is the array that contains all gifs info
 * @param {string} section is the section where be drawed the gifs
 */
export function painter(response, section) {
    let sectionContainer = document.getElementById(`${section}__container`)
    let gifoContainer = document.getElementsByClassName(`${section}__gifo-container`)
    let overlay = document.getElementsByClassName(`${section}__overlay`)
    let newContainer
    let imgUrl
    let owner
    let title
    for (let i = 0; i < response.length; i++) {
        imgUrl = response[i].images.preview_webp.url
        owner = response[i].username
        title = response[i].title
        newContainer = document.createElement('div')
        newContainer.className = (`${section}__gifo-container`)
        newContainer.id = (`${section}__gifo-container-${i}`)
        newContainer.innerHTML = (`
            <div class="${section}__close" id="${section}__close-${i}"></div>
            <img class="${section}__img" id="${section}__img-${i}" src="${imgUrl}" alt="">
            <div class="${section}__overlay" id="${section}__overlay-${i}">
                <div class="${section}__gifo-buttons-container" id="${section}__gifo-buttons-container-${i}">
                    <div class="${section}__gifo-button ${section}__gifo-button-favorite" id="${section}__gifo-button-favorite-${i}"></div>
                    <div class="${section}__gifo-button ${section}__gifo-button-download" id="${section}__gifo-button-download-${i}">
                        <a href="https://media4.giphy.com/media/${response[i].id}/giphy.gif" target="_self" rel="noopener noreferrer" id="${section}__gifourl-${i}"></a>
                    </div>
                    <div class="${section}__gifo-button ${section}__gifo-button-maximize" id="${section}__gifo-button-maximize-${i}"></div>
                </div>
                <div class="${section}__gifo-text-container" id="${section}__gifo-text-container-${i}">
                    <p class="${section}__gifo-owner">${owner}</p>
                    <p class="${section}__gifo-title">${title}</p>
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
        button.gifo(response, i, section)
    }
}