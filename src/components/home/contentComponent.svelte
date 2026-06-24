<script>
	import BannerComponent  from '../home/banner.svelte';
  	import CaseSliderComponent from './caseSliderComponent.svelte';
	export let banner;
	export let case_data;
</script>

	<h1 class="secret-title">Erdem Akan Designer</h1>
	<BannerComponent banner={banner}/>
	<CaseSliderComponent caseData={case_data}/>
