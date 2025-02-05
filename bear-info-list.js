const secretList=[
];

renderSecretList();
function renderSecretList(){

    let secretListHTML="";

    for(let i=0; i<secretList.length;i++){
        const secret=secretList[i]
        const html=`<p>${secret}</p>`
        secretListHTML+=html;
    }
        console.log(secretListHTML)

    document.querySelector(".secret-showup").innerHTML=secretListHTML;
}

function showSecret(){
    const inputElement=document.querySelector(".secret")
    const name=inputElement.value;

    secretList.unshift(name);
    localStorage.setItem("secretList", JSON.stringify(secretList));
    console.log(secretList);

    inputElement.value="";
    renderSecretList();
}

const addB=document.querySelector(".showButton")
const done=document.querySelector(".buttonDone")
addB.addEventListener("click", () => {
    done.style.display="flex";

});