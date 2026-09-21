 
 <script>
    import FilterComponent from "../../components/designer/filterComponent.svelte"
    import { lazyImage } from "../../helper";
    import {onMount} from "svelte"
    import DesignerWorksItemComponent from "../designer/designerWorksItemComponent.svelte"
    import GalleryLbComponent from "./galleryLbComponent.svelte";
    export let works
    let activeIndex;
    let firstIndex;
   
    // let images = [
    //     {
    //         "id":1,
    //         "img": "/img/design-work-img.jpg",
    //         "lb_img" : "/img/gallery-img1.jpg",
    //         "alt": "designer-works",
    //         "year":"2010",
    //         "title":"Sitbag Studio Collection",
    //         "desc":"As part of the “Reincarnation Collection”, The Suitcases are reincarnated to chairs with all the memories from previous lives."
            
    //     },
    //     {
    //         "id":2,
    //         "img": "/img/design-work-img-5.jpg",
    //         "lb_img": "/img/gallery-img2.jpg",
    //         "alt": "designer-works",
    //         "year":"2009",
    //         "title":"Sitbag Studio Collection",
    //         "desc":"As part of the “Reincarnation Collection”, The Suitcases are reincarnated to chairs with all the memories from previous lives."
            
           
    //     },
    //     {
    //         "id":3,
    //         "img": "/img/design-work-img-2.jpg",
    //         "lb_img": "/img/gallery-img3.jpg",
    //         "alt": "designer-works",
    //         "year":"2008",
    //         "title":"Sitbag Studio Collection",
    //         "desc":"As part of the “Reincarnation Collection”, The Suitcases are reincarnated to chairs with all the memories from previous lives."
    //     },
    //     {
    //         "id":4,
    //         "img": "/img/design-work-img-4.jpg",
    //         "lb_img": "/img/gallery-img2.jpg",
    //         "alt": "designer-works",
    //         "year":"2011",
    //         "title":"Sitbag Studio Collection",
    //         "desc":"As part of the “Reincarnation Collection”, The Suitcases are reincarnated to chairs with all the memories from previous lives."
    //     },
    //      {
    //         "id":5,
    //         "img": "/img/design-work-img-3.jpg",
    //         "lb_img": "/img/gallery-img3.jpg",
    //         "alt": "designer-works",
    //         "year":"2012",
    //         "title":"Sitbag Studio Collection",
    //         "desc":"As part of the “Reincarnation Collection”, The Suitcases are reincarnated to chairs with all the memories from previous lives."
    //     }
    // ]
    

    let isGalleryOpen = false;
    let isSortOpen = false;
    let index = 0;
    let originalDataArr = [...works]
    let originalData = works.splice(0, works.length, ...originalDataArr);

    // Work sayısı kaç olursa olsun (5, 9, vs.) otomatik olarak ikişerli
    // gruplara bölüyoruz; son grup tek kalırsa "last" class'ını alır.
    $: sortedWorks = [...works].sort((a,b)=> index === 1 ? a.year - b.year : index === -1 ? b.year - a.year : originalData);
    $: workGroups = (() => {
        const groups = [];
        for (let i = 0; i < sortedWorks.length; i += 2) {
            groups.push(sortedWorks.slice(i, i + 2));
        }
        return groups;
    })();

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
    
    


    const openLightBox = (activeIndex) => {
        firstIndex = works.findIndex(item => item.id === activeIndex);
        isGalleryOpen = true
        document.body.style.marginRight = '0px';
		document.body.style.overflow = 'hidden';
    }

    const closeLightBox = () => {
        isGalleryOpen = false;
        document.body.style.overflow = 'visible';
		document.body.style.marginRight = '0px';
    }
    
   
 </script>

    <FilterComponent isSortOpen={isSortOpen} toggleSort={toggleSort} data={works}/>
    <div class="designer-content-container">
        {#each workGroups as group, gi}
            <div class={`designer-content-block ${gi === workGroups.length - 1 ? "last" : ""}`}>
                {#each group as item}
                    <DesignerWorksItemComponent openLightBox={openLightBox} closeLightBox={closeLightBox} isGalleryOpen={isGalleryOpen} item={item} index={item.id}/>
                {/each}
            </div>
        {/each}
    </div>

{#if isGalleryOpen}
    <GalleryLbComponent images={works} closeLightBox={closeLightBox} firstIndex={firstIndex}/>
{/if}

 