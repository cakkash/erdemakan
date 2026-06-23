<script>
    import {onMount,onDestroy} from "svelte"
    import { CASE_DETAIL, CASE_STUDIES } from "../../constans/routePaths.svelte";
    import {goto} from '$app/navigation';
    import { lazyImage } from "../../helper";
  import CaseDetailImgComponent from "./caseDetailImgComponent.svelte";
  import NextCollectionImgComponent from "./nextCollectionImgComponent.svelte";

    export let banner
    export let descArea
    export let sliderArea
    export let next_collection
    let sliderContainer;
    let activeIndex = 0;
    let translateValue = 0;
    let xDown, yDown, xUp, yUp;
    let card;
    let cardWidth;
    let containerWidth;
     let isMobile;

    const setIsMobile=()=>{
        typeof window !== "undefined" && window.innerWidth < 500 ? isMobile = true : isMobile = false
    }
    onMount(()=>{
        lazyImage()
      calculateItem()
      setTranslateValue() 
      resize()
        if(typeof window !== "undefined"){
        window.addEventListener("resize",resize,{passive: true})
        sliderContainer.addEventListener("touchstart",handleTouchStart,{passive:true})
        sliderContainer.addEventListener("touchmove",handleTouchMove,{passive:true})
        sliderContainer.addEventListener('touchend', handleTouchEnd, {passive: true});
      }
      
    })
    onDestroy(()=>{
        if(typeof window !== "undefined"){
            window.removeEventListener("resize",resize,{passive:true})
            sliderContainer.removeEventListener("touchstart",handleTouchStart,{passive:true})
            sliderContainer.removeEventListener("touchmove",handleTouchMove,{passive:true})
            sliderContainer.removeEventListener('touchend', handleTouchEnd, {passive: true});
        }
    })
    const getElementWidth = (element) => {
        if (element) {
                let style = element.currentStyle || window.getComputedStyle(element),
                width = element.offsetWidth, // or use style.width
                margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
                return width + margin;
        } else {
            return 0
        }
    }
    const resize = () =>{
        calculateItem();
        setTranslateValue();
        setIsMobile();
    }
    const calculateItem = () =>{
        cardWidth = getElementWidth(card)
        containerWidth = sliderContainer.offsetWidth
    }
    const setTranslateValue = () =>{
       calculateItem()
       if(sliderContainer && sliderContainer.children){
          translateValue = activeIndex * cardWidth
         
          sliderContainer.style.transform = `translateX(-${translateValue}px)`
       }
    }
   
    const slideFunction = (direction) =>{
        if(direction === 1 && activeIndex === sliderContainer.children.length - 1){
            activeIndex = 0
        }else if(direction === -1 && activeIndex === 0){
            activeIndex = sliderContainer.children.length - 1
        }else{
            activeIndex = activeIndex + direction
        }
        setTranslateValue()
      
    }
    const handleTouchStart = (evt) =>{
        xDown = evt.touches[0].clientX
        yDown = evt.touches[0].clientY
    }

    const handleTouchEnd = () => {
        document.body.style.overflow = 'visible';
    };

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

    const goTo = (item) =>{
        //let newUrl = `/${window.location.pathname}`
        goto(CASE_DETAIL.replace(":detail",item.link))
    }

