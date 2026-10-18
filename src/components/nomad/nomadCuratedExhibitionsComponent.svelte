<script>
    import NomadImgComponent from "../nomad/nomadImgComponent.svelte"
    import {onMount} from "svelte"
    import { lazyImage } from "../../helper";
    export let curatedExhibitionsData

    onMount(()=>{
        lazyImage()
    })
</script>

<div>
    {#each curatedExhibitionsData as item, i}
    <div class="nomad-content-container">
        <div class="nomad-left-block">
            <div class="index-text">{String(i + 1).padStart(2, "0")}</div>
            {#if item.year}
                <div class="year-text">{item.year}</div>
            {/if}
            {#if item.title}
                <div class="title-text">{@html item.title}</div>
            {/if}
        </div>
        <div class="nomad-right-block">
            {#if item.topDesc}
                {#each item.topDesc as text}
                    {@html text}
                {/each}
            {/if}
            {#if item.imgList}
                <div class="img-block">
                    {#each item.imgList as img}
                        <NomadImgComponent item={img}/>
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
