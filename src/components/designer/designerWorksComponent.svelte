 
 <script>
    import FilterComponent from "../../components/designer/filterComponent.svelte"
    import { lazyImage } from "../../helper";
    import {onMount} from "svelte"
    import WorksListComponent from "./worksListComponent.svelte"
    export let works

    let isSortOpen = false;
    let index = 0;
    let selectedCategory = null;
    let originalDataArr = [...works]
    let originalData = works.splice(0, works.length, ...originalDataArr);

    // Kategori seçilmişse listeyi filtrele; seçili değilse tüm work'ler görünür.
    $: filteredWorks = works.filter(item => !selectedCategory || item.category === selectedCategory);

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

    <FilterComponent isSortOpen={isSortOpen} toggleSort={toggleSort} bind:selectedCategory data={works}/>
    <WorksListComponent works={sortedWorks}/>
