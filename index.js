const text = document.querySelector(" h1.display-2");
const textload =()=> {
    setTimeout (() => {
        text.textContent = "YousseF MustaFa";
    }, 1000);
    setTimeout (() => {
        text.textContent = "Front End Developer";
    }, 4000);
    setTimeout (() => {
        text.textContent = "FreeLancer";
    }, 8000);
    
};
textload();
setInterval(textload, 10000);

