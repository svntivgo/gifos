export let sectionRestorer = (autocompleteBox, inputBox, searchIcon, resultsSection) => {
    autocompleteBox.style.display = "none"
    inputBox.style.borderRadius = "27px"
    inputBox.style.borderBottom = "1px solid #572EE5"
    searchIcon.style.marginRight = "2rem"
    searchIcon.style.marginLeft = "auto"
    resultsSection.innerHTML = (`
        <h2 class="results__title" id="results__title">Trending:</h2>
        <h3 class="results__tags" id="results__tags">Reactions, Entertainment, Sports, Stickers, Artists</h3>
        <div class="results__container" id="results__container">
            <!-- all gifos will be here -->
        </div>
    `)
}
