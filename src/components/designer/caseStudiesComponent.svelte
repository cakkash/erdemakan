<script>

  import { CASE_DETAIL } from "../../constans/routePaths.svelte";
  import CaseStudiesComponent from "../designer/caseStudiesImgComponent.svelte" 
  import {onMount} from "svelte"
  import { lazyImage } from "../../helper";
  export let case_studies
 
  onMount(()=>{
        lazyImage()
    })
</script>
<svelte:head>
    <title>Case Studies</title>
</svelte:head>


     <div class="case-studies-container">
        {#each case_studies as item}
        <div class="case-studies-block">
            <div class="text-item">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <a href={CASE_DETAIL.replace(":detail",item.link)}>
                    <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="2" fill="black"/>
                    </svg>                                
                    view case
                </a>
            </div>
            <CaseStudiesComponent item={item}/>
        </div>
        {/each}
     </div>
