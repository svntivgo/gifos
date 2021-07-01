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
        this.acumulador = index
        this.section = section
        this.imgUrl = array[index].images.preview_webp.url
        this.owner = array[index].username
        this.title = array[index].title
        this.id = array[index].id
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
        favoriteBtn.addEventListener('click', () => {
            favorites.push(this.array)
            localStorage.setItem('favorites', JSON.stringify(favorites))
        })
        downloadBtn.addEventListener('click', () => {
            window.open (`https://i.giphy.com/media/${this.id}/source.gif`, "_blank");
        })
        maximizeBtn.addEventListener('click', () => {
            let maxContainer = document.getElementById('max__gifo-container')
            maxContainer.classList.toggle('max__gifo-container--maximized')
            maxContainer.innerHTML = (`
            <div class="max__next" id="max__next"></div>
            <div class="max__close" id="max__close"></div>
            <img class="max__img" id="max__img" src="${this.imgUrl}" alt="">
            <div class="max__overlay" id="max__overlay-${this.index}">
                <div class="max__gifo-buttons-container" id="max__gifo-buttons-container-${this.index}">
                    <div class="max__gifo-button max__gifo-button-favorite" id="max__gifo-button-favorite-${this.index}"></div>
                    <div class="max__gifo-button max__gifo-button-download" id="max__gifo-button-download-${this.index}">
                        <a href="https://media4.giphy.com/media/${this.id}/giphy.gif" target="_self" rel="noopener noreferrer" id="max__gifourl-${this.index}"></a>
                    </div>
                    <div class="max__gifo-button max__gifo-button-maximize" id="max__gifo-button-maximize-${this.index}"></div>
                </div>
                <div class="max__gifo-text-container" id="max__gifo-text-container-${this.index}">
                    <p class="max__gifo-owner">${this.owner}</p>
                    <p class="max__gifo-title">${this.title}</p>
                </div>
            </div>
            `)
            document.getElementById(`max__close`).addEventListener('click', () => {
                this.acumulador = this.index
                maxContainer.innerHTML = ('<div class="max__close" id="max__close"></div>')
                maxContainer.classList.toggle('max__gifo-container--maximized')
            })

            document.getElementById(`max__gifo-button-favorite-${this.index}`).addEventListener('click', () => {
                console.log(this.array[this.acumulador]);
                favorites.push(this.array[this.acumulador])
                localStorage.setItem('favorites', JSON.stringify(favorites))
            })
            document.getElementById(`max__gifo-button-download-${this.index}`).addEventListener('click', () => {
                window.open (`https://i.giphy.com/media/${this.array[this.acumulador].id}/source.gif`, "_blank");
            })

            document.getElementById(`max__next`).addEventListener('click', () => {
                this.acumulador++
                let image = document.getElementById(`max__img`)
                image.src = (`${this.array[this.acumulador].images.preview_webp.url}`)
            })
        })
    }
}