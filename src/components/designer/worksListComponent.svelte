<script>
  import WorksListImgComponent from "./worksListImgComponent.svelte"
  import {onMount} from "svelte"
  import { lazyImage } from "../../helper";
  export let works

  onMount(()=>{
        lazyImage()
    })
</script>

<div class="works-list-container">
    {#each works as item}
        <div class="works-list-block">
            <WorksListImgComponent item={item}/>
            <div class="text-item">
                <h2>{item.title}</h2>
                {#if item.year}<span class="year-item">{item.year}</span>{/if}
                {@html item.desc}
            </div>
        </div>
    {/each}
</div>
