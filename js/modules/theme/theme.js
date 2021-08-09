import { loader } from "./loader/loader.js";
import { switcher } from "./switcher/switcher.js";

export let theme = () => {
    let localTheme = localStorage.getItem('theme')
    let darkModeButton = document.getElementById('navigation__dark-mode')
    let body = document.getElementById('body')
    loader(darkModeButton, body, localTheme)
    switcher(darkModeButton, body)
}
