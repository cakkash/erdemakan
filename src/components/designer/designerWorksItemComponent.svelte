<script>
    import DesignerWorksImgComponent from "../designer/designerWorksImgComponent.svelte"
    export let item
    export let isGalleryOpen
    export let closeLightBox
    export let openLightBox
    export let index;
</script>


<div class="designer-content-item">
    <div class="card-item">
        <DesignerWorksImgComponent item={item}/>
        <div class="text-item">
            <h2> {item.year}
                <span>
                    {item.title}
                </span>
            </h2>
        <p>
            {item.desc}
        </p>
        <div class="link-item" class:opened={isGalleryOpen} on:click={isGalleryOpen ? closeLightBox : () => openLightBox(index)}>
            <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="34" height="2" fill="black"/>
            </svg>                                
            view work
        </div>
        </div>  
    </div>
     
</div>