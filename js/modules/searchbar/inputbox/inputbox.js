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

export let inputBox = (getterSearch, getterAutocomplete, limit, constructor, arrayPush, favorites) => {
    let resultsSection = document.getElementById('results')
    let searchIcon = document.getElementById('search__icon')
    let inputBox = document.getElementById('search__bar')
    let autocompleteBox = document.getElementById('search__autocomplete')
    let autocomplete = autocompleteConstructor
    let cleaner = sectionRestorer
    click(searchIcon, getterSearch, inputBox, limit, cleaner, constructor, autocompleteBox, resultsSection, arrayPush, favorites)
    keydown(inputBox, getterSearch, getterAutocomplete, limit, cleaner, constructor, searchIcon, autocomplete, autocompleteBox, resultsSection, arrayPush, favorites)
}
