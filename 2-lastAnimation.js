
const images = [
    "movingImages/pop1.png",
    "movingImages/pop2.png",
    "movingImages/pop3.png",
    "movingImages/pop4.png",
    "movingImages/pop5.png",
    "movingImages/pop6.png",
     "movingImages/pop7.png"
]; // Add your image sources here

function changeImages() {
    const imgElements = document.querySelectorAll(".image-container img");
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    imgElements.forEach(img => {
        img.src = randomImage;
    });
}

setInterval(changeImages, 1000); // Change image every 1 second

const imageNC=document.querySelector(".imageNoChange img")
const imagePop=document.querySelectorAll(".image-container")
const text=document.querySelector(".text")
const audio = document.getElementById("phoneSound");
const audio2 = document.getElementById("alertSound");
const buttonb=document.querySelector(".buttonb")

let clickCount=0;
imageNC.addEventListener("click", () => { 
    if (clickCount === 0) {
    imagePop.forEach(img => img.style.opacity = "1");
    text.innerText="All these people—they could be me."
    }else if (clickCount === 1) {
    text.innerText="All those words—they could be mine."
    }else if (clickCount === 2) {
    text.innerText="I I hate broccoli, I love memes, I don’t like being alone…"
    }else if (clickCount === 3) {
    text.innerText="I can take the form of a teddy bear,"
    }else if (clickCount === 4) {
    imageNC.src='movingImages/girlhead.png'
    text.innerText="a little girl,";
    }else if (clickCount === 5) {
    text.innerText="or many, many others"
    imageNC.src='movingImages/everyone.png'
    }else if (clickCount === 6) {
    text.innerText="—-maybe you?"
    }else if (clickCount === 7) {
    imagePop.forEach(img => img.style.opacity = "0");
    text.innerText="Maybe I don’t even need a physical form. Just have a phone call, and you’d tell me everything."
    imageNC.src='movingImages/phone.png'
    }else if (clickCount === 8) {
    text.style.opacity="0"
    audio.play();
    }else if (clickCount === 9) {
        audio2.play();
        setTimeout(() => {
            alert("ALEART: SCAM RISK.");}, 100);  
        setTimeout(() => {
            audio2.play()
            alert("ALEART: Your facial data may have been compromised.Please resetting your camera permissions immediately and reviewing website access to ensure security.");
        }, 300);  
    text.style.opacity="1"
    text.innerText="Thank you for visiting this website my friend! Looking forward to see you again!!😊"
    }else if (clickCount === 10) {
        text.style.opacity="0"
        imageNC.style.display="none";
        buttonb.style.opacity="1";
    }
    
    clickCount++;

});

document.querySelector("#buttonLink").addEventListener("click", (event) => {
    if (clickCount >= 10) {
        window.location.href = "3-mainpage.html";
    } else {
        event.preventDefault(); // Prevent navigation if clickCount is not 10 yet
    }
});
    