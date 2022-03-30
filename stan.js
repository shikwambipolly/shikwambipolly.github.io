
var i = 0;
var text = "sup, i'm Stan :)";

function typing() {
    if (i < text.length) {
        document.getElementById('sup').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 200);
    }
}

typing();




