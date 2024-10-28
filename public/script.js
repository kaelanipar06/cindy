// membuat pilihan rsvp 
const datang = document.querySelector('.konfirmasi #datang')
const tidak = document.querySelector('.konfirmasi #tidak')

datang.addEventListener('change',()=>{
    if(datang.checked){
        tidak.checked = false
    }
})
tidak.addEventListener('change',()=>{
    if(tidak.checked){
        datang.checked = false
    }
})

// musik
const icon_musik = document.querySelector('.icon_musik')
const musik = document.querySelector('audio')
let jalan = false

icon_musik.addEventListener('click',function(){
    if(!jalan){
        icon_musik.classList.add('bi-play-circle-fill')
        musik.pause()
    }else{
        icon_musik.classList.remove('bi-play-circle-fill')
        putarMusik()
    }
    jalan = !jalan
})

// membuka undangan
const btn = document.querySelector('.btn')
const pembuka = document.querySelector('.pembuka')
const content = document.querySelector('.content')
btn.addEventListener('click',function(){
    pembuka.classList.add('hilang')
    content.classList.remove('hilang')
    putarMusik()
})


// fungsi musik
function putarMusik(){
    musik.play()
    musik.volume = .4
}