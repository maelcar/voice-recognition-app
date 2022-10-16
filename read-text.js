const text = document.querySelector('.text');
const btnRead = document.querySelector('.btn-read');

btnRead.addEventListener('click', ()=>{
    const locutor = new SpeechSynthesisUtterance()
    const voice = window.SpeechSynthesis
    locutor.text = text.value 
    voice.speak(locutor)
})

