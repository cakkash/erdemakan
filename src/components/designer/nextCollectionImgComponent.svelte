<script>
    import LazyImageComponent from "../home/lazyImageComponent.svelte"
    let hasLoaded=false;
    export let next_collection
    const onLoad = () => {
        hasLoaded=true
       
    }
</script>
 
 
 
 
 <div class="img-item">
    <picture class="lazy">
        <source
                    media="(max-width:768px)"
                    srcSet={`${next_collection.img_mobile.substring(0,next_collection.img_mobile.lastIndexOf("."))}.webp 1x`}
                    type="image/webp"/>
                <source
                    media="(max-width:768px)"
                    srcSet={`${next_collection.img_mobile.substring(0,next_collection.img_mobile.lastIndexOf("."))}.jpg 1x`}
                    type="image/jpg"/>
                <source
                    media="(min-width:769px)"
                    srcSet={`${next_collection.img.substring(0,next_collection.img.lastIndexOf("."))}.webp 1x`}
                    type="image/webp"/>
                <source
                    media="(min-width:769px)"
                    srcSet={`${next_collection.img.substring(0,next_collection.img.lastIndexOf("."))}.jpg 1x`}
                    type="image/jpg"/>
        <img
                on:load={onLoad}
                data-src={next_collection.img}
                src={next_collection.img}
                alt={next_collection.alt}
        />
    </picture>
    {#if !hasLoaded}
        <LazyImageComponent/>
    {/if}
 </div>