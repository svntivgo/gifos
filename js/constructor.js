let favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem('favorites')) : []

/**
 * Draws the gifos with overlay and buttons functionality
 * @param {JSON} response is the array that contains all gifs info
 * @param {string} section is the section where be drawed the gifs
 */

export class Gif {
    constructor(index, array, section) {
        this.array = array
        this.index = index
        this.section = section
        this.imgUrl = array.images.preview_webp.url
        this.owner = array.username
        this.title = array.title
        this.id = array.id
    }
    containerBuilder() {
        let sectionContainer = document.getElementById(`${this.section}__container`)
        let newContainer
        newContainer = document.createElement('div')
        newContainer.className = (`${this.section}__gifo-container`)
        newContainer.id = (`${this.section}__gifo-container-${this.index}`)
        newContainer.innerHTML = (`
            <div class="${this.section}__close" id="${this.section}__close-${this.index}"></div>
            <img class="${this.section}__img" id="${this.section}__img-${this.index}" src="${this.imgUrl}" alt="">
            <div class="${this.section}__overlay" id="${this.section}__overlay-${this.index}">
                <div class="${this.section}__gifo-buttons-container" id="${this.section}__gifo-buttons-container-${this.index}">
                    <div class="${this.section}__gifo-button ${this.section}__gifo-button-favorite" id="${this.section}__gifo-button-favorite-${this.index}"></div>
                    <div class="${this.section}__gifo-button ${this.section}__gifo-button-download" id="${this.section}__gifo-button-download-${this.index}">
                        <a href="https://media4.giphy.com/media/${this.id}/giphy.gif" target="_self" rel="noopener noreferrer" id="${this.section}__gifourl-${this.index}"></a>
                    </div>
                    <div class="${this.section}__gifo-button ${this.section}__gifo-button-maximize" id="${this.section}__gifo-button-maximize-${this.index}"></div>
                </div>
                <div class="${this.section}__gifo-text-container" id="${this.section}__gifo-text-container-${this.index}">
                    <p class="${this.section}__gifo-owner">${this.owner}</p>
                    <p class="${this.section}__gifo-title">${this.title}</p>
                </div>
            </div>
        `)
        sectionContainer.appendChild(newContainer)
    }
    overlayListener() {
        let gifoContainer = document.getElementsByClassName(`${this.section}__gifo-container`)
        let overlay = document.getElementsByClassName(`${this.section}__overlay`)
        gifoContainer[this.index].addEventListener("mouseenter", (event) => {
            overlay[this.index].style.display = "flex"
            event.stopPropagation
        })
        overlay[this.index].addEventListener("mouseleave", (event) => {
            overlay[this.index].style.display = "none"
            event.stopPropagation
        })
        overlay[this.index].style.display = "none"
    }
    buttons() {
        let favoriteBtn = document.getElementById(`${this.section}__gifo-button-favorite-${this.index}`)
        let downloadBtn = document.getElementById(`${this.section}__gifo-button-download-${this.index}`)
        let maximizeBtn = document.getElementById(`${this.section}__gifo-button-maximize-${this.index}`)
        let closeBtn = document.getElementById(`${this.section}__close-${this.index}`)
        favoriteBtn.addEventListener('click', () => {
            favorites.push(this.array)
            localStorage.setItem('favorites', JSON.stringify(favorites))
        })
        downloadBtn.addEventListener('click', () => {
            window.open (`https://i.giphy.com/media/${this.id}/source.gif`, "_blank");
        })
        closeBtn.addEventListener('click', () => {
            for (let i = 0; i < elementIdMax.length; i++) {
                document.getElementById(elementIdMax[i]).classList.toggle(`${elementClassMax[i]}--max`)
            }
        })
    }
}