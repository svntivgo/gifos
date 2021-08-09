export let button = () => {
    let logoBtn = document.getElementById('navigation__logo')
    logoBtn.addEventListener('click', () => {
        window.location.reload()
    })
}
