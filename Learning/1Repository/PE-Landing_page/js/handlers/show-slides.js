function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides_fade");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    store.slideIndex++;
    if (store.slideIndex > slides.length) {
        store.slideIndex = 1
    }
    slides[store.slideIndex-1].style.display = "block";
    setTimeout(showSlides, 6000);
}