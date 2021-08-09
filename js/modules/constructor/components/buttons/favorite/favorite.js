export let favorite = (section, index, favorites) => {
    let favoriteBtn = document.getElementById(`${section}__gifo-button-favorite-${index}`)
    favoriteBtn.addEventListener('click', () => {
        favorites.push(array)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    })
}
