export let autocompleteConstructor = (autocompleteBox, autocompleteArray) => {
    autocompleteBox.innerHTML = ""
    for (let i = 0; i < 4; i++) {
        autocompleteBox.style.display = "block"
        let tag = autocompleteArray[i].name
        let tagBox
        tagBox = document.createElement('div')
        tagBox.className = "search__tag-container"
        tagBox.innerHTML = (`
                            <div class="search__tag-icon"></div>
                            <p class="search__autocomplete-tag">${tag}</p>
        `)
        autocompleteBox.appendChild(tagBox)
    }
}
