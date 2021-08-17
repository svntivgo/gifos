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
    maximize(section, index, imgUrl, gifId, owner, title, id, arrayPush, favorites)
    favorite(section, id, favorites, arrayPush)
    // download(section, index, gifId)
}
