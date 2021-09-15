export function gifoCreator() {
    let createBtn = document.getElementById('navigation__new-button')
    let sectionsToDelete = [
        document.getElementById('search'),
        document.getElementById('results__title'),
        document.getElementById('results__tags'),
        document.getElementById('trending')
    ]

    createBtn.addEventListener('click', () => {
        sectionsToDelete.forEach(element => {
            cleaner(element)
        });
        template()
    })
}

function cleaner(section) {
    section.innerHTML = (``)
}

function template() {
    let resultsContainer = document.getElementById('results__container')
    let templateBox
    templateBox = document.createElement('div')
    templateBox.className = ('builder__box')
    templateBox.innerHTML = (`
        <div class = "builder__img-container">
            <img class = "builder__img-left" src = "./svg/camara.svg" alt = "camara">
            <div class = "builder__img-left-gradient"></div>
        </div>
        <div class = "builder__container">
            <div class = "builder__frame">
                <div class = "builder__corner one"></div>
                <div class = "builder__corner two"></div>
                <div class = "builder__corner three"></div>
                <div class = "builder__corner four"></div>
                <div class = "builder__content" id = "builder__content"></div>
                <div class = "builder__overlay" id = "builder__overlay"></div>
            </div>
            <div class = "builder__info">
                <div class = "builder__info-buttons-container">
                    <div class = "builder__info-button one" id = "builder__button-1">1</div>
                    <div class = "builder__info-button two" id = "builder__button-2">2</div>
                    <div class = "builder__info-button three" id = "builder__button-3">3</div>
                </div>
                <div class = "builder__chronometer" id = "builder__chronometer"></div>
            </div>
            <div class="builder__separator"></div>
        </div>
        <div class = "builder__img-container">
            <img class="builder__img-right" src="./svg/pelicula.svg" alt="pelicula">
        </div>
        <div class = "builder__button" id = "builder__button"></div>
    `)

    resultsContainer.appendChild(templateBox)
}
