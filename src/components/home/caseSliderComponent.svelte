<script>
  import { beforeUpdate, onDestroy, onMount } from "svelte";
  import CaseSliderItemComponent from "./caseSliderItemComponent.svelte";
  import { lazyImage } from "../../helper";
  export let caseData;
  let activeSlideIndex;
  let sliderBlock;
  let sliderItem;
  let itemWidth = 0;
  let translateValue = 0;
  let initValue = 0;
  let xDown, yDown, xUp, yUp;
  let activeIndex = 0;
  let activeSlide = 2;
  let transitionVal='.4s ease-in-out'
  let imgTransitionVal='.4s ease-in-out'
  const offsetVal = 43
  onMount(() => {
    calculateItem();
    resize();
    initTranslateValue();
    lazyImage()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resize, { passive: true });
      sliderBlock.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      sliderBlock.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      sliderBlock.addEventListener('touchend', handleTouchEnd, {passive: true});
    }
  });
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", resize, { passive: true });
      sliderBlock.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      sliderBlock.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      sliderBlock.removeEventListener('touchend', handleTouchEnd, {passive: true});
    }
  });
  
  const resize = () => {
    setTimeout(() => {
      setTranslateValue();
      initTranslateValue();
    }, 400)
    
    // initTranslateValue();
  };
  const initTranslateValue = () => {
    if (sliderBlock) {
      initValue = (window.innerWidth > 768 ? (itemWidth * 3 ) -
        (window.innerWidth / 2 - itemWidth / 2) - ((window.innerWidth > 990 ? 43 : 0)) 
        :
        (itemWidth * 2 )
        )
        
    }
  };
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
  const calculateItem = () => {
    if (sliderBlock && sliderBlock.children) {
      itemWidth = getElementWidth(sliderBlock.children[1]);
    }
  };
  const setTranslateValue = () => {
    calculateItem();
    translateValue = activeIndex * itemWidth;
  };
  // const setActiveSlide = (direction) => {
  //   activeSlide = activeSlide + direction;
  //   if (direction === 1 && activeSlide === caseSlider.length - 1) {
  //     activeSlide = 0;
  //   } else if (direction === -1 && activeSlide === 0) {
  //     activeSlide = caseSlider.length - 1;
  //   }
  // };
 
  const resetLoop = (direction, goBack) => {
    if (sliderBlock) {
      if (goBack) {
        transitionVal='0s';
        imgTransitionVal='0s';
        activeIndex = sliderBlock.children.length - 5;
        translateValue = (sliderBlock.children.length - 5) * itemWidth;
        setTimeout(() => {
          transitionVal='.4s ease-in-out'
          imgTransitionVal='.4s ease-in-out'
          activeIndex = sliderBlock.children.length - 5 + direction;
          translateValue = (sliderBlock.children.length - 5 + direction) * itemWidth;
        }, 0);
      } else {
        transitionVal='0s';
        imgTransitionVal='0s';
        activeIndex = 0;
        translateValue = 0;
        setTimeout(() => {
          transitionVal='.4s ease-in-out'
          imgTransitionVal='.4s ease-in-out'
          activeIndex = 1;
          translateValue = activeIndex + itemWidth;
        },0);
      }
    }
  };
  /**
   * @param {number} direction
  */
  const slideFunction = (direction) => {
    // setActiveSlide(direction);
    if (
      (direction === -1 && activeIndex === 0) ||
      (direction === 1 && activeIndex === sliderBlock.children.length -5)
    ) {
      resetLoop(direction, direction === -1 && activeIndex === 0);
      return;
    }
    activeIndex = activeIndex + direction;
    translateValue = (activeIndex) * itemWidth;
    setTranslateValue();
  };

  const handleTouchStart = (evt) => {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

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
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
            evt.preventDefault();
            evt.stopPropagation();
            if (xDiff > 0) {
                slideFunction(1);
            } else {
                slideFunction(-1);
            }
      }
      xDown = null;
      yDown = null;
      
      
    }


</script>

  <div class="case-slider-wrapper">
    <div class="case-slider-container">
      <div class="arrow-btn left" on:click={() => slideFunction(-1)}>
        <i class="arrow-icon left"></i>
      </div>
      <div
        class="slider-block"
        bind:this={sliderBlock}
        style={`transform: translate3d(-${initValue+translateValue}px, 0, 0);transition:${transitionVal}`}
      >
        <CaseSliderItemComponent imgTransitionVal={imgTransitionVal} item={caseData[caseData.length - 2]}  activeIndex={activeIndex} index={-2} bind:this={sliderItem}   />
        <CaseSliderItemComponent imgTransitionVal={imgTransitionVal} item={caseData[caseData.length - 1]}  activeIndex={activeIndex} index={-1} bind:this={sliderItem}    />
        {#each caseData as item,key}
        <CaseSliderItemComponent imgTransitionVal={imgTransitionVal} index={key} activeIndex={activeIndex} bind:this={sliderItem}  item={item}  />
        {/each}
        <CaseSliderItemComponent imgTransitionVal={imgTransitionVal} item={caseData[0]}  activeIndex={activeIndex} index={16} bind:this={sliderItem}    />
        <CaseSliderItemComponent imgTransitionVal={imgTransitionVal} item={caseData[1]}  activeIndex={activeIndex} index={17} bind:this={sliderItem}    />
        <CaseSliderItemComponent imgTransitionVal={imgTransitionVal} item={caseData[2]} activeIndex={activeIndex} index={18} bind:this={sliderItem}    />
      </div>
      <div class="arrow-btn right" on:click={() => slideFunction(1)}>
        <i class="arrow-icon"></i>
      </div>
    </div>
  </div>

