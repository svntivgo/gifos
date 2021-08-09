export let click = (searchIcon, getterSearch, inputBox, limit, cleaner, constructor, autocompleteBox, resultsSection) => {
    searchIcon.addEventListener('click', () => {
        getterSearch(inputBox.value, limit).then(
            (response) => {
                let gifsArray = response.data
                cleaner(autocompleteBox, inputBox, searchIcon, resultsSection)
                for (let i = 0; i < gifsArray.length; i++) {
                    let onClick = new constructor.Gif(i, gifsArray, 'results')
                    onClick.containerBuilder()
                }
            }
        )
    })
}
