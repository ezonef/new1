let newBlock

let inputWidth = document.getElementById('width')
let inputHeight =document.getElementById('height')
let inputcolor =document.getElementById('color')
let inputround = document.getElementById('round')
let container = document.querySelector('.box')

let add_y
let add_x



let btnCreate = document.querySelector('.btn--create')
let btnClear = document.querySelector('.btn--clear')
let BtnUp = document.querySelector('.btnup')
let BtnRight = document.querySelector('.btnright')
let BtnLeft = document.querySelector('.btnleft')
let BtnDown = document.querySelector('.btndown')

btnCreate.addEventListener('click', () => {
    let iWidth = inputWidth.value
    let iHeight = inputHeight.value
    let icolor = inputcolor.value
    let iround = inputround.checked
    add_y = 0
    add_x = 0

    newBlock = document.createElement('div')
    newBlock.style.width = iWidth + 'px'
    newBlock.style.height = iHeight + 'px'
    newBlock.style.background = icolor
    container.prepend(newBlock);
    if (iround) { 
        newBlock.style.borderRadius =  '5px'
    }
})

btnClear.addEventListener('click', clear)

function clear () {
    newBlock.remove()
}


BtnUp.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    add_y += 10
    newBlock.style.top = add_y + 'px'
    if (add_y < 0){
        newBlock.style.top = 0
    }
})

BtnRight.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    add_x += 10
    newBlock.style.right = add_x + 'px'
})

BtnLeft.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    add_x -= 10
    newBlock.style.left = add_x + 'px'
})

BtnDown.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    add_y -= 10
    newBlock.style.bottom = add_y + 'px'
})