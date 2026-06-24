<script>
     import { NOMAD_MILESTONES, THINKER, DESIGNER_WORKS, CONTACT, HOMEPAGE, CASE_DETAIL, CASE_STUDIES, NOMAD_EXHIBITIONS, NOMAD_LECTURES } from '../constans/routePaths.svelte';
     import {onDestroy, onMount} from "svelte";
     let isMobile;

     onMount(()=>{
        setIsMobile()
        if(typeof window !== "undefined"){
            window.addEventListener("resize",setIsMobile,{passive:true})
        }
    })
    onDestroy(()=>{
        if(typeof window !== "undefined") {
            window.removeEventListener("resize", setIsMobile, {passive: true})
        }

    })
    const setIsMobile=()=>{
        typeof window !== "undefined" && window.innerWidth < 769 ? isMobile = true : isMobile = false
    }


</script>

<footer class="footer-root">
     {#if isMobile}
          <div class="footer-container safe-area">
               <a href={HOMEPAGE} class="logo-item">
                    <picture>
                         <source  srcSet="/img/small-black-logo.webp 1x, /img/small-black-logo_2x.webp 2x, /img/small-black-logo_3x.webp 3x" type="image/webp"/>
                         <source  srcSet="/img/small-black-logo.png 1x, /img/small-black-logo_2x.png 2x, /img/small-black-logo_3x.png 3x" type="image/png"/>
                         <img src="/img/small-black-logo.png" alt="logo">
                    </picture>			                
                                                                          
               </a>
               <div class="social-icon-block">
                    <a title="Erdem Akan Instangram" target="_blank" rel="noreferrer" href="https://www.instagram.com/erdemakan/">
                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.0282 8.85537C21.7637 8.85538 21.5051 8.93383 21.2851 9.08081C21.0652 9.22778 20.8937 9.43668 20.7925 9.68109C20.6913 9.9255 20.6648 10.1944 20.7164 10.4539C20.768 10.7134 20.8954 10.9517 21.0824 11.1387C21.2695 11.3258 21.5078 11.4532 21.7673 11.5048C22.0268 11.5564 22.2957 11.5299 22.5401 11.4287C22.7845 11.3275 22.9934 11.156 23.1404 10.9361C23.2874 10.7161 23.3658 10.4575 23.3658 10.193C23.3658 9.83822 23.2249 9.49799 22.974 9.24715C22.7232 8.9963 22.383 8.85537 22.0282 8.85537ZM16.0816 10.5707C14.9703 10.5707 13.884 10.9002 12.96 11.5176C12.0359 12.135 11.3158 13.0125 10.8905 14.0392C10.4652 15.0659 10.3539 16.1957 10.5707 17.2856C10.7875 18.3756 11.3226 19.3768 12.1084 20.1626C12.8942 20.9484 13.8954 21.4835 14.9854 21.7003C16.0753 21.9171 17.205 21.8059 18.2318 21.3806C19.2585 20.9553 20.136 20.2352 20.7534 19.3111C21.3708 18.3871 21.7003 17.3008 21.7003 16.1895C21.6986 14.6998 21.1061 13.2717 20.0528 12.2183C18.9994 11.165 17.5713 10.5724 16.0816 10.5707ZM16.0816 19.7888C15.3698 19.7888 14.6739 19.5777 14.082 19.1822C13.4901 18.7868 13.0287 18.2247 12.7563 17.567C12.4839 16.9093 12.4126 16.1856 12.5514 15.4874C12.6903 14.7892 13.0331 14.1479 13.5364 13.6445C14.0398 13.1412 14.6811 12.7984 15.3793 12.6595C16.0775 12.5206 16.8012 12.5919 17.4588 12.8643C18.1165 13.1367 18.6786 13.598 19.0741 14.1899C19.4696 14.7818 19.6807 15.4776 19.6807 16.1895C19.6797 17.1437 19.3001 18.0586 18.6254 18.7333C17.9507 19.4081 17.0358 19.7877 16.0816 19.7888ZM27.4191 11.5196C27.4191 10.6196 27.2418 9.72847 26.8974 8.897C26.553 8.06552 26.0481 7.31003 25.4117 6.67366C24.7753 6.03729 24.0198 5.53249 23.1883 5.18811C22.3568 4.84372 21.4656 4.66648 20.5656 4.6665L11.5203 4.6665C10.6203 4.66648 9.7291 4.84372 8.89761 5.18811C8.06611 5.53249 7.31059 6.03729 6.67418 6.67366C6.03777 7.31003 5.53294 8.06552 5.1885 8.897C4.84407 9.72847 4.66677 10.6196 4.66675 11.5196L4.66675 20.5657C4.66677 21.4657 4.84407 22.3569 5.1885 23.1883C5.53294 24.0198 6.03777 24.7753 6.67418 25.4117C7.31059 26.0481 8.06611 26.5528 8.89761 26.8972C9.7291 27.2416 10.6203 27.4189 11.5203 27.4188H20.5656C21.4656 27.4189 22.3568 27.2416 23.1883 26.8972C24.0198 26.5528 24.7753 26.0481 25.4117 25.4117C26.0481 24.7753 26.553 24.0198 26.8974 23.1883C27.2418 22.3569 27.4191 21.4657 27.4191 20.5657V11.5196ZM25.2727 20.5657C25.2726 21.8141 24.7767 23.0112 23.8939 23.8939C23.0112 24.7766 21.814 25.2725 20.5656 25.2724H11.5203C10.9022 25.2725 10.2901 25.1507 9.71901 24.9142C9.14794 24.6777 8.62904 24.331 8.19195 23.8939C7.75485 23.4569 7.40813 22.938 7.17156 22.3669C6.935 21.7959 6.81323 21.1838 6.81321 20.5657V11.5196C6.81323 10.9015 6.935 10.2895 7.17156 9.71839C7.40813 9.14733 7.75485 8.62846 8.19195 8.1914C8.62904 7.75434 9.14794 7.40765 9.71901 7.17113C10.2901 6.9346 10.9022 6.81288 11.5203 6.8129H20.5656C21.814 6.81287 23.0112 7.30873 23.8939 8.19141C24.7767 9.07409 25.2726 10.2713 25.2727 11.5196V20.5657Z" fill="#231F20"/>
                         </svg>	
                    </a>
                    <a title="Erdem Akan Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/erdem_akan">
                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1419_1294)">
                              <path d="M17.9027 14.4686L25.3482 6H23.5838L17.119 13.3532L11.9555 6H6L13.8082 17.1193L6 26H7.7645L14.5917 18.2348L20.0447 26H26.0002L17.9025 14.4686H17.903H17.9027ZM15.486 17.2172L14.6948 16.11L8.40017 7.29961H11.1102L16.1902 14.4099L16.9813 15.517L23.5847 24.7593H20.8747L15.4862 17.2175V17.217L15.486 17.2172Z" fill="#231F20"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1419_1294">
                              <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
                              </clipPath>
                              </defs>
                         </svg>
                              
                              
                    </a>
                    <a title="Erdem Akan Medium" target="_blank" rel="noreferrer" href="#">
                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49007 10.468C7.51606 10.2051 7.41789 9.94522 7.22547 9.76829L5.2646 7.35975V7H11.3528L16.0586 17.5242L20.1961 7H26V7.35975L24.3234 8.99872C24.1788 9.11115 24.1071 9.29558 24.137 9.4784V21.5216C24.1071 21.7044 24.1788 21.8891 24.3234 22.0013L25.9606 23.6402V24H17.7252V23.6402L19.4212 21.9611C19.5879 21.7912 19.5879 21.7414 19.5879 21.4815V11.7472L14.8721 23.9604H14.2347L8.74509 11.7472V19.9327C8.69941 20.2769 8.8115 20.6233 9.04906 20.8722L11.2548 23.6006V23.9604H5V23.6006L7.20579 20.8722C7.44177 20.623 7.5473 20.2742 7.49007 19.9327V10.468Z" fill="#231F20"/>
                         </svg>
                    </a>
                    <a title="Erdem Akan Youtube" target="_blank" rel="noreferrer" href="#">
                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M26.7977 13.3391C26.7977 12.7255 26.6769 12.1179 26.442 11.551C26.2072 10.9841 25.863 10.469 25.4291 10.0351C24.9952 9.60117 24.4801 9.25699 23.9132 9.02217C23.3463 8.78735 22.7387 8.6665 22.1251 8.6665H10.0059C8.7666 8.66651 7.57811 9.1588 6.70183 10.0351C5.82554 10.9114 5.33325 12.0999 5.33325 13.3391V19.019C5.33325 19.6326 5.4541 20.2402 5.68892 20.8071C5.92374 21.374 6.26792 21.8891 6.70181 22.323C7.1357 22.7569 7.6508 23.1011 8.21771 23.3359C8.78462 23.5708 9.39223 23.6916 10.0059 23.6916H22.1251C23.3643 23.6916 24.5528 23.1993 25.4291 22.323C26.3054 21.4468 26.7977 20.2582 26.7977 19.019V13.3391ZM19.1514 16.4652L14.3181 19.1161C14.108 19.2298 13.9191 19.0776 13.9191 18.8388V13.3974C13.9191 13.1555 14.1139 13.0037 14.3241 13.1234L19.1906 15.9138C19.2377 15.9447 19.2757 15.9876 19.3007 16.0381C19.3256 16.0886 19.3367 16.1448 19.3327 16.201C19.3287 16.2572 19.3098 16.3113 19.2779 16.3578C19.2461 16.4042 19.2024 16.4413 19.1514 16.4652Z" fill="#231F20"/>
                              </svg>
                              
                    </a>
                    <a title="Erdem Akan Pinterest" target="_blank" rel="noreferrer" href="https://tr.pinterest.com/erdemakan/">
                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.6896 21.4808C16.3904 21.3803 15.8444 20.736 14.8254 20.1174C14.3714 22.4996 13.8356 24.8018 12.5688 26.3722C12.4881 26.4737 12.3785 26.5484 12.2545 26.5864C12.1305 26.6244 11.9978 26.6239 11.8741 26.5849C11.7504 26.546 11.6413 26.4705 11.5614 26.3684C11.4814 26.2662 11.4343 26.1422 11.4262 26.0128C11.2349 22.2174 12.5456 19.2045 13.1896 16.0264C11.9666 13.9676 13.3367 9.82365 15.9164 10.8448C19.0913 12.1002 13.1676 18.5001 17.1443 19.2994C21.296 20.134 22.9908 12.0957 20.4161 9.48111C16.6961 5.70625 9.5879 9.39531 10.462 14.7991C10.6276 15.8261 11.4894 16.2971 11.3798 17.3124C11.3656 17.4573 11.3166 17.5966 11.237 17.7185C11.1574 17.8404 11.0495 17.9412 10.9225 18.0124C10.7956 18.0836 10.6533 18.1231 10.5077 18.1275C10.3622 18.1319 10.2178 18.101 10.0868 18.0376C8.43997 17.2676 7.92944 15.5815 8.00764 13.4358C8.15504 9.33805 11.6896 6.46885 15.235 6.07178C19.7188 5.56991 23.9271 7.71825 24.508 11.9358C25.1615 16.6958 22.4838 21.8509 17.6896 21.4808Z" fill="#231F20"/>
                              </svg>
                              
                    </a>
               </div>
          </div>
     {:else}
          <div class="footer-container safe-area">
               <div class="footer-link-block">
                    <a class="link-head-item" href={DESIGNER_WORKS}>The designer</a>
                    <a href={DESIGNER_WORKS}>Works</a>
                    <a href={CASE_STUDIES}>Case studies</a>
                    
               </div>
               <div class="footer-link-block">
                    <a class="link-head-item" href={THINKER}>The thinker</a>
                    <a href={THINKER}>Talks</a>
                    <a href={THINKER}>Articles</a>
                    <a href={THINKER}>Boards</a>
               </div>
               <div class="footer-link-block">
                    <a class="link-head-item" href={NOMAD_MILESTONES}>The nomad</a>
                    <a href={NOMAD_MILESTONES}>Milestones</a>
                    <a href={NOMAD_EXHIBITIONS}>Exhibitons</a>
                    <a href={NOMAD_LECTURES}>Lectures</a>
               </div>
               
               <div class="footer-link-block">
                    <a class="link-head-item" href={CONTACT}>Contact</a>
                    <a title="Erdem Akan Email" target="_blank" rel="noreferrer" href="mailto:talk@erdemakan.com">talk@erdemakan.com</a>
                    <a title="Erdem Akan Instangram" target="_blank" rel="noreferrer" href="https://www.instagram.com/erdemakan/">Instagram</a>
                    <a title="Erdem Akan Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/erdem_akan">Twitter</a>
               </div>
               <div class="footer-link-block last">
                    <a title="Erdem Akan Medium" target="_blank" rel="noreferrer" href="#">Medium</a>
                    <a title="Erdem Akan Youtube" target="_blank" rel="noreferrer" href="#">Youtube</a>
                    <a title="Erdem Akan Pinterest" target="_blank" rel="noreferrer" href="https://tr.pinterest.com/erdemakan/">Pinterest</a>
               </div>
          </div>
        
     {/if}
        
</footer>