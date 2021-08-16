export function trendingTerms(array) {

    let container = document.getElementById('results__tags')
    let terms = array.data

    container.innerText = (`${terms[0]}, ${terms[1]}, ${terms[2]}, ${terms[3]}, ${terms[4]}`);

}
