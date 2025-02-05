const p1=document.querySelector(".description")
const button=document.querySelector(".button")
const picture=document.querySelector(".picture")
    
    
    let clickCount=0

    picture.addEventListener("click", () => { 
        if(clickCount===0){
        p1.innerHTML="My name is Teddy, and I’m a soft, cuddly white bear with a big heart! I love memes, storytelling, and spending time with friends! I’m the best at giving warm hugs and keeping secrets—but keep the broccoli away from me. I’m here to bring warth, giggles, and friendship wherever I go.";
    }else if(clickCount===1){
        p1.innerText="Could you please tell me something about yourself? So we can know each other better!!!";
        p1.style.fontSize="30px";
        p1.style.marginLeft="330px";
        p1.style.marginRight="330px";
    }else if(clickCount===2){
        button.style.opacity="1";
        button.addEventListener("click", () => {
            window.location.href = "bear-info-list.html";});
            
    }
        clickCount++
    });
