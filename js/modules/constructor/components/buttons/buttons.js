import {
    maximize
} from "./maximize/maximize.js"
import {
    favorite
} from "./favorite/favorite.js"
import {
    download
} from "./download/download.js"

export let buttons = (section, index, imgUrl, gifId, owner, title, id, arrayPush, favorites) => {
    maximize(section, index, imgUrl, gifId, owner, title, id, arrayPush)
    // favorite(section, index, favorites)
    // download(section, index, gifId)
}
