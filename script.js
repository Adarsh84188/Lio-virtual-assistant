let button=document.querySelector("#button")
let content=document.querySelector("#content")
let Leo=document.querySelector("#Leo")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }

}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript)
}

button.addEventListener("click",()=>{
    recognition.start()
    button.style.display="none"
    Leo.style.display="block"
})
function takeCommand(message){
    button.style.display="flex"
    Leo.style.display="none"
    if(message.includes("hello") || message.includes("hey") || message.includes("hii")||message.includes("Hello")||message.includes("Hey")||message.includes("Hii")){
        speak("hello sir i'm Leo, virtual Assistant of Tech Innovators, what can i help you?");
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant of Tech Innovators, how an i help you sir? ");
    }
    else if(message.includes("how are you?")||message.includes("how are you")||message.includes("How are you?")||message.includes("How are you")){
        speak("i'm good, what's about you")
    }
    else if(message.includes("open YouTube")){
        speak("opening YouTube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open chrome") || message.includes("open browser")){
        speak("opening chrome")
        window.open("https://www.chrome.com")
    }
    else if(message.includes("please tell me about BIT college") || message.includes("tell me about BIT college")||message.includes("BIT college ke bare mein batao")||message.includes("college ke bare me batao")){
        speak("There are some information about BIT college, BIT college is establish in 2000. We have 20+ years of experience in education, and we still focus on continues improvement and always open to adopt new initiatives & things to provide better education.  We have great track record as our placement cell works round the clock to get our students placed in good companies.")
    }
    else if(message.includes("please tell me about tech Innovators")||message.includes("tell me about tech innovators")||message.includes("about tech innovators")){
        speak("there are 5 team members in tech Innovators, Anup Tiwari, Adarsh Yadav, Abhishek soni,   Chirag Sharma, Deepesh Sharma")
    }
    else if(message.includes("")||message.includes("")){
        speak("")
    }
    else if(message.includes("please open google") ||message.includes("open google")|| message.includes("open google.")|| message.includes("open google.")){
    speak("opening google")
    window.open("https://www.google.com")
}
    else if(message.includes("please open facebook")||message.includes("open facebook")|| message.includes("open facebook.")|| message.includes("please open facebook.")){
    speak("opening facebook")
    window.open("https://www.facebook.com")
}
     else if(message.includes("Please open instagram.")|| message.includes("Open instagram.")|| message.includes("Open Instagram")|| message.includes("Please open Instagram.")){
    speak("opening instagram")
    window.open("https://www.instagram.com");
}
     else if(message.includes("Who are you?")|| message.includes("who are you")){
    speak("Leo is a virtual assistant created by tech innovators")

}
    else if(message.includes("please open calculator") || message.includes("open calculator")|| message.includes("please open Instagram.")|| message.includes("open Instagram.")){
    window.open("calculator://")
}
     else if(message.includes("please open camera")||message.includes("open camera")){
    window.open("camera://")
}
     if( window.open(`https://www.google.com/search?q=${message}`)) {
    speak(`This is i got on internet regarding ${message}`)
     window.open(`https://www.google.com/search?pglt=297&q=${message}`);
}
// else if(message.includes("open google")) {
//     speak("opening google")
//     window.open("https://www.google.com/search?q=google&rlz=1C1GCEA_enIN1102IN1103&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDwgBEC4YExjHARjRAxiABDIJCAIQABgTGIAEMgkIAxAAGBMYgAQyCQgEEAAYExiABDIJCAUQABgTGIAEMgkIBhAAGBMYgAQyCQgHEAAYExiABDIJCAgQABgTGIAEMgkICRAAGBMYgATSAQk0MzgyajBqMTWoAgiwAgHxBdNo9Bi1MHhX8QXTaPQYtTB4Vw&sourceid=chrome&ie=UTF-8/")
// }
}