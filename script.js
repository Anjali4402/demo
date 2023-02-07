console.log('screen height')
console.log(screen.width)
const screenWidth = document.getElementById('screen_width')
const screenHeight = document.getElementById('screen_height')

const knowScreen = ()=>{
    screenHeight.innerText = screen.height;
    screenWidth.innerText = screen.width;
}