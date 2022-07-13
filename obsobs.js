const nav = document.querySelector(".nav-wrapper");
    const slider = document.querySelector("section.slider");

    const sliderOptions = {
        rootMargin: "-200px 0px 0px 0px"
    };

    const sliderObserver = new IntersectionObserver(function(
        enteries, 
        sliderObserver
    ) {
        enteries.forEach(entry=> {
            if(!entry.isIntersecting){
                nav.classList.add("grey");
            } else {
                nav.classList.remove("grey");
            }
        });

    }, sliderOptions);

    sliderObserver.observe(slider);