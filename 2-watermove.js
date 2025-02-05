const images = document.querySelectorAll('.movingImage');
const speed=2;
let textClickState = 0;


// Initial positions for each image
const initialPositions = Array.from(images).map((_, index) => index * 200);
let yPositions = new Array(initialPositions.length).fill(0)
console.log(yPositions)
images.forEach((img, index) => {
    img.style.left = `${initialPositions[index]}px`; // Set starting positions
    img.style.top = `0px`; // Set starting positions
});
function lerp(start, end, amt){
    return (1 - amt) * start + amt * end;
}
function moveImages() {
    images.forEach((img, index) => {
        // Parse the current `left` value
        let currentLeft = parseInt(img.style.left, 10);
        let currentTop = parseInt(img.style.top, 10);
        let lerpY = lerp(currentTop, yPositions[index], 0.5)
        // Move the image 2px to the right
        currentLeft += 2;
        //currentTop += 2
        // If the image goes beyond the screen, reset its position to the left side
        if (currentLeft > window.innerWidth) {
            currentLeft = -img.width;
        }

        // Apply the updated position
        img.style.left = `${currentLeft}px`;
        img.style.top = `${lerpY}px`;
    });
    images.forEach((img, index) => {
        const randomY = Math.sin(Date.now() * 0.005 + index) * 50 + 25;
        yPositions[index] = randomY;
    })
    console.log(yPositions)

    // Call this function again after 16ms (~60 FPS)
    requestAnimationFrame(moveImages);
}
setInterval(()=> {
}, 500)
// Start the animation
moveImages();

addEventListener

//load larger image
document.querySelectorAll('.movingImage').forEach(img => {
    img.addEventListener('click', function() {
        const modalSrc = this.dataset.modalSrc;
        openModal(modalSrc);
    });
});
   

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imageSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === closeImg) {
        closeModal();
    }
}

 document.querySelector(".text").addEventListener("click", function() {
       const text2 = document.querySelector(".usertext");
       const box2 = document.querySelector(".box2");
       const text = document.querySelector(".text");
       
      if (textClickState === 0) {
            text.innerText = "Hmm, interesting. I get it now! These are probably something left by users who logged into this site before. They filled out that form too, sharing their secrets with the bear—just like you, tricked by his act. This must be where he stores all that information! Quick, see if yours is here!";
            textClickState = 1;
        }else if (textClickState === 1) {
            text2.style.opacity = "1";
            box2.style.opacity = "1";
           textClickState = 2;
        } else if (textClickState === 2) {
            text.innerText = "What?! Did he hide them in multiple places or something?!";
            textClickState = 3;
        }else if (textClickState === 3) {
                typeText(text, "(🤔🤔🤔🤔🤔🤔🤔...)", 50, () => {
                    setTimeout(() => {
                        window.location.href = "2-water-bear.html";
                    }, 1000);
                });
            textClickState = 4;}});

        function typeText(element, text, speed = 50, callback) {
                element.innerText = ""; // Clear previous text
                let index = 0;
            
                function type() {
                    if (index < text.length) {
                        element.innerText += text[index];
                        index++;
                        setTimeout(type, speed); // Continue typing
                    } else if (callback) {
                        setTimeout(callback, 1000); // Wait 1000ms before executing callback
                    }
                }
            
                type(); // Start typing effect
            }