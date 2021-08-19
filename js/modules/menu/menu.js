import {
    click
} from "./items/items.js";
import {
    button
} from "./button/button.js";

export let menu = () => {
    let navigationMenu = document.getElementById('navigation__menu')
    let navigationButton = document.getElementById('navigation__button')
    click(navigationMenu, navigationButton)
    button(navigationMenu, navigationButton)
}
