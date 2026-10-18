<script>
    import {page} from "$app/stores"
    import NomadExhibitionsComponent from "../../../components/nomad/nomadExhibitionsComponent.svelte";
    import {NOMAD_EXHIBITIONS, NOMAD_MILESTONES} from "../../../constans/routePaths.svelte"
    export let nomadData = $$props && $$props.data ?  $$props.data.nomadData: {}
</script>



<svelte:head>
    <title>Erdem Akan | Inspiration &amp; Discoveries</title>
    <meta name="description" content="Nomad Page" />
</svelte:head>

<div class="nomad-root">
    <div class="sub-menu-block">
        <h1 class="secret-title">The thinker</h1>
        <a href={NOMAD_MILESTONES} class={`${$page.url.pathname === NOMAD_MILESTONES ? "active":""}`}>Curated Exhibitions</a>
        <a href={NOMAD_EXHIBITIONS} class={`${$page.url.pathname === NOMAD_EXHIBITIONS ? "active":""}`}>Inspiration &amp; Discoveries</a>
    </div>
    <div class="nomad-wrapper">
        <NomadExhibitionsComponent {...nomadData}/>
    </div>
</div>