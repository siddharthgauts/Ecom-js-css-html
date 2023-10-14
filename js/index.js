const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if(hamburger){
    hamburger.addEventListener("click", ()=> {
        navList.classList.toggle('open');
        console.log(hamburger)
        console.log(navList)
    })
}

//popup

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if(popup){
    closePopup.addEventListener("click", ()=>{
        popup.classList.add("hide-popup");
    });

    window.addEventListener("load", ()=>{
        setTimeout(()=>{
        popup.classList.remove('hide-popup');
        },1000)
    });
}

//hover touch

