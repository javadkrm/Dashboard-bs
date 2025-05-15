let darkModeBtn = document.getElementById('darkModeBtn')
let lightModeBtn = document.getElementById('lightModeBtn')


darkModeBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('theme', 'dark')
})

lightModeBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    localStorage.setItem('theme', 'light')
})


window.onload = function () {
    let themeColor = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-bs-theme', themeColor)
}
