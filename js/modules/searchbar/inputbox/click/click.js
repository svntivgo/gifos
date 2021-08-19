export let click = (searchIcon, getterSearch, inputBox, limit, cleaner, constructor, autocompleteBox, resultsSection, arrayPush, favorites) => {
    searchIcon.addEventListener('click', () => {
        getterSearch(inputBox.value, limit).then(
            (response) => {
                let gifsArray = response.data
                cleaner(autocompleteBox, inputBox, searchIcon, resultsSection)
                let id = document.getElementById(`results__container`).childElementCount

                for (let i = 0; i < gifsArray.length; i++) {
                    arrayPush.push(gifsArray[i])
                    let trendings = new constructor(i, `results`, id, arrayPush)
                    trendings.gifoBuilder(favorites)
                    id++
                }

                if (theme === 'Modo Diurno') {
                    inputBox.style.border = "1px solid #572EE5"
                } else if (theme === 'Modo Nocturno') {
                    inputBox.style.border = "1px solid #FFFFFF"
                }
            }
        )
    })
}
