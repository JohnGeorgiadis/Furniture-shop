//img dir
var imgs = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg",
            "./img/04.jpg", "./img/05.jpg", "./img/06.jpg",
            "./img/07.jpg", "./img/08.jpg"
            ];
function myMap()
{
    myCenter = new google.maps.LatLng(49.6757400, 19.0939800);
    var mapOptions= {
        center:myCenter,
        zoom:12, scrollwheel: false, draggable: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Load more button functionality
function loadMore () {
    var numberOfNodes = document.querySelectorAll('.img-gallery').length;
    var numberOfImgs = imgs.length;

    function insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }

    var newEl = document.createElement('div');
    newEl.innerHTML = '<div class="w3-row-padding w3-center img-gallery">\n' +
        '        <div class="w3-col m3">\n' +
        '            <img src="./img/05.jpg"  onclick="onClick(this)" class="w3-hover-opacity" alt="Wardrobe">\n' +
        '        </div>\n' +
        '        <div class="w3-col m3">\n' +
        '            <img src="img/06.jpg" onclick="onClick(this)" class="w3-hover-opacity" alt="Kitchen">\n' +
        '        </div>\n' +
        '        <div class="w3-col m3">\n' +
        '            <img src="img/07.jpg" onclick="onClick(this)" class="w3-hover-opacity" alt="Kitchen">\n' +
        '        </div>\n' +
        '        <div class="w3-col m3">\n' +
        '            <img src="img/08.jpg" onclick="onClick(this)" class="w3-hover-opacity" alt="Wardrobe">\n' +
        '        </div>\n' +
        '    </div>';

    var ref = document.querySelector('.img-gallery');

    insertAfter(newEl, ref);
}