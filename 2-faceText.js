const steps = {
    1: {
      text: "Can you see me now? OK, great!",
      action: "click"
    },
    2: {
      text: "Right now, I’m in a void—a world made of network code. There’s nothing here: no direction, no lifeforms except me. Let’s see where we can go. This is an adventure relying on intuition and logic! ", 
      action: "click"
    },
    3: {
      text: "(🤔🤔🤔🤔🤔🤔🤔...)",
      action: "auto",
      typeEffect: true,
      typeSpeed: 50,
      pause: 1000,
    },
    4: {
      text: "Well, I’ll just walk in a random direction.", 
      action: "click",
      clickableTexts: [ 
        {
          text: "random direction",
          underline: true,
          targetStep: 5, 
          hoverColor: "blue",
        }
      ]
    },
    5: {
      text: "↗🚶‍♀️↗🚶‍♀️↗(Ignoring a faint 404🚫 error pings in the distance)🚶‍♀️↘🚶‍♀️↘🚶‍♀️... ",
      action: "auto",
      typeEffect: true,
      typeSpeed: 50,
      pause: 1000, // 2秒后自动到步骤6
    },
    6: {
      text: "Now I see a few colorful pixels around me. I think code is slowly generating an environment. I wonder what’s ahead? ", 
      action: "click",
      clickableTexts: [ 
        {
          text: "ahead",
          underline: true,
          targetStep: 7, // 可跳转到不同步骤
          hoverColor: "blue",
        }
      ]
    },
    7: {
        text: "⬆🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️⬆⬆⬆... ",
        action: "auto",
        typeEffect: true,
        typeSpeed: 50,
        pause: 1000,
    },
    8: {
        text: "Now I’m standing on a grassland. The sky has white clouds, and everything around is endless green. No sign of that little bear. I should keep moving forward. With every step, I sink into the soft soil, and the grass rustles against my shoes. I'm so curious that what does walking on grass feel like in your world... ", 
        action: "click",
        clickableTexts: [
            {
              text: "moving forward",
              underline: true,
              targetStep: 9, // 可跳转到不同步骤
              hoverColor: "blue",
            }
          ]
      },
    9: {
        text: "A lot of dark pixels appear in front of me, expanding slowly. It’s a forest! Should we keep going forward or change a direction?",
        action: "click",
        clickableTexts: [
            {
              text: "keep going forward",
              underline: true,
              targetStep: 10, // 可跳转到不同步骤
              hoverColor: "blue",
            },
            {
                text: "change a direction",
                underline: true,
                targetStep:10, // 可跳转到不同步骤
                hoverColor: "blue",
              }
          ]
    },
    10: {
        text: "⬆🚶‍♀️⬆🚶‍♀️🚶‍♀️ ",
        action: "auto",
        typeEffect: true,
        typeSpeed: 50,
        pause: 1000,
    },
    11: {
        text: "The forest air is damp and cool, the ground covered in soft leaves and bumpy roots. It’s so quiet I can hear my own breathing, but if I listen closely, there are bird calls, insect chirps, and the rustle of wind through leaves. I’m not sure if I like this.  ",
       action:"click"
    },
    12: {
        text: " I don’t think that bear would be here. It’s too damp—his fur would never dry. ",
       action:"click"
    },
    13: {
        text: "🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️🚶‍♀️ ",
        action: "auto",
        typeEffect: true,
        typeSpeed: 50,
        pause: 1000,
    },
    14: {
        text: " The gaps between the trees widen. We've actually made it out!! But I see a tall mountain blocks our path. Still no one around.  What if we change direction... say, head to my right? ",
       action:"click"
,       clickableTexts: [
        {
          text: "right",
          underline: true,
          targetStep: 15, // 可跳转到不同步骤
          hoverColor: "blue",
        },
      ]
    },
    15: {
        text: "🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️ ",
        action: "auto",
        typeEffect: true,
        typeSpeed: 50,
        pause: 1000,
    },
    16: {
        text: "Wait, what’s this🤯🤯🤯? So many colorful pixel blocks—yellow, pink, red—pop up around me! The air smells sweet, and I hear the buzz of tiny insects. A flower field has generated! We’re so lucky!!",
       action:"click"
    },
    //17: {
        //text: "I really want to touch this flower. (Crouches and pokes a nearby pixel flower🌺🌼🌺🌼) ",
        //action: "auto",
       // typeEffect: true,
       // typeSpeed: 50,
        //pause: 1000,
    //},
    17: {
        text: "Wait! Why does the ground feel like it’s shaking?🤯🤯🤯🤯🤯🤯 THREE GIANT DOORS JUST BURST UP FROM THE EARTH!!! Let me flip the camera to show you!!!",
        action: "end",
        typeEffect: true,
        typeSpeed: 50,
    },
  };
  

  // 获取容器元素
  const message = document.getElementById("message");
  const block=document.querySelector(".block");
  let currentStep = 1;
  let isTyping = false;
  
  // 初始化显示第一步
  showStep(1);
  message.addEventListener('click', handleClick); 

  // 核心逻辑优化
