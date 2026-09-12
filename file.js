let btn=document.querySelector('#btn');
let content=document.querySelector('#content');

function speak(text) {
let ts=new SpeechSynthesisUtterance(text);// Creating object of SpeechSynthesisUtterance
ts.lang='en-IN';
ts.rate=1;
ts.pitch=1;
ts.volume=1;
window.speechSynthesis.speak(ts);

}

function wishMe() {
    let today = new Date();
    let hour = today.getHours();

    if (hour >= 0 && hour < 12) {
        speak('Good Morning');
    } else if (hour >= 12 && hour < 17) {
        speak('Good Afternoon');
    } else if (hour >= 17 && hour < 21) {
        speak('Good Evening');
    } else {
        speak('Good Night');
    }
}


btn.addEventListener('load', () => {
    wishMe();
});