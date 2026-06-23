<script>
    import LazyImageComponent from "../home/lazyImageComponent.svelte"
    let hasLoaded=false;
    export let item
    const onLoad = () => {
        hasLoaded=true
       
    }
</script>
 
 
 
 
 <div class="img-item">
    <picture class="lazy">
        <source
                media="(max-width:640px)"
                data-srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.webp 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.webp 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.webp 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.webp 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                type="image/webp"
        />
        <source
                media="(max-width:640px)"
                data-srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.jpg 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.jpg 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                type="image/jpg"
        />
        <source
                media="(min-width:641px)"
                data-srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
                srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
                type="image/webp"
        />
        <source
                media="(min-width:641px)"
                data-srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.jpg 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.jpg 2x`}
                srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.jpg 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.jpg 2x`}
                type="image/jpg"
        />
        <img
                on:load={onLoad}
                data-src={item.img}
                src={item.img}
                alt={item.alt}
        />
    </picture>
    {#if !hasLoaded}
        <LazyImageComponent/>
    {/if}
 </div>