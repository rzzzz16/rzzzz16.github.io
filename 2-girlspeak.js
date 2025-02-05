const talk=document.querySelector(".talk")
const button=document.querySelector(".button")
const girl=document.querySelector(".girl")
const images = document.querySelectorAll('.filterImage');

let clickCount=0
let selectedFilter = null;

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('selected'));
        image.classList.add('selected');
        selectedFilter = image.getAttribute('data-id');
        localStorage.setItem('selectedFilter', selectedFilter);
        button.disabled = false; 
        
        button.style.opacity = "1";
        talk.innerText = "Seems like you are ready to go.";
       
        
    });
});

girl.addEventListener("click", () => {
    if (clickCount === 0) {
        talk.style.opacity = "1";
    } else if (clickCount === 1) {
        talk.innerText = "(sign)";
    }else if (clickCount === 2) {
        talk.innerText = "You said your information was leaked?! That's why I warned you.";
    }else if (clickCount ===3) {
        talk.innerText = "Well...You are not the first victim. He has been doing this for a while";
     }else if (clickCount ===4) {
        talk.innerText = "He gathered the information you shared with him and sold it to the dark overlord of the internet. And now... now they are using that information to further their own plans!";
    }else if (clickCount ===5) {
        talk.innerText = "You are asking me what to do? You must find Teddy and take back your information!";
    }else if (clickCount ===6) {
        talk.innerText = "Who am I?";
    }else if (clickCount ===7) {
        talk.innerText = "We were once two innocent, carefree digital friends, but under the temptation of the overlord, he gradually walked down this path. As his friend... no, his former friend—-I can no longer atop him. All I can do is try my best to warn users. But (sigh), many still fall into the trap..";
    }else if (clickCount ===8) {
        talk.innerText = "Don’t worry—even if he discovers you, he won’t harm you. He’s bound by his programming and can only present himself as a friendly figure. I’ll help you! We can do a video call, and I’ll show you our world as I walk through it…";
    }else if (clickCount ===9) {
        talk.innerText = "I suggest you wearing a mask so they won't find who you are. See here are some choices";
        document.querySelectorAll('.filterImage').forEach(image => {
            image.style.opacity = "1"; // Show the images
        });  
        button.addEventListener('click', () => {
        // Redirect to the next page
            window.location.href = "2-facemesh.html";
        })
    }
   
    clickCount++;
});


