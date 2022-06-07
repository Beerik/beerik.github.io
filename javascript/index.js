//use with get top nav height and define scrolling properly
// const navigationHeight =
//   document.querySelector("#primary-nav").offsetHeight;

// console.log(navigationHeight);

// document.documentElement.style.setProperty(
//   navigationHeight + "px"
// );

//##################################################################
//######## lang menu dropdown
//##################################################################

const currentLanguage = document.querySelector(
  "li.language-option.current-lang a"
);
const arrowPointer = document.querySelector(
  "li.language-option.current-lang a span"
);
const languageOptions = document.querySelectorAll(
  '[class*="language-option option-"]'
);

const sidemenuBtnOpen = document.getElementById("burger-open");
const sidemenuBtnClose = document.getElementById("burger-close");
const mobileMenu = document.getElementById("mobile-nav");

sidemenuBtnOpen.addEventListener("click", (event) => {
  mobileMenu.classList.add("visible");
  sidemenuBtnOpen.classList.add("hidden");
  sidemenuBtnClose.classList.remove("hidden");
});

sidemenuBtnClose.addEventListener("click", (event) => {
  mobileMenu.classList.remove("visible");
  sidemenuBtnOpen.classList.remove("hidden");
  sidemenuBtnClose.classList.add("hidden");
});

currentLanguage.addEventListener("click", (event) => {
  toggleLangMenu();

  console.log(document.activeElement);
});

currentLanguage.addEventListener("blur", (event) => {
  closeLangMenu();
});

function toggleLangMenu() {
  languageOptions.forEach((element) => {
    element.classList.toggle("visible");
  });

  arrowPointer.classList.toggle("closed");
}

function closeLangMenu() {
  languageOptions.forEach((element) => {
    element.classList.remove("visible");
  });

  arrowPointer.classList.add("closed");
}

//##################################################################
//######## scroll events
//##################################################################

const navlinks = new Array("about", "projects", "skills", "contacts");
const navHeigth = 60;
const startWithNoScroll = true;

if (startWithNoScroll)
  document
    .querySelector('a[href="#' + navlinks[0] + '"')
    .classList.add("active");

let sectionPositions = [];

for (var i = 0; i < navlinks.length; i++) {
  const elementTopY = document.getElementById(navlinks[i]).offsetTop - 1;
  const elementBottomY =
    elementTopY + document.getElementById(navlinks[i]).clientHeight + 1;

  sectionPositions.push([elementTopY, elementBottomY]);
}

document.addEventListener("scroll", function (e) {
  let lastScrollPosition = window.scrollY;

  for (var i = 0; i < sectionPositions.length; i++) {
    if (
      lastScrollPosition + navHeigth >= sectionPositions[i][0] &&
      lastScrollPosition + navHeigth < sectionPositions[i][1]
    ) {
      setActiveLink(navlinks[i]);
    } else {
      removeActiveLink(navlinks[i]);
    }
  }
});

function setActiveLink(link) {
  document.querySelector('a[href="#' + link + '"').classList.add("active");
}

function removeActiveLink(link) {
  document.querySelector('a[href="#' + link + '"').classList.remove("active");
}

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    // you're at the bottom of the page
    console.log("bottom");
  }
};

//########################

//   document.getElementById("#finger-guide").style.opacity = "0";
//   document.getElementById("#sidemenu").classList.toggle("sidemenu-visibility");
//   document.getElementById(".overlay").classList.toggle("overlay-visibility");
//   document.body.classList.toggle("lock-scroll");
// });

// $("#menubtn a").on("click", function (e) {
//   console.log("click"),
//     $("#finger-guide").css("opacity", 0),
//     $("#sidemenu").toggleClass("sidemenu-visibility"),
//     $(".overlay").toggleClass("overlay-visibility"),
//     document.body.classList.toggle("lock-scroll");
// }),
//   $(".overlay").on("click", function (e) {
//     $("#finger-guide").css("opacity", 0),
//       $("#sidemenu").toggleClass("sidemenu-visibility"),
//       $(".overlay").toggleClass("overlay-visibility"),
//       document.body.classList.toggle("lock-scroll");
//   });
