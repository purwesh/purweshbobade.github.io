// skill experience section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// experience read more
let more = document.querySelectorAll('.more');
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function () {
        more[i].parentNode.classList.toggle('active')
    })
}


// Responsive hamburger menu demo by Paul Ehikhuemen
var hamburger = document.querySelector("#hamburger");
var navMenu = document.querySelector(".navMenu");
var navLinks = document.querySelectorAll(".navMenu li");
var nav = document.querySelector('nav')

// close nav by clicking on list items
Array.from(navLinks).forEach((li) =>
    li.addEventListener("click", () => {
        if (hamburger.classList.contains("toggle")) {
            hamburger.classList.remove("toggle");
            nav.classList.remove("active-z");

        }
        if (navMenu.classList.contains("nav-active")) {
            nav.classList.remove("active-z");
            navMenu.classList.remove("nav-active");
        }

    })
);


// toggle nav on click of hamburger menu icon
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
    nav.classList.toggle('active-z');

    // burger animation
    hamburger.classList.toggle("toggle");
});


// load more button
let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('#work-list .work')];

    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}