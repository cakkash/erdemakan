<script>
    import {page} from "$app/stores"
    import NomadLecturesComponent from "../../../components/nomad/nomadLecturesComponent.svelte";
    import {NOMAD_EXHIBITIONS, NOMAD_LECTURES, NOMAD_MILESTONES} from "../../../constans/routePaths.svelte"
    export let nomadData = $$props && $$props.data ?  $$props.data.nomadData: {}
</script>



<svelte:head>
    <title>Erdem Akan | Lectures</title>
    <meta name="description" content="Nomad Page" />
</svelte:head>

<div class="nomad-root">
    <div class="sub-menu-block">
        <h1 class="secret-title">The thinker</h1>
        <a href={NOMAD_MILESTONES} class={`${$page.url.pathname === NOMAD_MILESTONES ? "active":""}`}>Milestones</a>
        <a href={NOMAD_EXHIBITIONS} class={`${$page.url.pathname === NOMAD_EXHIBITIONS ? "active":""}`}>Exhibitions</a>
        <a href={NOMAD_LECTURES} class={`${$page.url.pathname === NOMAD_LECTURES ? "active":""}`}>Lectures</a>
    </div>
    <div class="nomad-wrapper">
        <NomadLecturesComponent {...nomadData}/>
    </div>
</div>