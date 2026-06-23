<script>
	import { page } from '$app/stores';
	import Content from '../components/home/contentComponent.svelte';
	export let homeData = $$props && $$props.data ?  $$props.data.homeData: {}
</script>

<svelte:head>
	<title>Erdem Akan</title>
	<meta name="description" content="Erdem Akan Designer" />
</svelte:head>


<Content {...homeData}/>



