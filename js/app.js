//disable loading
function hide() {
    loader.classList.add('slideOutDown')
    loader.style.display = 'none'
    container.style.visibility = 'visible'
}
setTimeout(() => { hide() }, 3000);