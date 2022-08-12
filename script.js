let song = document.getElementById('mySong')
let icon = document.getElementById('icon')
icon.onclick = () => {
    if (mySong.paused) {
        mySong.play()
        icon.src = 'pause.png'
    }
    else {
        mySong.pause()
        icon.src = 'play.png'
    }
}
let navbar = document.querySelector('.navbar')
let ul = document.querySelector('.ul')
let content = document.querySelector('.content')
let hamb = document.querySelector('.hamburger')
hamb.onclick = () => {
    navbar.classList.toggle('respNav')
    ul.classList.toggle('respUl')
    content.classList.toggle('respContent')
}