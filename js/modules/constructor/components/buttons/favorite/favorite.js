export let favorite = (section, id, favorites, arrayPush) => {

    let favorite = favorites.find((fav) => fav.id === arrayPush[id].id)
    let favoriteBtn = document.getElementById(`${section}__gifo-button-favorite-${id}`)

    if (favorite.id === arrayPush[id].id) {
        favoriteBtn.classList.add(`${section}__gifo-button-favorite-saved`)
    }

    favoriteBtn.addEventListener('click', () => {

        if (favorite.id !== arrayPush[id].id) {

            favorites.push(arrayPush[id])
            localStorage.setItem('favorites', JSON.stringify(favorites))

        }

    })
}
