<script>
     import {onMount,onDestroy,beforeUpdate} from "svelte"
    
     
     export let toggleSort
     export let isSortOpen
    let index
    let isFilterOpen = false;
 
    
    let selectedItem;
    let isMobile;
    let selectBoxArea;
    let isOpen = {};
    onMount(()=>{
        setIsMobile()
        if(typeof window !== "undefined"){
            window.addEventListener("click", outsideClick, { passive: true });
            window.addEventListener("resize", setIsMobile, { passive: true });
            
        }
    })
    onDestroy(()=>{
        if(typeof window !== "undefined"){
            window.removeEventListener("click", outsideClick, { passive: true });
            window.removeEventListener("resize", setIsMobile, { passive: true });
        }
    })
    const setIsMobile=()=>{
        typeof window !== "undefined" && window.innerWidth < 768 ? isMobile = true : isMobile = false
    }
    const toggleFilter=()=>{
        isFilterOpen = !isFilterOpen;
        if(isFilterOpen === false){
            isOpen = false
        }
       
    }
    const mobileFiterFunc=(key)=>{
        isOpen = {[key]: !isOpen[key]};
    }
    
    const selectedItemFunc = (item,inx) =>{
        selectedItem = item;
        index = inx;
        isFilterOpen = false;
        isOpen = false;
    }
    let filterData = [
        {
            "id": 1,
            "title": "Category",
            "category_names":["Furnitures","Accessories","Jewelry"]
        },
        {
            "id": 2,
            "title": "Type",
            "category_names":["Glass","Ceramic","Wood","Metal"]
        },
        {
            "id": 3,
            "title": "Batch Size",
            "category_names":["0-100","100-1000","1000+"]
        }
    ]

    const outsideClick = (e) => {
        if (selectBoxArea && !selectBoxArea.contains(e.target) && isFilterOpen) {
            isFilterOpen = false;
            isOpen = false;
        }
  };
</script>

<div class="filter-container" bind:this={selectBoxArea}>

    <div class={`filter-block ${isFilterOpen === true ? "active" : ""}`}  on:click={()=>toggleFilter()}>
        <span>
            {#if selectedItem}
                {selectedItem}
                {:else}
                Filter
            {/if}
        </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L7.66987 8.5L16.3301 8.5L12 16Z" fill="black"/>
      </svg>           
    </div>

    <div class={`sort-block ${isSortOpen === true ? "active" : ""}`} on:click={()=>{toggleSort()}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V18M12 18L8 14M12 18L16 14" stroke="black"/>
        </svg>                    
        <span>Sort by date</span>
    </div>

{#if isFilterOpen === true}
   <div class="open-filter-menu-wrapper">
        {#each filterData as item,menuIndex}
            <div class={`filter-menu-container ${isOpen[menuIndex + 1]  ? "active" : ""}`} on:click={()=>mobileFiterFunc(menuIndex + 1)}>
                <div  class="filter-head-block">
                        <span class="filter-head-item">{item.title}</span>
                        <div class="icon-item"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path d="M1 1L5.5 6L10 1" stroke="black" stroke-width="2"/>
                                </svg>
                        </div>         
                </div> 
                {#if isMobile}
                    {#if isOpen[menuIndex + 1]}
                        <div class="filter-menu-block">
                            {#each item.category_names as items,index}
                                    <span on:click={()=>{selectedItemFunc(items,index)}}>{items}</span>
                            {/each}
                        </div>
                    {/if}
                    {:else}
                        <div class="filter-menu-block">
                            {#each item.category_names as items,index}
                                    <span on:click={()=>{selectedItemFunc(items,index)}}>{items}</span>
                            {/each}
                        </div>
                {/if}
                
            </div>
        {/each}
   </div>
{/if}
</div>




