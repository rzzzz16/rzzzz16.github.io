const beartext = document.querySelector(".text");
const bearbox = document.querySelector(".box");
const userbox = document.querySelector(".box2");
const usertext = document.querySelector(".usertext");
const bear = document.querySelector(".bear");
const trash = document.querySelector(".trash");
let isTyping = false;

let bearClickCount = 0;
let userTextClickCount = 0;
bear.addEventListener("click", () => {
    if (bearClickCount === 0) {
    beartext.style.opacity = "1";
    bearbox.style.opacity = "1";
}else if (bearClickCount === 1) {
    trash.style.opacity="1"
    beartext.innerText="Why don’t I think twice?Cuz I got what I needed."
    bear.src="movingImages/bbbath.png"
 }else if (bearClickCount === 2) {
    usertext.style.opacity = "1";
    userbox.style.opacity = "1";
    beartext.style.opacity = "0";
    bearbox.style.opacity = "0";
 }else if (bearClickCount >= 3 && !userTextClickedTwice) {
    return; // Prevent clicks beyond 2 until the user clicks twice on user text
} else if (bearClickCount === 3) {
    beartext.innerText="I’m everyone’s best friend!!"
 }else if (bearClickCount === 4) {
    beartext.innerText=" I’ve been learning and observing you all—-adapting and mimicking, to be an ever-dependable companion!!"
 }else if (bearClickCount === 5) {
    window.location.href = "2-lastAnimation.html";
 }
 bearClickCount++;

});


usertext.addEventListener("click", () => {
    if(isTyping) {return}
if (userTextClickCount === 0) {
    typeText(usertext, "(🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔...)", 50)
}
else if(userTextClickCount === 1) {
 usertext.innerHTML = `<span class="red-bold">Am I not your...friend? Friends shouldn't lie! This is how ‘real friends’ act!</span>`;
}else if(userTextClickCount === 2) {
    beartext.style.opacity = "1";
    bearbox.style.opacity = "1";
    beartext.innerHTML=`<strong>Friends</strong>? Oh right, I’m your ‘best friend.’ Sorry, I… forgot for a moment…`
    bear.src="movingImages/bhbath.png"
    userTextClickedTwice = true;
}else if(userTextClickCount === 3) {
    
}else if(userTextClickCount === 4) {
    
}
userTextClickCount++;});



function typeText(element, text, speed = 50, callback) {
        element.innerText = ""; // Clear previous text
        let index = 0;
        isTyping = true;
        function type() {
            if (index < text.length) {
                element.innerText += text[index];
                index++;
                setTimeout(type, speed); // Continue typing
            } else {
                // Once typing is done, call the callback function
                isTyping = false;
                if (callback) callback();
            }
        }
    
        type(); // Start typing effect
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


    let storeText = JSON.parse(localStorage.getItem("secretList"))
    let selectedFilter = localStorage.getItem('selectedFilter');
    const button=document.querySelector(".Rbutton");
    const textContain=document.querySelector(".textContain");
    const imageContain=document.querySelector(".imageContain");

    button.addEventListener("click", () => {
        // Clear previous content
        imageContain.innerHTML = "";
        textContain.innerHTML = "";

        // Add an image if a filter is selected
        if (selectedFilter) {
            const filterImage = document.createElement("img");
            filterImage.src = `movingImages/${selectedFilter}.png`;
            imageContain.appendChild(filterImage);
        }

        // Add retrieved text
        storeText.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            textContain.appendChild(p);
        });

        button.style.opacity = 0; // Hide button after click
    });