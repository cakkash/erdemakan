<script>
    import {page} from "$app/stores"
    import DesignerWorksComponent from "../../../components/designer/designerWorksComponent.svelte"
    import CaseStudiesComponent from "../../../components/designer/caseStudiesComponent.svelte"
    import {CASE_STUDIES, DESIGNER} from "../../../constans/routePaths.svelte"
    import { DESIGNER_WORKS } from "../../../constans/routePaths.svelte";

    export let designerData = $$props && $$props.data ?  $$props.data.designerData: {}
    
</script>

<svelte:head>
    <title>Erdem Akan | Works</title>
    <meta name="description" content="Designer Page" />
</svelte:head>


<div class="designer-root">
    <div class="sub-menu-block">
        <h1 class="secret-title">The designer</h1>
        <a href={DESIGNER_WORKS} class={`${$page.url.pathname === DESIGNER_WORKS ? "active":""}`}>Works</a>
        <a href={CASE_STUDIES} class={`${$page.url.pathname === CASE_STUDIES ? "active":""}`} >Case studies</a>
    </div>
     <div class="designer-wrapper safe-area">
        <DesignerWorksComponent {...designerData}/> 
         
     </div>
     
</div>