<script>
  import { CASE_DETAIL } from "../../constans/routePaths.svelte";

  
  import LazyImageComponent from "../home/lazyImageComponent.svelte"
 
  
  let sliderItem;
  let hasLoaded=false;
  export let item;
  export let activeIndex;
  export let index;
  export let imgTransitionVal;

  
 
    const onLoad = () => {
        hasLoaded=true
    }  
</script>

<div class={`slider-item ${activeIndex===index ? "active" : ""}`} bind:this={sliderItem} >
  <!-- <h1>{index}</h1> -->
  <div class="img-item ">
    <picture class="lazy"  style={`transition:${imgTransitionVal}`}>
      <source
        media="(min-width:769px)"
        srcSet={`${item.img.substring(0, item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
        data-srcSet={`${item.img.substring(0, item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
        type="image/webp"
      />
      <source
        media="(min-width:769px)"
        srcSet={`${item.img.substring(0, item.img.lastIndexOf("."))}.png 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.png 2x`}
        data-srcSet={`${item.img.substring(0, item.img.lastIndexOf("."))}.png 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.png 2x`}
        type="image/png"
      />
      <source
        media="(max-width:768px)"
        srcset={`${item.mobile_img.substring(0,item.mobile_img.lastIndexOf(".")
        )}.webp 1x, ${item.mobile_img.substring(0, item.mobile_img.lastIndexOf("."))}_2x.webp 2x`}
        type="image/webp"
      />
      <source
        media="(max-width:768px)"
        srcset={`${item.mobile_img.substring(0,item.mobile_img.lastIndexOf(".")
        )}.jpg 1x, ${item.mobile_img.substring(0, item.mobile_img.lastIndexOf("."))}_2x.jpg 2x`}
        type="image/jpg"
      />
      <img   
      on:load={onLoad} src={`${item.img}`} data-src={`${item.img}`}  alt={item.alt} />
    </picture>
  </div>
    
  
  
  {#if !hasLoaded}
    <LazyImageComponent/>
  {/if}
  <div class="text-item">
    <!-- <span>{item.designer_type}</span> -->
    <!-- <p>{item.year}</p> -->
    {@html item.title}
    <!-- <p>{item.title}</p> -->
    <a href={item.link}>
      <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="2" fill="black"/>
      </svg>                              
      {item.linkDesc}
    </a>
  </div>
</div>
