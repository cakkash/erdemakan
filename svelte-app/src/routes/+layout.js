


export const load = async ({url,params})=>{
   

    
    var handleInteraction = function(event) {
      
        if(typeof window !== 'undefined') {
                
                if (!document.getElementById("font_style")) {
                    const style = document.createElement("link");
                    style.href = "/font.css";
                    style.id = "font_style";
                    style.rel = "preload";
                    style.as = "style";
                    document.querySelector("head").appendChild(style);
                }
        
                let styleLink = document.getElementById("font_style");

                if (styleLink) {
                    styleLink.rel = "stylesheet";
                }    
        }
       
       window.removeEventListener("mousemove", handleInteraction, {
         passive: true,
       });
       window.removeEventListener("scroll", handleInteraction, {
         passive: true,
       });
       window.removeEventListener("keydown", handleInteraction, {
         passive: true,
       });
       window.removeEventListener("click", handleInteraction, {
         passive: true,
       });
       window.removeEventListener("click", handleClickInteraction, {
         passive: true,
       });
       window.removeEventListener("touchstart", handleInteraction, {
         passive: true,
       });
       window.removeEventListener("touchstart", handleClickInteraction, {
         passive: true,
       });
   };
   var handleClickInteraction = function (event){
    setTimeout(() => {
        if(!coordinations){
        coordinations = {
            x: event.clientX,
            y: event.clientY
        }
        document.elementFromPoint(coordinations.x, coordinations.y).click();
    }  
    }, 500);
 
}

if(typeof window !== 'undefined') {
window.addEventListener('mousemove', handleInteraction);
window.addEventListener("scroll", handleInteraction);
window.addEventListener("keydown", handleInteraction);
window.addEventListener("click", handleInteraction );
window.addEventListener("click", handleClickInteraction );
window.addEventListener("touchstart", handleInteraction);
window.addEventListener("touchstart", handleClickInteraction);
}
   


}

export const prerender = false;