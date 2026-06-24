<script>
  import CaseStudiesDetailComponent from "../../../components/designer/caseStudiesDetailComponent.svelte"
  import {collectionStoreData } from "../../../store/store";
  export let collectionData = $$props && $$props.data ?  $$props.data.collectionData: {} 
  
  collectionStoreData.subscribe((result)=>{
    collectionData = result
  })
</script>
<svelte:head>
    <title>Erdem Akan | Case Detail</title>
    <meta name="description" content="Case Detail Page" />
</svelte:head>

<CaseStudiesDetailComponent {...collectionData} />