<script>
  
  import { onDestroy, onMount } from "svelte";
  import { CASE_DETAIL } from "../../constans/routePaths.svelte";
  export let banner;
  let sliderContainer;
  let activeIndex = 0;
  let maxTranslateValue = 0;
  let translateValue = 0;
  let xDown, yDown, xUp, yUp;
  let card;
  let cardWidth;
  let containerWidth;
  

    
    onMount(()=>{
      calculateItem()
      resize()
      if(typeof window !== "undefined"){
        window.addEventListener("resize",resize,{passive: true})
        sliderContainer.addEventListener("touchstart",handleTouchStart,{passive:true})
        sliderContainer.addEventListener("touchmove",handleTouchMove,{passive:true})
      }
    
    })
  
    onDestroy(()=>{
    if(typeof window !== "undefined"){
       window.removeEventListener("resize",resize,{passive:true})
       sliderContainer.removeEventListener("touchstart",handleTouchStart,{passive:true})
       sliderContainer.removeEventListener("touchmove",handleTouchMove,{passive:true})
    }
    })

    const getElementWidth = (element) => {
        if (element) {
                let style = element.currentStyle || window.getComputedStyle(element),
                width = element.offsetWidth, // or use style.width
                margin =
                    parseFloat(style.marginLeft) + parseFloat(style.marginRight);

            return width + margin;
        } else {
            return 0
        }

    }
    
    const resize = () =>{
      calculateItem()
      setTranslateValue()
    }

    const calculateItem = () =>{
      cardWidth = getElementWidth(card)
      containerWidth = sliderContainer.offsetWidth
    }

    const setTranslateValue = () =>{
       calculateItem()
       if(sliderContainer && sliderContainer.children){
          translateValue = activeIndex * cardWidth
          maxTranslateValue = ((sliderContainer.children.length) * cardWidth) - sliderContainer.offsetWidth
          sliderContainer.style.transform = `translateX(-${(maxTranslateValue < translateValue ? maxTranslateValue : translateValue)}px)`
       }
    }

    const slideFunction = (direction) => {
        activeIndex = activeIndex + direction;
        if(activeIndex === banner.length){
          activeIndex = 0
        } if (activeIndex < 0) {
          activeIndex = sliderContainer.children.length -1
        }
        setTranslateValue()
    }
    
    const handleTouchStart = (evt) =>{
      xDown = evt.touches[0].clientX
      yDown = evt.touches[0].clientY
    }

    const handleTouchMove = (evt) =>{
      if(!xDown || !yDown){
        return;
      }
      xUp = evt.touches[0].clientX;
      yUp = evt.touches[0].clientY;
      
      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;
      if(Math.abs(xDiff) + Math.abs(yDiff) > 10){
        if(Math.abs(xDiff) > Math.abs(yDiff)){
           if(xDiff > 0){
            slideFunction(1)
           }else{
            slideFunction(-1)
           } 
        }
        xDown = null;
        yDown = null;
      }
      
    }

    const sliderNav = (index) =>{
       activeIndex = index
       setTranslateValue();
    }

</script>

<div class="slider-banner-root">
  <div class="slider-wrapper">
    <div class="slider-container" bind:this={sliderContainer}>
      {#each banner  as  item }
      <div  class="slider-block"  bind:this={card}>
        <picture class="img-item">
          <source
              media="(min-width:769px)"
              srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.webp 1x`}
              type="image/webp"/>
          <source
              media="(min-width:769px)"
              srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.jpg 1x`}
              type="image/jpg"/>
            <source
              media="(max-width:768px)"
              srcset={`${item.mobile_img.substring(0,item.mobile_img.lastIndexOf(".")
              )}.webp 1x, ${item.mobile_img.substring(0, item.mobile_img.lastIndexOf("."))}_2x.webp 2x, ${item.mobile_img.substring(0, item.mobile_img.lastIndexOf("."))}_3x.webp 3x`}
              type="image/webp"
            />
            <source
              media="(max-width:768px)"
              srcset={`${item.mobile_img.substring(0,item.mobile_img.lastIndexOf(".")
              )}.jpg 1x, ${item.mobile_img.substring(0, item.mobile_img.lastIndexOf("."))}_2x.jpg 2x, ${item.mobile_img.substring(0, item.mobile_img.lastIndexOf("."))}_3x.jpg 3x`}
              type="image/jpg"
            />
          <img src={`${item.img}`} alt={item.alt} />
        </picture>
        <div class="gradient-bg"></div>
        <div class="text-item">
          <!-- <span>{item.title_date}</span>  -->
          {@html item.title}
          <a href={item.link}>
              <svg
                width="34"
                height="2"
                viewBox="0 0 34 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">  
                <rect width="34" height="2" fill="white" />
              </svg>
            {item.linkBtn}
          </a>
      </div>
    </div>
      {/each}
    </div>
    
    <div class="slider-btn-block" >
      {#each banner as item,index}
        <div class={`number-item ${activeIndex === index ? "active": ""}`} on:click={()=>{sliderNav(index)}}>       
          <span>0{index + 1}</span>
        </div> 
      {/each}
      <div class="arr-item" on:click={()=>{slideFunction(1)}}>
        <svg   width="47" height="14" viewBox="0 0 47 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M0 7H46M46 7L40 1M46 7L40 13" stroke="white" />
        </svg>
      </div>
      
     
    </div>
  </div>
</div>
