const btnRecord = document.querySelector('.btn-record');
const pcontainer = document.querySelector('.pcontainer');
const body = document.querySelector('.body');

const voiceRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new voiceRecognition()

recognition.onstart = ()=>{
    pcontainer.innerHTML = 'Recording voice...'
};

recognition.onresult = (e)=>{
   let message = e.results[0][0].transcript
   readCondition(message)
};

const readCondition = ()=>{
    const voice = new SpeechSynthesisUtterance()
    if(message.includes('javascript')){
        voice.text = 'Good job brah'
    }else if(message.includes('oscuro')){
        body.classList.add('oscuro')
    }else{
        voice.text = message
    }
    window.SpeechSynthesis.speak(voice)
};

const read = (message)=>{
    const voice = new SpeechSynthesisUtterance()
    voice.text = message 
    window.SpeechSynthesis.speak(voice)
};

btnRecord.addEventListener('click', ()=>{
    reconocimiento.start()
});