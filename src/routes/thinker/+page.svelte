<script>
    import {page} from "$app/stores"
  import VideoFrame from "../../components/thinker/videoFrame.svelte";
  import {onMount} from "svelte"
  import { lazyImage } from "../../helper";
  import ThinkerImgItem from "../../components/thinker/articleImgItem.svelte";
  import { THINKER } from "../../constans/routePaths.svelte";
   

    export let thinkerData = $$props && $$props.data ?  $$props.data.thinkerData: {}
    onMount(()=>{
        lazyImage()
    })
    let isOpen = false;
    let selectedVideoLink = "";
    

    const openLightBox = (link) => {
        isOpen = true
        selectedVideoLink = link;
        document.body.style.marginRight = '0px';
			document.body.style.overflow = 'hidden';
    }

    const closeLightBox = () => {
        isOpen = false;
        document.body.style.overflow = 'visible';
		document.body.style.marginRight = '0px';
    }

</script>

<svelte:head>
    <title>Erdem Akan | Thinker</title>
    <meta name="description" content="Thinker Page" />
</svelte:head>


{#if thinkerData && thinkerData.thinker} 
<div class="thinker-root">
    <div class="sub-menu-block mobile">
        <h1>
            <a href={THINKER} class={`${$page.url.pathname === THINKER ? "active":""}`}>The thinker</a>
        </h1>
        
    </div>
    <div class="thinker-wrapper safe-area">
        <div class="thinker-container">
            <div class="text-block">
                {#each thinkerData.thinker.text_area as text}
                    {@html text}
                {/each}
            </div>
            <div class="talks-container">
                <div class="head-block">
                    <h2>{thinkerData && thinkerData.thinker.talks_video && thinkerData.thinker.talks_video.title}</h2>
                    <a target="_blank" rel="noreferrer" href={thinkerData.thinker.talks_video.more_on_link}>
                        <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="34" height="2" fill="black"/>
                        </svg>                                
                        {thinkerData.thinker.talks_video.link_desc}
                    </a>
                </div>
                <div  class="card-block">
                    {#each thinkerData.thinker.talks_video.video_card as item}
                        <div class="card-item" class:opened={isOpen} on:click={isOpen ? closeLightBox : () => openLightBox(item.link)} >
                            <div class="img-item">
                                <div class="gradient-bg"></div>
                                <div class="play-icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#F2F2F2"/>
                                        <path d="M27.6432 20.848C28.2699 20.4563 28.2699 19.5436 27.6432 19.152L14.53 10.9562C13.8639 10.5399 13 11.0188 13 11.8042V28.1957C13 28.9812 13.864 29.46 14.53 29.0437L27.6432 20.848Z" fill="#141414"/>
                                    </svg> 
                                </div>
                                 
                                <picture>
                                    <source
                                            media="(max-width:640px)"
                                            data-srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.webp 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.webp 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                                            srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.webp 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.webp 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.webp 3x`}
                                            type="image/webp"
                                    />
                                    <source
                                            media="(max-width:640px)"
                                            data-srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.jpg 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                                            srcSet={`${item.img_mobile.substring(0,item.img_mobile.lastIndexOf("."))}.jpg 1x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.jpg 2x, ${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.jpg 3x`}
                                            type="image/jpg"
                                    />
                                    <source
                                            media="(min-width:641px)"
                                            data-srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
                                            srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.webp 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`}
                                            type="image/webp"
                                    />
                                    <source
                                            media="(min-width:641px)"
                                            data-srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.jpg 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.jpg 2x`}
                                            srcSet={`${item.img.substring(0,item.img.lastIndexOf("."))}.jpg 1x, ${item.img.substring(0, item.img.lastIndexOf("."))}_2x.jpg 2x`}
                                            type="image/jpg"
                                    />
                                    <img src={`${item.img}`} alt={item.alt} />
                                </picture>                   
                            </div>
                            <div class="desc-item">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            {#each thinkerData.thinker.content as contentData}
                <div class="content-container">
                    <div class="head-block">
                        <h2>{contentData.title}</h2>
                        <a target="_blank" rel="noreferrer" href={contentData.more_on_link}>
                            <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="34" height="2" fill="black"/>
                            </svg>                                
                            {contentData.link_desc}
                        </a>
                    </div>
                    <div  class="card-block">
                        {#each contentData.video_card as item}
                            <a target="_blank" rel="noreferrer" href={item.link} class="card-item">
                                
                                <ThinkerImgItem item={item}/>
                                <div class="desc-item">
                                    <p>{item.desc}</p>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
{/if}

{#if isOpen}
    <VideoFrame video_link={selectedVideoLink}  closeLightBox={closeLightBox}/>
{/if}
