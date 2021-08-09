export let autocompleteConstructor = (autocompleteBox) => {
    autocompleteBox.innerHTML = ""
    for (let i = 0; i < 4; i++) {
        autocompleteBox.style.display = "block"
        // let tag = response[i].name
        let tag = "gatos"
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
