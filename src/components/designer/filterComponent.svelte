<script>
    import {onMount,onDestroy} from "svelte"

    export let toggleSort
    export let isSortOpen
    export let selectedCategory = null;

    let isFilterOpen = false;
    let selectBoxArea;

    const categories = [
        "Spaces & Installations",
        "Furnitures & Accessories",
        "Objects & Products",
        "Personal Accessories"
    ]

    onMount(()=>{
        if(typeof window !== "undefined"){
            window.addEventListener("click", outsideClick, { passive: true });
        }
    })
    onDestroy(()=>{
        if(typeof window !== "undefined"){
            window.removeEventListener("click", outsideClick, { passive: true });
        }
    })

    const toggleFilter = () => {
        isFilterOpen = !isFilterOpen;
    }

    const selectCategory = (value) => {
        selectedCategory = (selectedCategory === value) ? null : value;
        isFilterOpen = false;
    }

    const clearFilters = (e) => {
        e.stopPropagation();
        selectedCategory = null;
    }

    const outsideClick = (e) => {
        if (selectBoxArea && !selectBoxArea.contains(e.target) && isFilterOpen) {
            isFilterOpen = false;
        }
    };
</script>

<div class="filter-container" bind:this={selectBoxArea}>

    <div class={`filter-block ${isFilterOpen === true ? "active" : ""}`}  on:click={()=>toggleFilter()}>
        <span>
            {#if selectedCategory}
                {selectedCategory}
                {:else}
                Filter
            {/if}
        </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L7.66987 8.5L16.3301 8.5L12 16Z" fill="black"/>
      </svg>
    </div>
    {#if selectedCategory}
        <div class="clear-filter-block" on:click={clearFilters}>
            <span>Clear</span>
        </div>
    {/if}

    <div class={`sort-block ${isSortOpen === true ? "active" : ""}`} on:click={()=>{toggleSort()}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V18M12 18L8 14M12 18L16 14" stroke="black"/>
        </svg>
        <span>Sort by date</span>
    </div>

{#if isFilterOpen === true}
   <div class="open-filter-menu-wrapper">
        <div class="filter-menu-container active">
            <div class="filter-menu-block">
                {#each categories as item}
                    <span class={`${selectedCategory === item ? "selected" : ""}`} on:click={(e)=>{e.stopPropagation(); selectCategory(item)}}>{item}</span>
                {/each}
            </div>
        </div>
   </div>
{/if}
</div>
