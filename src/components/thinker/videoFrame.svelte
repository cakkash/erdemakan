<script>
    export let closeLightBox;
    export let video_link;
    let container;
    
    const outsideClick = (e) => {
        if (container && !container.contains(e.target)) {
            closeLightBox()
        }    
    }
    
    </script>
    
    <div class="video-lightbox-root" on:click={outsideClick} >
        <div class="video-lightbox-container" >
            <div class="close-button-block" >
                <div class="icon-item" on:click={closeLightBox}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.09961" y1="20.1923" x2="20.1915" y2="1.10042" stroke="#626262" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="27.5" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.9004 20.8994)" stroke="#626262" stroke-linecap="round"/>
                      </svg>
                </div>
                      
            </div>
            <div class="iframe-container" bind:this={container}>
                <div class="iframe-block">
                    <iframe src={video_link}  title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>
            </div>
        </div>
    </div>
    
    
    
    