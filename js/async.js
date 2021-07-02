export async function getSearchGiphyArray(path, key, input) {
    let response = await fetch(`${path}?api_key=${key}&q=${input}&limit=3`)
    response = await response.json()
    return response
}

export async function getTrendingGiphyArray(path, key) {
    let response = await fetch(`${path}?api_key=${key}&limit=1`)
    response = await response.json()
    return response
}

export async function getGiphyAutocomplete(path, term, key) {
    let response = await fetch(`${path}?api_key=${key}&q=${term}&limit=3`)
    response = await response.json()
    return response
}
