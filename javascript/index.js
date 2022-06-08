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
let mobileLinks = document.querySelectorAll("#mobile-nav .nav-list a");
let mobileMenuOverlay = document.getElementById("overlay");

mobileLinks.forEach(function (element) {
  element.addEventListener("click", (event) => {
    closeMobileMenu();
  });
});

mobileMenuOverlay.addEventListener("click", (event) => {
  closeMobileMenu();
});

sidemenuBtnOpen.addEventListener("click", (event) => {
  openMobileMenu();
});

sidemenuBtnClose.addEventListener("click", (event) => {
  closeMobileMenu();
});

function openMobileMenu() {
  mobileMenu.classList.add("visible");
  sidemenuBtnOpen.classList.add("hidden");
  sidemenuBtnClose.classList.remove("hidden");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("visible");
  sidemenuBtnOpen.classList.remove("hidden");
  sidemenuBtnClose.classList.add("hidden");
}

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

  if (window.scrollY == 0) {
    document.getElementById("scroll-nav-top").classList.add("fade");
  } else {
    document.getElementById("scroll-nav-top").classList.remove("fade");
  }

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
    document.getElementById("scroll-nav-bottom").classList.add("fade");
  } else {
    document.getElementById("scroll-nav-bottom").classList.remove("fade");
  }
};
