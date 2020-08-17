// script for transisi//
var posY  = 0;
var jarak = 10;

function smoothTransisi(id){
    var target = document.getElementById(id).offsetTop;
    var scrollanimate = setTimeout(function(){
                            smoothTransisi(id);
                        }, 5)

    posY = posY + jarak;

    if(posY >= target) {
        clearTimeout(scrollanimate);
        posY = 0;
    } else {
    window.scroll(0,posY)
    }

    return false;
}

// script for slideshow discover//
var index = 0;
fungsi() ;

function fungsi(){
    var i;
    var slides = document.getElementsByClassName("slideshow");
    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }

    index++;
    if(index > slides.length) { index = 1 }

    slides[index-1].style.display = "block";

    setTimeout(fungsi, 3000);
};

// script for efek testimoni//
const txtElement = ['Apa pendapat mereka ?'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();