function showStep(step) {
    if (!steps[step]) return;
    currentStep = step;
    const config = steps[step];

    message.innerHTML = "";
    if (config.typeEffect) {
        startTypeEffect(config);
    }else {
        message.textContent = config.text;

        // ✅ Ensure clickable words are added for non-typewriter steps
        if (config.clickableTexts?.length) {
            injectClickableText(config);
        }
    }
    switch (step) {
        case 6:
            block.style.backgroundImage = "url('girltalk-bg/Void2.png')";
            block.style.backgroundSize = "cover";
            block.style.backgroundPosition = "center";
            break;
        case 8:
            block.style.backgroundImage = "url('girltalk-bg/grass.png')";
            block.style.backgroundSize = "cover";
            block.style.backgroundPosition = "center";
            break;
        case 11:
            block.style.backgroundImage = "url('girltalk-bg/forest.png')";
            block.style.backgroundSize = "cover";
            block.style.backgroundPosition = "center";
            break;
        case 14:
            block.style.backgroundImage = "url('girltalk-bg/grass.png')";
            block.style.backgroundSize = "cover";
            block.style.backgroundPosition = "center";
            break;
         case 16:
            block.style.backgroundImage = "url('girltalk-bg/flower.png')";
            block.style.backgroundSize = "cover";
            block.style.backgroundPosition = "center";
            break;
    }
    
    if(step === 17) {
    setTimeout(() => {
        window.location.href = "2-fmDoor.html"; // Replace with the actual page URL
    }, 10000);}}

function startTypeEffect(config) {
    isTyping = true;
    let index = 0;
    message.innerHTML = "";

    const typeInterval = setInterval(() => {
        message.textContent += config.text[index];
        index++;

        if (index >= config.text.length) {
            clearInterval(typeInterval);
            isTyping = false;

            // ✅ Auto transition logic for "auto" steps
            if (config.action === "auto" && config.pause) {
                setTimeout(() => showStep(currentStep + 1), config.pause);
            }

            // ✅ Inject clickable words AFTER typewriter effect finishes
            if (config.clickableTexts?.length) {
                injectClickableText(config);
            }
        }
    }, config.typeSpeed);
}

// ✅ Function to inject clickable words into message content
function injectClickableText(config) {
    let processedText = config.text;

        config.clickableTexts.reverse().forEach(item => {
            const regex = new RegExp(item.text, 'g'); // 'g' for global match, to replace all occurrences
            const span = `<span class="clickable" 
                              data-target-step="${item.targetStep}" 
                              style="${item.underline ? 'text-decoration:underline;' : ''}
                                    ${item.hoverColor ? '--hover-color:${item.hoverColor};': ''}">
                              ${item.text}
                          </span>`;
    
            // Replace all occurrences of the text with the clickable span
            processedText = processedText.replace(regex, span);
        });

    message.innerHTML = processedText;
}

// ✅ Updated Click Handler - First check for clickable words, then normal flow
function handleClick(event) {
    if (isTyping) return;

    const clickableEl = event.target.closest('.clickable');
    if (clickableEl) {
        const targetStep = parseInt(clickableEl.dataset.targetStep);
        if (!isNaN(targetStep)) showStep(targetStep);
        return;
    }

    // 新增：存在可点击文本时阻止默认跳转
    const currentConfig = steps[currentStep];
    if (currentConfig.clickableTexts?.length) return;


    if (steps[currentStep + 1]) showStep(currentStep + 1);
}