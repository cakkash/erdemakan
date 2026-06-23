<script>
	import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';
    export let images;
    export let closeLightBox;
    

    export let firstIndex;
    let imgItem;
    let sliderBlock;
    let sliderInnerItem;
    let xDown,yDown,xUp,yUp;
    let translateValue = 0;
    let itemWidth;
    let itemHeight;
    let heightDiffrent;
    let heightPercentage;
    let sliderItem;
    let rightButtonDistance;
    let leftButtonDistance;
    let rightButtonHeightDistance;
    let activeIndex = firstIndex;

    onMount(() => {


      setTimeout(() => {
        resize();
      },200)
      
      if(typeof window !== "undefined") {
        window.addEventListener("resize", resize, {passive: true});
        sliderBlock.addEventListener('touchstart', handleTouchStart, {passive: true});
        sliderBlock.addEventListener('touchmove',handleTouchMove, {passive: true});
      }
    })

    const resize = () => {
      if (sliderBlock && sliderBlock.style) {
        sliderBlock.style.transform = `translateX(${-(sliderBlock.offsetWidth * activeIndex)}px)`;
      }
      setTimeout(() => {
        slideButtonWidth()
      }, 200);
     
    }

    onDestroy(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resize, {passive: true})
        sliderBlock.removeEventListener('touchstart', handleTouchStart, {passive: true});
        sliderBlock.removeEventListener('touchmove',handleTouchMove, {passive: true});
      }
    })  

    const slideButtonWidth = () => {
      calculateItem()
      rightButtonDistance = (window.innerWidth > 1750 ? (window.innerWidth / 2) - (itemWidth / 2) - 16 -128 : window.innerWidth > 990 ? (window.innerWidth / 2) - (itemWidth / 2) - 16 -96 : window.innerWidth > 550 ? (window.innerWidth / 2) - (itemWidth / 2) - 16 -45 : 24 )
      leftButtonDistance = (window.innerWidth > 1750 ? (window.innerWidth / 2) - (itemWidth / 2) - 16 -128 : window.innerWidth > 990 ? (window.innerWidth / 2) - (itemWidth / 2) - 16 -96 : window.innerWidth > 550 ? (window.innerWidth / 2) - (itemWidth / 2) - 16 -45 : 24 )
      heightDiffrent = (itemHeight + 134)
      heightPercentage = (heightDiffrent * 50) / ((window.innerHeight) / 2)
      rightButtonHeightDistance = window.innerWidth > 550 ? 50 : heightPercentage
    }

    const changeActiveIndex = (direction) => {
      if(direction === 1 && activeIndex === sliderBlock.children.length - 1){
            activeIndex = 0
        }else if(direction === -1 && activeIndex === 0){
            activeIndex = sliderBlock.children.length - 1
        }else{
            activeIndex = activeIndex + direction
        }
      setTranslateValue();
      slideButtonWidth();
    }

    const setTranslateValue = () => {
       if(sliderBlock && sliderBlock.children){
          translateValue = activeIndex * sliderBlock.offsetWidth
          sliderBlock.style.transform = `translateX(-${translateValue}px)`
       }
    }

  

    const getElementWidth = (element) => {
    if (element) {
      let style = element.currentStyle || window.getComputedStyle(element),
        width = element.offsetWidth,
        margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return width + margin;
    } else {
      return 0;
    }
  };

  const getElementHeight = (element) => {
    if (element) {
        height = element.offsetHeight
      return height ;
    } else {
      return 0;
    }
  };

  const calculateItem = () => {
      if (sliderBlock && sliderBlock.children) {
      itemWidth = getElementWidth(sliderBlock.children[activeIndex].children[0]);
      itemHeight = getElementHeight(sliderBlock.children[activeIndex].children[0].children[0])
    }
    
  };

  const handleTouchStart = (evt) => {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    };

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
            return;
        }
        xUp = evt.touches[0].clientX;
        yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) + Math.abs(yDiff) > 10) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                document.body.style.overflow = 'hidden';
                if (xDiff > 0) {
                  changeActiveIndex(1);

                } else {
                  changeActiveIndex(-1);

                }
            }
            xDown = null;
            yDown = null;
        }
    };

</script>



<div class="gallery-lb-root">
    <div class="gallery-container">
        <div class="close-btn-block" on:click={() => closeLightBox()}>
            <!-- <i class="close-icon" ></i> -->
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.09961" y1="20.1923" x2="20.1915" y2="1.10042" stroke="#626262" stroke-linecap="round"/>
              <line x1="0.5" y1="-0.5" x2="27.5" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.9004 20.8994)" stroke="#626262" stroke-linecap="round"/>
            </svg>
              
              
        </div>
        <div class="arrow-btn left" style={`left:${leftButtonDistance}px;`} on:click={() => changeActiveIndex(-1)}>
          <i class="arrow-icon left"></i>
        </div>
        <div class="slider-block" bind:this={sliderBlock}>
            
            {#each images as item, index}
            <div class={`slider-item ${activeIndex=== index ? "active" : ""}`} bind:this={sliderItem} >
                <div class="slider-inner-item" bind:this={sliderInnerItem}>
                    <div class="img-item" bind:this={imgItem} >
                        <picture>
                          <source
                            media="(max-width:550px)"
                            srcSet={`${item.lb_img_mobile.substring(0, item.lb_img_mobile.lastIndexOf("."))}.webp 1x, ${item.lb_img_mobile.substring(0, item.lb_img_mobile.lastIndexOf("."))}_2x.webp 2x, ${item.lb_img_mobile.substring(0, item.lb_img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                            type="image/webp"
                            />
                            <source
                            media="(max-width:550px)"
                            srcSet={`${item.lb_img_mobile.substring(0, item.lb_img_mobile.lastIndexOf("."))}.jpg 1x, ${item.lb_img_mobile.substring(0, item.lb_img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${item.lb_img_mobile.substring(0, item.lb_img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                            type="image/jpg"
                            />
                            <source
                            media="(min-width:551px)"
                            srcSet={`${item.lb_img.substring(0, item.lb_img.lastIndexOf("."))}.webp 1x, ${item.lb_img.substring(0, item.lb_img.lastIndexOf("."))}_2x.webp 2x`}
                            type="image/webp"
                            />
                            <source
                            media="(min-width:551px)"
                            srcSet={`${item.lb_img.substring(0, item.lb_img.lastIndexOf("."))}.jpg 1x, ${item.lb_img.substring(0, item.lb_img.lastIndexOf("."))}_2x.jpg 2x`}
                            type="image/jpg"
                            />
                            <img src={`${item.lb_img}`} alt={item.alt} />
                        </picture>
                    </div>
                    
                    <div class="text-item">
                      <div class="text-inner-item">
                        <span>{item.year}</span>
                        <span>{item.title}</span>
                        <p>{item.desc}</p>
                      </div>
                      <div class="arrow-btn-mobile" on:click={() => changeActiveIndex(1)}>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" width="45" height="45" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 45)" fill="#F2F2F2"/>
                          <path d="M14.4141 22.5L30.5859 22.5M30.5859 22.5L28.4766 24.6094M30.5859 22.5L28.4766 20.3906" stroke="white" stroke-width="0.5"/>
                          </svg>
                          
                          
                          
                          
                          
                      </div>
                    </div>
                </div>
                
            </div>
            {/each}
            

        </div>
        <div class="arrow-btn right" style={`right:${rightButtonDistance}px; top:${rightButtonHeightDistance}%;`} on:click={() => changeActiveIndex(1)}>
          <i class="arrow-icon"></i>
        </div>
    </div>
</div>