export let maximize = (section, index, imgUrl, gifId, owner, title, id, arrayPush, favorites) => {
    let overlay = document.getElementsByClassName(`${section}__overlay`)
    overlay[id].addEventListener('click', () => {
        let maxContainer = document.getElementById('max__gifo-container')
        maxContainer.classList.toggle('max__gifo-container--maximized')
        maxContainer.innerHTML = (`
        <div class="max__next" id="max__next"></div>
        <div class="max__close" id="max__close"></div>
        <div class="max__img-overlay-container">
            <img class="max__img" id="max__img" src="${imgUrl}" alt="">
            <div class="max__overlay" id="max__overlay">
                <div class="max__gifo-buttons-container" id="max__gifo-buttons-container">
                    <div class="max__gifo-button max__gifo-button-favorite" id="max__gifo-button-favorite"></div>
                    <div class="max__gifo-button max__gifo-button-download" id="max__gifo-button-download">
                        <a href="https://media4.giphy.com/media/${gifId}/giphy.gif" target="_self" rel="noopener noreferrer" id="max__gifourl"></a>
                    </div>
                    <div class="max__gifo-button max__gifo-button-maximize" id="max__gifo-button-maximize"></div>
                </div>
                <div class="max__gifo-text-container" id="max__gifo-text-container">
                    <p class="max__gifo-owner">${owner}</p>
                    <p class="max__gifo-title">${title}</p>
                </div>
            </div>
        </div>
        `)
        document.getElementById(`max__close`).addEventListener('click', () => {
            maxContainer.innerHTML = ('<div class="max__close" id="max__close"></div>')
            maxContainer.classList.toggle('max__gifo-container--maximized')
        })

        document.getElementById(`max__gifo-button-favorite`).addEventListener('click', () => {
            favorites.push(arrayPush[id])
            localStorage.setItem('favorites', JSON.stringify(favorites))
        })
        document.getElementById(`max__gifo-button-download`).addEventListener('click', () => {
            window.open(`https://i.giphy.com/media/${arrayPush[id].id}/source.gif`, "_blank");
        })

        document.getElementById(`max__next`).addEventListener('click', () => {
            if (id < arrayPush.length-1) {
                id++
                let image = document.getElementById(`max__img`)
                let texts = document.getElementById('max__gifo-text-container')
                image.src = (`${arrayPush[id].images.preview_webp.url}`)
                texts.firstElementChild.innerHTML = (`${arrayPush[id].username}`)
                texts.lastElementChild.innerHTML = (`${arrayPush[id].title}`)
                return id
            }
        })
    })
    overlay[id].style.display = "none"
}
