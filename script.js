let transSumEl = document.getElementById('currency')
let mountEl = document.getElementById('mount')
let sumEl = document.getElementById('sum')
let resultEl = document.getElementById('result')
let aud = document.getElementById('audio')


const sumCurrent = () =>{
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value)

    let res = transSum * mount

    resultEl.innerHTML = "Суммасы: " + res

}
sumEl.addEventListener('click',function(){
    sumCurrent();
    aud.play();
});