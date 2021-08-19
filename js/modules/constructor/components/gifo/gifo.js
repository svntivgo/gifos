export let gifo = (section, id, imgUrl, gifId, owner, title) => {
    let sectionContainer = document.getElementById(`${section}__container`)
    let newContainer
    newContainer = document.createElement('div')
    newContainer.className = (`${section}__gifo-container`)
    newContainer.id = (`${section}__gifo-container-${id}`)
    newContainer.innerHTML = (`
            <div class="${section}__close" id="${section}__close-${id}"></div>
            <div class="${section}__img-overlay-container">
                <img class="${section}__img" id="${section}__img-${id}" src="${imgUrl}" alt="">
                <div class="${section}__overlay" id="${section}__overlay-${id}">
                    <div class="${section}__gifo-buttons-container" id="${section}__gifo-buttons-container-${id}">
                        <div class="${section}__gifo-button ${section}__gifo-button-favorite" id="${section}__gifo-button-favorite-${id}"></div>
                        <div class="${section}__gifo-button ${section}__gifo-button-download" id="${section}__gifo-button-download-${id}">
                            <a href="https://media4.giphy.com/media/${gifId}/giphy.gif" target="_self" rel="noopener noreferrer" id="${section}__gifourl-${id}"></a>
                        </div>
                        <div class="${section}__gifo-button ${section}__gifo-button-maximize" id="${section}__gifo-button-maximize-${id}"></div>
                    </div>
                    <div class="${section}__gifo-text-container" id="${section}__gifo-text-container-${id}">
                        <p class="${section}__gifo-owner">${owner}</p>
                        <p class="${section}__gifo-title">${title}</p>
                    </div>
                </div>
            </div>
        `)
    sectionContainer.appendChild(newContainer)
}
