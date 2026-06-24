<script>
    import {page} from "$app/stores"
    import {CASE_STUDIES, DESIGNER, DESIGNER_WORKS} from "../../../constans/routePaths.svelte"
    import CaseStudiesComponent from "../../../components/designer/caseStudiesComponent.svelte"
    export let designerData = $$props && $$props.data ?  $$props.data.designerData: {}
</script>

<svelte:head>
    <title>Erdem Akan | Case studies</title>
    <meta name="description" content="Case studies Page" />
</svelte:head>

<div class="case-studies-root">
    <div class="sub-menu-block">
        <h1 class="secret-title">The designer</h1>
        <a href={DESIGNER_WORKS} class={`${$page.url.pathname === DESIGNER_WORKS ? "active":""}`}>Works</a>
        <a href={CASE_STUDIES} class={`${$page.url.pathname === CASE_STUDIES ? "active":""}`} >Case studies</a>
    </div>
   <div class="case-studies-wrapper safe-area">
         
        <CaseStudiesComponent {...designerData}/>
   </div>
</div>