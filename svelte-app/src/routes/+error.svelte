<svelte:head>
	<title>Not Found</title>
</svelte:head>
<div class="not-found-root">
    <div class="not-found-wrapper">
          <div class="text-block">
            <h1>
                Sorry,
                <span>We Lost that Page...</span>
            </h1>
            <p>the page you are looking for dosen’t exist or has been moved.</p>
          </div>  
          <picture class="img-item">
            <source media="(max-width:640px)" srcSet="/img/not-found-mobile-img.webp 1x, /img/not-found-mobile-img_2x.webp 2x, /img/not-found-mobile-img_3x.webp 3x" type="image/webp"/>
            <source media="(max-width:640px)" srcSet="/img/not-found-mobile-img.jpg 1x, /img/not-found-mobile-img_2x.jpg 2x, /img/not-found-mobile-img_3x.jpg 3x" type="image/jpg"/>
            <source media="(min-width:641px)" srcSet="/img/not-found-img.webp 1x, /img/not-found-img_2x.webp 2x" type="image/webp"/>
            <source media="(min-width:641px)" srcSet="/img/not-found-img.jpg 1x, /img/not-found-img_2x.jpg 2x" type="image/jpg"/>
            <img src="/img/not-found-img.jpg" alt="not-found">
          </picture>
    </div>
</div>