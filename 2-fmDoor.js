const block=document.querySelector(".block");
const textbox=document.querySelector(".textbox");
const message=document.querySelector("#message");
const bD=document.querySelector(".bD");
const buttons=document.querySelectorAll(".doorB");


let clickCount=0
block.addEventListener("click", () => {
    if (clickCount === 0) {
        textbox.style.opacity=1;
        message.style.opacity=1;
    } else if (clickCount === 1) {
       message.style.display = "none";
        bD.style.opacity=1;
        textbox.style.display="none";
        buttons.forEach(button => button.disabled = false);
    }
    clickCount++;
});
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
    window.location.href = "2-water.html";
})});