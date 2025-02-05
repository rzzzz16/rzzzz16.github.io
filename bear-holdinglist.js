const talk=document.querySelector(".talk")
const bearface=document.querySelector(".hapyb")
const buttonb=document.querySelector(".buttonb")
const audio = document.getElementById("alertSound");
    

let clickCount=0
bearface.addEventListener("click", () => {
    if (clickCount === 0) {
        talk.innerText = "I am sure that we can definitely become good friends!";
    } else if (clickCount === 1) {
        talk.innerText = "Bye bye~";
    }else if (clickCount === 2) {
        talk.innerText = "and I WILL NEVER SEE YOU AGAIN Muahahahaha";
        talk.style.fontSize = "40px";
        bearface.src='badb.png'
    }else if (clickCount ===3) {
        bearface.style.display = "none";
        talk.style.display = "none";
        audio.play();
        setTimeout(() => {
            alert("ALEART: Your information has been leaked. Please leave this website immediately.");
        }, 100);  
        buttonb.style.opacity="1";}
        
    clickCount++;
});

//document.body.addEventListener("click", () => {
 //   alert("Your information has been leaked. Please leave this website immediately.");})