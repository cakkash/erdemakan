<script>
    import NomadImgComponent from "../nomad/nomadImgComponent.svelte"
    import {onMount} from "svelte"
    import { lazyImage } from "../../helper";
    export let curatedExhibitionsData
    export let curatedExhibitionsIntro = null

    onMount(()=>{
        lazyImage()
    })
</script>

<div>
    {#if curatedExhibitionsIntro}
    <div class="curated-intro">
        {#if curatedExhibitionsIntro.text}
            <p>{curatedExhibitionsIntro.text}</p>
        {/if}
        {#if curatedExhibitionsIntro.note}
            <p class="curated-note">{curatedExhibitionsIntro.note}</p>
        {/if}
    </div>
    {/if}
    {#each curatedExhibitionsData as item, i}
    <div class="nomad-content-container">
        <div class="nomad-left-block">
            <div class="index-text">{String(i + 1).padStart(2, "0")}</div>
            {#if item.year}
                <div class="year-text">{item.year}</div>
            {/if}
            {#if item.title}
                <div class="title-text">{item.title}</div>
            {/if}
        </div>
        <div class="nomad-right-block">
            {#if item.subtitle}
                <p class="subtitle">{item.subtitle}</p>
            {/if}
            {#if item.description}
                <p>{item.description}</p>
            {/if}
            {#if item.details}
                {#each item.details as detail}
                    <div class="detail-block">
                        <div class="detail-label">{detail.label}</div>
                        {#each detail.values as value}
                            <div class="detail-value">{value}</div>
                        {/each}
                    </div>
                {/each}
            {/if}
            {#if item.imgList}
                <div class="img-block three-col">
                    {#each item.imgList as img}
                        <NomadImgComponent item={img}/>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    {/each}
</div>
