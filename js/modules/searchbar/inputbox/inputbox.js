import {
    autocompleteConstructor
} from "./autocomplete/autocomplete.js";
import {
    sectionRestorer
} from "./sectionrestorer/sectionrestorer.js";
import {
    click
} from "./click/click.js";
import {
    keydown
} from "./keydown/keydown.js";

export let inputBox = (getterSearch, getterAutocomplete, limit, constructor) => {
    let resultsSection = document.getElementById('results')
    let searchIcon = document.getElementById('search__icon')
    let inputBox = document.getElementById('search__bar')
    let autocompleteBox = document.getElementById('search__autocomplete')
    let autocomplete = autocompleteConstructor
    let cleaner = sectionRestorer
    click(searchIcon, getterSearch, inputBox, limit, cleaner, constructor, autocompleteBox, resultsSection)
    keydown(inputBox, getterSearch, limit, cleaner, constructor, searchIcon, autocomplete, autocompleteBox, resultsSection)
}
