const radioButtons = document.querySelectorAll('input[name="theme"]');
const toggleBtn = document.querySelector(".toggle__button");

function setColorMode(){
    console.log("Set colormode " + localStorage.getItem("theme"));
    localStorage.getItem("theme") == "dark" ? activateDarkMode() : activateLightMode();
}

function activateLightMode(){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    getRadioButton("light").checked = true;
}

function activateDarkMode(){
    document.body.classList.add("dark")
    document.body.classList.remove("light")
    getRadioButton("dark").checked = true
}

function getRadioButton(theme){
    for(const btn of radioButtons){
        if(btn.getAttribute("id") === theme) return btn;
    }
}

toggleBtn.addEventListener("click", () => {
    if(document.body.classList.contains("light")){
        activateDarkMode()
        localStorage.setItem("theme", "dark");
    }
    else if(document.body.classList.contains("dark")){
        activateLightMode()
        localStorage.setItem("theme", "light")
    }
})

for (const radioButton of radioButtons){
    radioButton.addEventListener("change", () => {
        if (radioButton.checked && radioButton.getAttribute("id") === "light"){
            activateLightMode();
            localStorage.setItem("theme", "light")      
        }
        if (radioButton.checked && radioButton.getAttribute("id") === "dark") {
            activateDarkMode();
            localStorage.setItem("theme", "dark");
        }
    })
}

if(window.matchMedia("(prefers-color-scheme: dark)").matches) activateDarkMode();
if(window.matchMedia("(prefers-color-scheme: light)").matches) activateLightMode();


window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if(e.matches && localStorage.getItem("theme") !== "light") activateDarkMode();
})
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if(e.matches && localStorage.getItem("theme") !== "dark") activateLightMode();
})


setColorMode();

