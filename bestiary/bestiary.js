// This section is iterally just taken from W2 Schools https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

let imageSlidesIndex = 1;
showImageSlides(imageSlidesIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    showImageSlides(imageSlidesIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    showImageSlides(imageSlidesIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showImageSlides(n) {
    let o;
    let imageSlides = document.getElementsByClassName("image-slide");
    if (n > imageSlides.length) { imageSlidesIndex = 1 }
    if (n < 1) { imageSlidesIndex = imageSlides.length }
    for (o = 0; o < imageSlides.length; o++) {
        imageSlides[o].style.display = "none";
    }
    imageSlides[imageSlidesIndex - 1].style.display = "block";
}