let root = document.querySelector(':root');
let imgSun = "https://img.icons8.com/ios-filled/3/null/smiling-sun.png"
let imgMoon = "https://img.icons8.com/glyph-neue/34/null/bright-moon.png"

const dark = {
    bg: "#1C1917",
    text: "white",
    bgCard:"#1C1917"
}

const light = {
    bg : "#F2F2F2",
    text: "black",
    bgCard:"#E4E4E7"
}



function lightMode(){
   
    root.style.setProperty('--bg-white', light.bg);
    root.style.setProperty('--bg-zinc-900',light.text);
    root.style.setProperty('--bg-zinc-200', light.bgCard);
    
    
    setLocalStorageLight()

    document.getElementById("modeLight").style.display="block"
    document.getElementById("modeDark").style.display="none"

   
}

function darkMode(){

   
    root.style.setProperty('--bg-white',dark.bg);
    root.style.setProperty('--bg-zinc-900',dark.text);
    root.style.setProperty('--bg-zinc-200', dark.bgCard);
    setLocalStorageDark()

    document.getElementById("modeDark").style.display="block"
    document.getElementById("modeLight").style.display="none"
    

  
}

// save info on local storage

function setLocalStorageDark(){
    localStorage.setItem("bg",dark.bg);
    localStorage.setItem("text",dark.text)
    localStorage.setItem("card",dark.bgCard)
    localStorage.setItem("icon","light")
}

function setLocalStorageLight(){
    localStorage.setItem("bg",light.bg);
    localStorage.setItem("text",light.text)
    localStorage.setItem("card",light.bgCard)
    localStorage.setItem("icon","dark")
}






(function reload(){
  
        root.style.setProperty('--bg-white',  localStorage.getItem("bg"));
       
        root.style.setProperty('--bg-zinc-900',localStorage.getItem("text"));
        root.style.setProperty('--bg-zinc-200', localStorage.getItem("card"));
    
        if(localStorage.getItem("icon") == "dark"){
            document.getElementById("modeLight").style.display="block"
            document.getElementById("modeDark").style.display="none"
        }else{
            document.getElementById("modeDark").style.display="block"
            document.getElementById("modeLight").style.display="none"
        }
        
    

})()