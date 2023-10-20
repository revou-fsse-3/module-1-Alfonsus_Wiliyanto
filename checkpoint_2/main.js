let vidControl = document.getElementById("video")

function showControl() {
    vidControl.setAttribute("controls","controls")  
}

function hideControl() {
    vidControl.removeAttribute("controls")
}

let openModal = document.getElementById('airdropBtn')
let closeModal = document.getElementById('closeBtn')
let modal = document.getElementById('modalContainer')
let overlay = document.getElementById('modalOverlay')

openModal.addEventListener('click', ()=>{
    modal.classList.add('active')
    overlay.classList.add('active')
})
closeModal.addEventListener('click', ()=>{
    modal.classList.remove('active')
    overlay.classList.remove('active')
})

let redeemAlert = document.getElementById('redeem')
redeemAlert.addEventListener('click', ()=>{
        alert("You success to redeem airdrop !")
})