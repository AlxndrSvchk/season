const content = document.querySelector(".content");
const text = document.querySelector(".text");
const body = document.body;

const data = [
  {
    name: "Зима",
    img: "./img/winter.jpg",
    alt: "winter",
    bodyBg: "#3d7ca0",
    textColor: "#ccc",
  },
  {
    name: "Осень",
    img: "./img/autumn.jpg",
    alt: "autumn",
    bodyBg: "#fe9300",
    textColor: "#0c070d",
  },
  {
    name: "Лето",
    img: "./img/summer.jpg",
    alt: "summer",
    bodyBg: "#c0a471",
    textColor: "#e6d622",
  },
  {
    name: "Весна",
    img: "./img/spring.jpg",
    alt: "spring",
    bodyBg: "#e0ed88",
    textColor: "#fbf9e9",
  },
];

function oneYear(season = "Зима") {
  this.countMonth = 12;
  this.year = 2022;
  this.season = season;
  this.showSeason = function () {
    data.map((elem) => {
      if (elem.name.toLowerCase() === this.season.toLowerCase()) {
        body.style.background = `${elem.bodyBg}`;
        text.style.color = elem.textColor;
        content.insertAdjacentHTML(
          "beforeend",
          `
                <img src="${elem.img}" alt="${elem.alt}">
                `
        );
        text.innerHTML = `${this.season} - прекрасное время года!`;
      }

    });
  };
}

const newYear = new oneYear("лето");

newYear.showSeason();
