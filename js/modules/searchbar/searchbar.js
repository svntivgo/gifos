import { inputBox } from "./inputbox/inputbox.js";

export let searchBar = (getterSearch, getterAutocomplete, limit, constructor, arrayPush, favorites) => {
    inputBox(getterSearch, getterAutocomplete, limit, constructor, arrayPush, favorites)
}
