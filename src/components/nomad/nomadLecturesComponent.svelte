<script>
    import NomadImgComponent from "../nomad/nomadImgComponent.svelte"
    import {onMount} from "svelte"
    import { lazyImage } from "../../helper";
    export let lectureData 
    onMount(()=>{
        lazyImage()
    })
</script>

<div>
    {#each lectureData as item}
    <div class="nomad-content-container">
        <div class="nomad-left-block">
            {#if item.monthText}
                <span>{item.monthText}</span>
            {/if}
            {#if item.yearText}
                <span>{item.yearText}</span>
            {/if}
            {#if item.yearDesc}
                <p>{item.yearDesc}</p>
            {/if}
        </div>
        <div class="nomad-right-block">
            
                {#each item.topDesc as text}
                    {@html text}
                {/each}
                        
            {#if item.imgList}
                <div class="img-block">
                    {#each item.imgList as item}
                        <NomadImgComponent item={item}/>
                    {/each}
                </div>  
            {/if}
            {#if item.bottomDesc}            
                    {#each item.bottomDesc as text}
                        {@html text}
                    {/each}
            {/if}
        </div>
    </div>
{/each}

</div>
