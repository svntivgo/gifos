export let overlay = (section, id) => {
    let gifoContainer = document.getElementById(`${section}__container`)
    let overlay = document.getElementById(`${section}__overlay-${id}`)


    gifoContainer.lastChild.addEventListener("mouseenter", (event) => {
        overlay.style.display = "flex"
        event.stopPropagation
    })
    gifoContainer.lastChild.addEventListener("mouseleave", (event) => {
        overlay.style.display = "none"
        event.stopPropagation
    })
}
