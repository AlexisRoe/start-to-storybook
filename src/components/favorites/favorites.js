import "./favorites.css";

import { createElement } from "../../utilities/element";
import { storageAvailable } from "../../utilities/testStorage";

import heartOrange from "../../assets/favorite/heart-orange.svg";
import heartBlue from "../../assets/favorite/heart-blue.svg";
import heartPink from "../../assets/favorite/heart-pink.svg";
import heartYellow from "../../assets/favorite/heart-yellow.svg";
import heartGreen from "../../assets/favorite/heart-green.svg";
import trashCan from "../../assets/favorite/delete_forever-24px.svg";

function heartCounter(event) {
  const keyColor = event.target.alt;

  if (storageAvailable("localStorage")) {
    if (localStorage.getItem(keyColor)) {
      const count = Number(localStorage.getItem(keyColor)) + 1;
      localStorage.setItem(keyColor, count);
      console.log(`value: ${keyColor} found and increased by 1`);
    } else {
      localStorage.setItem(keyColor, "1");
      console.log(`value: ${keyColor} set`);
    }
  } else {
    console.log(`localStorage disabled`);
  }
  scoreboard();
}

function scoreboard() {
  let scoreboard = "** SCOREBOARD **\n";

  if (storageAvailable("localStorage")) {
    if (Object.keys(localStorage).length === 0) {
      scoreboard = `${scoreboard} no scores available`;
    } else {
      Object.getOwnPropertyNames(localStorage).forEach((keyColor) => {
        scoreboard =
          scoreboard + "\n" + `${keyColor}: ${localStorage[keyColor]}`;
      });
    }
  } else {
    console.log(`localStorage disabled`);
  }
  document.querySelector("#scoreboard").value = scoreboard;
}

function cleanStorage() {
  localStorage.clear();
  document.querySelector("#scoreboard").value = "** SCOREBOARD **\n";
  console.log("Storage clear");
}

export function createFavorites() {
  const favoriteImages = [
    {
      src: heartOrange,
      alt: "orange-hearth",
      onclick: (event) => {
        heartCounter(event);
      },
    },
    {
      src: heartBlue,
      alt: "blue-hearth",
      onclick: (event) => {
        heartCounter(event);
      },
    },
    {
      src: heartPink,
      alt: "pink-hearth",
      onclick: (event) => {
        heartCounter(event);
      },
    },
    {
      src: heartYellow,
      alt: "yellow-hearth",
      onclick: (event) => {
        heartCounter(event);
      },
    },
    {
      src: heartGreen,
      alt: "green-hearth",
      onclick: (event) => {
        heartCounter(event);
      },
    },
    {
      src: trashCan,
      alt: "Delete everything",
      onclick: () => {
        cleanStorage();
      },
    },
  ];

  const heartChildrens = favoriteImages.map((favoriteImage) =>
    createElement("img", favoriteImage)
  );

  const container = createElement("div", {
    className: "container",
    children: [
      createElement("div", {
        className: "hearts",
        children: heartChildrens,
      }),
      createElement("textarea", {
        className: "output",
        id: "scoreboard",
      }),
    ],
  });

  return container;
}
