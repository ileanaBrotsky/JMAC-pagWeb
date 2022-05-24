const $inputList=document.querySelectorAll('input')
const $textarea=document.querySelector('#textarea__contacto')
const $overlay=document.querySelector('#div__contacto')

$textarea.addEventListener('focus',focus)
$textarea.addEventListener('blur',blur)
$inputList.forEach($input=>{
$input.addEventListener('focus',focus)
$input.addEventListener('blur',blur)
})

function focus(event) {
$overlay.classList.add('is-active')
}
function blur(event) {
   
    $overlay.classList.remove('is-active')
}