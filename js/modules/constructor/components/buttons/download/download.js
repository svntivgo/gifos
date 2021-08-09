export let download = (section, index, id) => {
    let downloadBtn = document.getElementById(`${section}__gifo-button-download-${index}`)
    downloadBtn.addEventListener('click', () => {
        window.open(`https://i.giphy.com/media/${id}/source.gif`, "_blank");
    })
}
