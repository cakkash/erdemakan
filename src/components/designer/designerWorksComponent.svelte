 
 <script>
    import FilterComponent from "../../components/designer/filterComponent.svelte"
    import { lazyImage } from "../../helper";
    import {onMount} from "svelte"
    import WorksListComponent from "./worksListComponent.svelte"
    export let works

    let isSortOpen = false;
    let index = 0;
    let selectedCategory = null;
    let selectedType = null;
    let originalDataArr = [...works]
    let originalData = works.splice(0, works.length, ...originalDataArr);

    // Category / Type se\u00e7ilmi\u015fse listeyi filtrele; hi\u00e7biri se\u00e7ili de\u011filse t\u00fcm work'ler g\u00f6r\u00fcn\u00fcr.
    $: filteredWorks = works.filter(item => {
        const categoryMatch = !selectedCategory || item.category === selectedCategory;
        const typeMatch = !selectedType || item.type === selectedType;
        return categoryMatch && typeMatch;
    });

    $: sortedWorks = [...filteredWorks].sort((a,b)=> index === 1 ? a.year - b.year : index === -1 ? b.year - a.year : originalData);

    onMount(()=>{
        lazyImage()
        originalData
    })
    const toggleSort = () =>{
        isSortOpen = !isSortOpen;
        if(isSortOpen === true){
            index = 1
        }else if(isSortOpen === false){
            index = -1
        }
    }
 </script>

    <FilterComponent isSortOpen={isSortOpen} toggleSort={toggleSort} bind:selectedCategory bind:selectedType data={works}/>
    <WorksListComponent works={sortedWorks}/>
