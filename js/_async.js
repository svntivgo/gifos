export {getSearchGiphyArray, getTrendingGiphyArray, getGiphyAutocomplete}

async function getSearchGiphyArray(path, key, input) {
    let response = await fetch(`${path}?api_key=${key}&q=${input}`)
    response = await response.json()
    return response
}

async function getTrendingGiphyArray(path, key) {
    let response = await fetch(`${path}?api_key=${key}&limit=3`)
    response = await response.json()
    return response
}

async function getGiphyAutocomplete(path, term, key) {
    let response = await fetch(`${path}?api_key=${key}&q=${term}`)
    response = await response.json()
    return response
}