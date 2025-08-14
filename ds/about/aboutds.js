let text = [
    "my gay awakening was leaf from my sims kingdom",
    "i have an unbridled hatred for cheddar from animal crossing",
    "my first shiny pokémon was a noibat from pokémon violet. their name is noinoi :)",
    "i have very scary blue eyes",
    "i once ate the same food from the same restaurant for every dinner for a month and a half",
    "我学中文学六个月，我觉得学汉字学得很容易，因为学中文的以前我学日文，可是现在我一日文词都不知道。",
    "my dream is to embrace the evil and go to l'université de strasbourg for grad school",
    "my first conlang was called mwsto and was an abomination against linguistics",
    "idk how to drive :("
]

function newFact() {
    let randomFact = Math.floor(Math.random() * (text.length));
    document.getElementById("result").innerHTML = text[randomFact];
}

let buddhaCard = document.getElementById('buddhacard');
let buddhaText = document.getElementById('buddhatext');
let horrorCard = document.getElementById('horrorcard');
let horrorText = document.getElementById('horrortext');
let filmCard = document.getElementById('filmcard');
let filmText = document.getElementById('filmtext');
let bugCard = document.getElementById('bugcard');
let bugText = document.getElementById('bugtext');
let birdCard = document.getElementById('birdcard');
let birdText = document.getElementById('birdtext');
let bookCard = document.getElementById('bookcard');
let bookText = document.getElementById('booktext');
let musicalCard = document.getElementById('musicalcard');
let musicalText = document.getElementById('musicaltext');
let vgCard = document.getElementById('vgcard');
let vgText = document.getElementById('vgtext');
let albumCard = document.getElementById('albumcard');
let albumText = document.getElementById('albumtext');
let paintingCard = document.getElementById('paintingcard');
let paintingText = document.getElementById('paintingtext');
let pokemonCard = document.getElementById('pokemoncard');
let pokemonText = document.getElementById('pokemontext');
let animeCard = document.getElementById('animecard');
let animeText = document.getElementById('animetext');

function changeBuddhaCard() {
    if (buddhaCard.src == "https://files.catbox.moe/tk2m2a.png") {
        buddhaCard.src = "https://files.catbox.moe/1cwsyi.png"
        buddhaText.style.display = "block"
    } else {
        buddhaCard.src = "https://files.catbox.moe/tk2m2a.png"
        buddhaText.style.display = "none"
    }
}

function changeHorrorCard() {
    if (horrorCard.src == "https://files.catbox.moe/tk2m2a.png") {
        horrorCard.src = "https://files.catbox.moe/8n6vem.png"
        horrorText.style.display = "block"
    } else {
        horrorCard.src = "https://files.catbox.moe/tk2m2a.png"
        horrorText.style.display = "none"
    }
}

function changeFilmCard() {
    if (filmCard.src == "https://files.catbox.moe/tk2m2a.png") {
        filmCard.src = "https://files.catbox.moe/fphd1m.png"
        filmText.style.display = "block"
    } else {
        filmCard.src = "https://files.catbox.moe/tk2m2a.png"
        filmText.style.display = "none"
    }
}

function changeBugCard() {
    if (bugCard.src == "https://files.catbox.moe/tk2m2a.png") {
        bugCard.src = "https://files.catbox.moe/hcxkwd.png"
        bugText.style.display = "block"
    } else {
        bugCard.src = "https://files.catbox.moe/tk2m2a.png"
        bugText.style.display = "none"
    }
}

function changeBirdCard() {
    if (birdCard.src == "https://files.catbox.moe/tk2m2a.png") {
        birdCard.src = "https://files.catbox.moe/j4tzw7.png"
        birdText.style.display = "block"
    } else {
        birdCard.src = "https://files.catbox.moe/tk2m2a.png"
        birdText.style.display = "none"
    }
}

function changeBookCard() {
    if (bookCard.src == "https://files.catbox.moe/tk2m2a.png") {
        bookCard.src = "https://files.catbox.moe/039bci.png"
        bookText.style.display = "block"
    } else {
        bookCard.src = "https://files.catbox.moe/tk2m2a.png"
        bookText.style.display = "none"
    }
}

function changeMusicalCard() {
    if (musicalCard.src == "https://files.catbox.moe/tk2m2a.png") {
        musicalCard.src = "https://files.catbox.moe/otc0dq.png"
        musicalText.style.display = "block"
    } else {
        musicalCard.src = "https://files.catbox.moe/tk2m2a.png"
        musicalText.style.display = "none"
    }
}

function changeVideoGameCard() {
    if (vgCard.src == "https://files.catbox.moe/tk2m2a.png") {
        vgCard.src = "https://files.catbox.moe/56yaq0.png"
        vgText.style.display = "block"
    } else {
        vgCard.src = "https://files.catbox.moe/tk2m2a.png"
        vgText.style.display = "none"
    }
}

function changeAlbumCard() {
    if (albumCard.src == "https://files.catbox.moe/tk2m2a.png") {
        albumCard.src = "https://files.catbox.moe/s6wjvc.png"
        albumText.style.display = "block"
    } else {
        albumCard.src = "https://files.catbox.moe/tk2m2a.png"
        albumText.style.display = "none"
    }
}

function changePaintingCard() {
    if (paintingCard.src == "https://files.catbox.moe/tk2m2a.png") {
        paintingCard.src = "https://files.catbox.moe/9eogjd.png"
        paintingText.style.display = "block"
    } else {
        paintingCard.src = "https://files.catbox.moe/tk2m2a.png"
        paintingText.style.display = "none"
    }
}

function changePokemonCard() {
    if (pokemonCard.src == "https://files.catbox.moe/tk2m2a.png") {
        pokemonCard.src = "https://files.catbox.moe/r87jkk.png"
        pokemonText.style.display = "block"
    } else {
        pokemonCard.src = "https://files.catbox.moe/tk2m2a.png"
        pokemonText.style.display = "none"
    }
}

function changeAnimeCard() {
    if (animeCard.src == "https://files.catbox.moe/tk2m2a.png") {
        animeCard.src = "https://files.catbox.moe/84m51a.png"
        animeText.style.display = "block"
    } else {
        animeCard.src = "https://files.catbox.moe/tk2m2a.png"
        animeText.style.display = "none"
    }
}

// This section is iterally just taken from W2 Schools https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
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