</script>
<div class="case-detail-root">
    <div class="case-detail-wrapper">
        <div class="case-detail-banner-container">
            <picture>
                <source
                                media="(min-width:641px)"
                                  srcSet={`${banner.img.substring(0, banner.img.lastIndexOf("."))}.webp 1x, ${banner.img.substring(0, banner.img.lastIndexOf("."))}_2x.webp 2x`}
                                  type="image/webp"
                                />
                                <source
                                media="(min-width:641px)"
                                  srcSet={`${banner.img.substring(0, banner.img.lastIndexOf("."))}.jpg 1x, ${banner.img.substring(0, banner.img.lastIndexOf("."))}_2x.jpg 2x`}
                                  type="image/jpg"
                                />
                                <source
                                media="(max-width:640px)"
                                  srcSet={`${banner.img_mobile.substring(0, banner.img_mobile.lastIndexOf("."))}.webp 1x, ${banner.img_mobile.substring(0, banner.img_mobile.lastIndexOf("."))}_2x.webp 2x, ${banner.img_mobile.substring(0, banner.img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                                  type="image/webp"
                                />
                                <source
                                media="(max-width:640px)"
                                  srcSet={`${banner.img_mobile.substring(0, banner.img_mobile.lastIndexOf("."))}.jpg 1x, ${banner.img_mobile.substring(0, banner.img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${banner.img_mobile.substring(0, banner.img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                                  type="image/jpg"
                                />
                <img src={banner.img} alt="case-detail">
            </picture>
            <h1>{banner.title}</h1>
        </div>
        <div class="breadcrumb-container">
            <div class="breadcrumb-block">
                <a href={CASE_STUDIES}>Case studies</a>
                <span>{banner.title}</span>
            </div>
        </div>
        <div class="case-detail-desc-container">
            {#each descArea as item}
                <div class="desc-block">
                    <h2>{item.title}</h2>
                    
                    {#if item.img}
                    <CaseDetailImgComponent item={item}/>
                    {/if}
                    <div class="text-item">
                        {@html item.text}
                    </div>
                    
                </div>
            {/each}
        </div>
        <div class="detail-slider-wrapper">
            <h2>{sliderArea.title}</h2>
            <div class="detail-slider-container">
                <div class="left-arr-block" on:click={()=>{slideFunction(-1)}}>
                    <div class="left-arr-background"/>
                    {#if isMobile}
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7H1M1 7L7 13M1 7L7 1" stroke="black"/>
                        </svg>
                        
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="14" viewBox="0 0 47 14" fill="none">
                            <path d="M47 7H1M1 7L7 13M1 7L7 1" stroke="black"/>
                        </svg>
                    {/if}
                    
                </div>
                 <div class="detail-slider-block" bind:this={sliderContainer}>
                    {#each sliderArea.images as item}
                        <div class="slider-item" bind:this={card}>
                            <picture class="img-item">
                                <source
                                media="(min-width:641px)"
                                  srcSet={`${item.img.substring(0, item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
                                  type="image/webp"
                                />
                                <source
                                media="(min-width:641px)"
                                  srcSet={`${item.img.substring(0, item.img.lastIndexOf("."))}.jpg 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.jpg 2x`}
                                  type="image/jpg"
                                />
                                <source
                                media="(max-width:640px)"
                                  srcSet={`${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}.webp 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.webp 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                                  type="image/webp"
                                />
                                <source
                                media="(max-width:640px)"
                                  srcSet={`${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}.jpg 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                                  type="image/jpg"
                                />
                                <img src={`${item.img}`} alt={item.alt} />
                              </picture>
                        </div>
                    {/each}
                      
                 </div>
                 <div class="right-arr-block" on:click={()=>{slideFunction(1)}}>
                    <div class="right-arr-background"/>
                    {#if isMobile}
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7H19M19 7L13 13M19 7L13 1" stroke="black"/>
                        </svg>
                        
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="14" viewBox="0 0 47 14" fill="none">
                            <path d="M0 7H46M46 7L40 1M46 7L40 13" stroke="black"/>
                        </svg> 
                    {/if}
                               
                 </div>
            </div>
            <div class="text-item">
                {@html sliderArea.text}
            </div>
        </div>
        {#if next_collection}
        <div class="next-collection-container">
            <NextCollectionImgComponent next_collection={next_collection} />
            <div class="next-collection-block">
                <span>Next</span>
                <h3>{next_collection.title}</h3>
                <div class="next-collection-link-item" on:click={()=>goTo(next_collection)}>
                    <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="2" fill="black"/>
                    </svg>                                
                    view case
                </div>
            </div>
        </div>
        {/if}
        
    </div>
</div>