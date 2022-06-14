let nav = document.querySelector('nav'); 
let before = 0; 
let pos = 0; 
const navHeight = -nav.clientHeight; 

window.addEventListener('scroll',function(e){
    let after = this.scrollY; 


    if(after != 0){
        nav.style.boxShadow = "0px 5px 15px black";
    }else{
        nav.style.boxShadow = "0px 0 0px black";
    }

    if(before < after){ 
        if(pos > navHeight){ 
            pos -= after - before; 
            if(pos < navHeight){ 
                pos = navHeight;
            }
            nav.style.top = pos + "px"; 
        }
    }else{ 
        if(pos < 0){
            pos += before - after;
            if(pos > 0){
                pos = 0;
            }
            nav.style.top = pos + "px";
        }
    }
    before = after;
});