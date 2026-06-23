<script>
    import {page} from "$app/stores"
    import {CONTACT} from "../../constans/routePaths.svelte"
    export let contactData = $$props && $$props.data ?  $$props.data.contactData: {}
    let contact = contactData.contact
</script>

<svelte:head>
    <title>Erdem Akan | Contact</title>
    <meta name="description" content="Contact Page" />
</svelte:head>


<div class="contact-root">
        <div class="sub-menu-block mobile">
            <h1>
                <a href={CONTACT} class={`${$page.url.pathname === CONTACT ? "active":""}`}>Contact</a>
            </h1>
            
        </div>
        <div class="contact-wrapper">
            <div class="contact-link-container">
                <span>Write</span>
                <a href="mailto:talk@erdemakan.com">{contact.mail}</a>
                <div class="scm-head-item">
                    <span>Follow</span>
                </div>
                <div class="scm-block">
                    {#each contact.scm_links as item}
                         <a title={`Erdem Akan ${item.title}`} target="_blank" rel="noreferrer" href={item.link}>{item.name}</a>
                    {/each}
                </div>
            </div>
            <div class="img-block">
                <picture class="img-item">
                    <source
                        media="(min-width:769px)"
                        srcSet={`${contact.img.substring(0,contact.img.lastIndexOf("."))}.webp 1x`}
                        type="image/webp"/>
                    <source
                        media="(min-width:769px)"
                        srcSet={`${contact.img.substring(0,contact.img.lastIndexOf("."))}.jpg 1x`}
                        type="image/jpg"/>
                      <source
                        media="(max-width:768px)"
                        srcset={`${contact.mobile_img.substring(0,contact.mobile_img.lastIndexOf(".")
                        )}.webp 1x, ${contact.mobile_img.substring(0, contact.mobile_img.lastIndexOf("."))}_2x.webp 2x, 
                        ${contact.mobile_img.substring(0, contact.mobile_img.lastIndexOf("."))}_3x.webp 3x`}
                        type="image/webp"
                      />
                      <source
                        media="(max-width:768px)"
                        srcset={`${contact.mobile_img.substring(0,contact.mobile_img.lastIndexOf(".")
                        )}.jpg 1x, ${contact.mobile_img.substring(0, contact.mobile_img.lastIndexOf("."))}_2x.jpg 2x, 
                        ${contact.mobile_img.substring(0, contact.mobile_img.lastIndexOf("."))}_3x.jpg 3x`}
                        type="image/jpg"
                      />
                    <img src={`${contact.img}`} alt={contact.alt} />
                  </picture>
            </div>
        </div>
       
</div>