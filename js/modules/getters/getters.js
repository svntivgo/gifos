const apiKey = 'Ta4raQm67NO2mQWSPCHYL6O0EvldLRJO'
const giphyTrendingTerms = 'https://api.giphy.com/v1/trending/searches'
const giphySearchPath = 'https://api.giphy.com/v1/gifs/search'
const giphySearchSuggestionPath = 'https://api.giphy.com/v1/gifs/search/tags'
const giphyTrendingPath = 'https://api.giphy.com/v1/gifs/trending'

export async function getSearchGiphyArray(input, limit) {
    let response = await fetch(`${giphySearchPath}?api_key=${apiKey}&q=${input}&limit=${limit}`)
    response = await response.json()
    return response
}

export async function getTrendingGiphyArray(limit) {
    let response = await fetch(`${giphyTrendingPath}?api_key=${apiKey}&limit=${limit}`)
    response = await response.json()
    return response
}

export async function getGiphyAutocomplete(term, limit) {
    let response = await fetch(`${giphySearchSuggestionPath}?api_key=${apiKey}&q=${term}&limit=${limit}`)
    response = await response.json()
    return response
}

export async function getGiphyTrendingTerms() {
    let response = await fetch(`${giphyTrendingTerms}?api_key=${apiKey}`)
    response = await response.json()
    return response
}
