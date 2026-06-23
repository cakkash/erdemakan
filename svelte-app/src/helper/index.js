export const lazyImage= ()=> {
    let pictures = document.querySelectorAll('picture.lazy');
    let pictureChildren=[];
    for(let childs of pictures){
        for(let child of childs.children){
            pictureChildren.push(child);
        }
    }

    var lazyImages = [].slice.call(pictureChildren);

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    if(entry.target.nodeName === "IMG"){
                        lazyImage.src = lazyImage.dataset.src;
                    }
                    if(entry.target.nodeName === "SOURCE"){
                        lazyImage.srcSet = lazyImage.dataset.srcSet;
                    }


                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        console.log('fallback-------');
        // Possibly fall back to event handlers here
    }
}