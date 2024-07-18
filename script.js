// **********************************
// updateing year automatically

const year = document.querySelector(".year");
const newyear = new Date().getFullYear();
year.textContent = newyear;

/////////////////////////////////////////

// *******************************************
// making mobile navigation work

const openbtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

openbtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////

// *******************************************
// making smooth scrolling

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //////// scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    /// close mobile navigation

    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////

// **************************

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHero = document.querySelector(".section-hero");

if (sectionHero) {
  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (ent) {
        console.log(ent);
        if (!ent.isIntersecting) {
          document.querySelector(".header").classList.add("sticky");
        } else {
          document.querySelector(".header").classList.remove("sticky");
        }
      });
    },
    {
      root: null,
      threshold: 0,
    }
  );

  obs.observe(sectionHero);
} else {
  console.error("Element with class 'section-hero' not found.");
}

///////////////////////////////////////////////////////////

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
