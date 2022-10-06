function saklar() {
    let toogle1 = document.getElementById('checked-toggle1')
    let toogle2 = document.getElementById('checked-toggle2')
    let toogle3 = document.getElementById('checked-toggle3')
    let toogle4 = document.getElementById('checked-toggle4')

    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')
    let lampu3 = document.getElementById('lampu3')
    let lampu4 = document.getElementById('lampu4')
    
    if (toogle1.checked){
        lampu1.src = 'assets/image/on.gif'
    }else{
        lampu1.src = 'assets/image/off.gif'
    }
    if (toogle2.checked){
        lampu2.src = 'assets/image/on.gif'
    }else{
        lampu2.src = 'assets/image/off.gif'
    }
    if (toogle3.checked){
        lampu3.src = 'assets/image/on.gif'
    }else{
        lampu3.src = 'assets/image/off.gif'
    }
    if (toogle4.checked){
        lampu4.src = 'assets/image/on.gif'
    }else{
        lampu4.src = 'assets/image/off.gif'
    }
}
function saklarutama(){

    let toogle5 = document.getElementById('checked-toggle5')

    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')
    let lampu3 = document.getElementById('lampu3')
    let lampu4 = document.getElementById('lampu4')

    if (toogle5.checked){
        lampu1.src = 'assets/image/on.gif'
        lampu2.src = 'assets/image/on.gif'
        lampu3.src = 'assets/image/on.gif'
        lampu4.src = 'assets/image/on.gif'
    }else{
        lampu1.src = 'assets/image/off.gif'
        lampu2.src = 'assets/image/off.gif'
        lampu3.src = 'assets/image/off.gif'
        lampu4.src = 'assets/image/off.gif'
    }
}
// saklar tamu
function saklarMakan() {
    let toogle1makan = document.getElementById('checked-toggle1makan')


    let lampu1makan = document.getElementById('lampu1makan')

    
    if (toogle1makan.checked){
        lampu1makan.src = 'assets/image/on.gif'
    }else{
        lampu1makan.src = 'assets/image/off.gif'
    }

}
// saklar keluarga
function saklarKeluarga() {
    let toogle1 = document.getElementById('checked-toggle1keluarga')
    let toogle2 = document.getElementById('checked-toggle2keluarga')
    let toogle3 = document.getElementById('checked-toggle3keluarga')

    let lampu1 = document.getElementById('lampu1keluarga')
    let lampu2 = document.getElementById('lampu2keluarga')
    let lampu3 = document.getElementById('lampu3keluarga')
    
    if (toogle1.checked){
        lampu1.src = 'assets/image/on.gif'
    }else{
        lampu1.src = 'assets/image/off.gif'
    }
    if (toogle2.checked){
        lampu2.src = 'assets/image/on.gif'
    }else{
        lampu2.src = 'assets/image/off.gif'
    }
    if (toogle3.checked){
        lampu3.src = 'assets/image/on.gif'
    }else{
        lampu3.src = 'assets/image/off.gif'
    }
}
function saklarUtamaKeluarga(){

    let toogle5 = document.getElementById('checked-toggle5keluarga')

    let lampu1 = document.getElementById('lampu1keluarga')
    let lampu2 = document.getElementById('lampu2keluarga')
    let lampu3 = document.getElementById('lampu3keluarga')
    if (toogle5.checked){
        lampu1.src = 'assets/image/on.gif'
        lampu2.src = 'assets/image/on.gif'
        lampu3.src = 'assets/image/on.gif'
    }else{
        lampu1.src = 'assets/image/off.gif'
        lampu2.src = 'assets/image/off.gif'
        lampu3.src = 'assets/image/off.gif'
    }
}
// saklar tidur
function saklarTidur() {
    let toogle1 = document.getElementById('checked-toggle1tidur')
    let toogle2 = document.getElementById('checked-toggle2tidur')


    let lampu1 = document.getElementById('lampu1tidur')
    let lampu2 = document.getElementById('lampu2tidur')

    if (toogle1.checked){
        lampu1.src = 'assets/image/on.gif'
    }else{
        lampu1.src = 'assets/image/off.gif'
    }
    if (toogle2.checked){
        lampu2.src = 'assets/image/on.gif'
    }else{
        lampu2.src = 'assets/image/off.gif'
    }
}
function saklarUtamaTidur(){

    let toogle5 = document.getElementById('checked-toggle5tidur')

    let lampu1 = document.getElementById('lampu1tidur')
    let lampu2 = document.getElementById('lampu2tidur')
    if (toogle5.checked){
        lampu1.src = 'assets/image/on.gif'
        lampu2.src = 'assets/image/on.gif'

    }else{
        lampu1.src = 'assets/image/off.gif'
        lampu2.src = 'assets/image/off.gif'

    }
}