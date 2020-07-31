document.addEventListener("click", onClick);
document.addEventListener("mouseover", onHover);
document.addEventListener("mouseout", onOut);

var cards = document.getElementsByClassName('card');
var title = document.getElementsByClassName('title');

console.log(cards);
console.log(title);

anime({
    targets: title,
    scale: 1.1,
    duration: 1500,
    direction: 'alternate'
})

anime({
    targets: document.getElementsByClassName('title-contain'),
    scale: 1.5,
    duration: 1500,
    direction: 'alternate'
})

anime({
    targets: cards,
    scale: 1.1,
    delay: anime.stagger(50),
    direction: 'alternate'
})

function onHover(event) {
    var elem = event.target;
    parentClass = elem.parentElement.className;
    parentTag = elem.parentElement.tagName;
    if (parentClass == 'card text-center') {
        event.preventDefault();
        anime({
            targets: elem.parentElement,
            scale: 1.1,
            duration: 500,
        });
    }
    if (parentTag == 'LI') {
        event.preventDefault();
        anime({
            targets: elem.parentElement,
            scale: 1.15,
            duration: 500,
        });
    }
    if (parentTag == 'A') {
        anime({
            targets: elem,
			borderRadius: ['0%', '25%'],
            scale: 1.15,
        });
    }
    event.preventDefault();
}

function onOut(event) {
    var elem = event.target;
    parentClass = elem.parentElement.className;
    parentTag = elem.parentElement.tagName;
    if (parentClass == 'card text-center') {
        event.preventDefault();
        anime({
            targets: elem.parentElement,
            scale: 1,
            duration: 500,
        });
    }
    if (parentTag == 'LI') {
        event.preventDefault();
        anime({
            targets: elem.parentElement,
            scale: 1,
            duration: 500,
        });
    }
    if (parentTag == 'A') {
        anime({
            targets: elem,
            scale: 1,
			borderRadius: ['25%', '0%'],
        });
    }
    event.preventDefault();
}

function onClick(event) {
    var elem = event.target,
        elemID = elem.getAttribute('id');
    lightboxImg = document.getElementById('lightbox-image');
    lightbox = document.getElementById('lightbox-overlay');
    caption = document.getElementById('caption');
    console.log(elem);
    if (elem.parentElement.tagName == 'LI') {
        event.preventDefault();
        lightboxImg.src = elem.src;
        lightboxImg.title = elem.alt;
        caption.innerText = elem.alt;
        lightbox.classList.add('visible');
    }

    if (elemID == 'lightbox-image' || elemID == 'lightbox-overlay') {
        event.preventDefault();
        lightbox.classList.remove('visible');
    }
}