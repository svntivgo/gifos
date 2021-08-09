import { inputBox } from "./inputbox/inputbox.js";

export let searchBar = (getterSearch, getterAutocomplete, limit, constructor) => {
    inputBox(getterSearch, getterAutocomplete, limit, constructor)
}
