import {
    gifo
} from "./components/gifo/gifo.js";
import {
    overlay
}
from "./components/overlay/overlay.js"
import {
    buttons
}
from "./components/buttons/buttons.js";

/**falta por optimizar, funciones para listeners
 * Draws the gifos with overlay and buttons functionality
 * @param {JSON} response is the array that contains all gifs info
 * @param {string} section is the section where be drawed the gifs
 */

export class Gifo {
    constructor(index, section, id, arrayPush) {
        this.index = index
        this.section = section
        this.id = id
        this.arrayPush = arrayPush
        this.imgUrl = arrayPush[id].images.preview_webp.url
        this.owner = arrayPush[id].username
        this.title = arrayPush[id].title
        this.gifId = arrayPush[id].id
    }

    gifoBuilder(favorites) {

        gifo (
            this.section,
            this.id,
            this.imgUrl,
            this.gifId,
            this.owner,
            this.title
            )

        buttons (
            this.section,
            this.index,
            this.imgUrl,
            this.gifId,
            this.owner,
            this.title,
            this.id,
            this.arrayPush,
            favorites
            )

        overlay (
            this.section,
            this.id
            )

    }
}
