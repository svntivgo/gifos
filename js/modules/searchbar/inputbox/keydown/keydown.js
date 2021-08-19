export let keydown = (inputBox, getterSearch, getterAutocomplete, limit, cleaner, constructor, searchIcon, autocomplete, autocompleteBox, resultsSection, arrayPush, favorites) => {
    inputBox.addEventListener('keydown', (event) => {
        let theme = localStorage.getItem('theme')

        if (event.key === 'Enter') {
            getterSearch(inputBox.value, limit).then(
                (response) => {
                    let gifsArray = response.data
                    cleaner(autocompleteBox, inputBox, searchIcon, resultsSection)
                    let id = document.getElementById(`results__container`).childElementCount
                    console.log(gifsArray);
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
        } else if (inputBox.value == '') {
            cleaner(autocompleteBox, inputBox, searchIcon, resultsSection)
            if (theme === 'Modo Diurno') {
                inputBox.style.border = "1px solid #572EE5"
            } else if (theme === 'Modo Nocturno') {
                inputBox.style.border = "1px solid #FFFFFF"
            }
        } else {
            getterAutocomplete(inputBox.value, 4)
            .then(
                (response) => {
                    inputBox.style.borderRadius = "27px 27px 0 0"
                    searchIcon.style.marginRight = "auto"
                    searchIcon.style.marginLeft = "2rem"

                    let autocompleteArray = response.data
                    autocomplete(autocompleteBox, autocompleteArray)
                }
            )
        }
    })
}
