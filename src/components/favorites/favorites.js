import "./favorites.css";

import { createElement } from "../../utilities/element";
import { storageAvailable } from "../../utilities/element";

import heartOrange from "../../assets/favorite/heart-orange.svg";
import heartBlue from "../../assets/favorite/heart-blue.svg";
import heartPink from "../../assets/favorite/heart-pink.svg";
import heartYellow from "../../assets/favorite/heart-yellow.svg";
import heartGreen from "../../assets/favorite/heart-green.svg";

// import { doc } from "prettier";


console.log(storageAvailable("localStorage"));

function heartCounter(event) {
    localStorage.setItem('heart-type', event.target.alt);
    document.querySelector("#scoreboard").value = 
    `** SCOREBOARD **
        ${event.target.alt}: 1 
        irgendwas: 2
        tada: 3
        Blabla: 4
        Tada: 5`;
};

export function createFavorites () {

    const container = createElement("div", {
        className: "container",
        children:
        [
            createElement("div",{
                className: "hearts",
                children:
                [
                    createElement("img", {
                        src: heartOrange,
                        alt: "orange",
                        onclick: (event) => {
                            heartCounter(event);
                        },
                    }),
                    createElement("img", {
                        src: heartBlue,
                        alt: "blue",
                        onclick: (event) => {
                            heartCounter(event);
                        },
                    }),
                    createElement("img", {
                        src: heartPink,
                        alt: "pink",
                        onclick: (event) => {
                            heartCounter(event);
                        },
                    }),
                    createElement("img", {
                        src: heartYellow,
                        alt: "yellow",
                        onclick: (event) => {
                            heartCounter(event);
                        },
                    }),
                    createElement("img", {
                        src: heartGreen,
                        alt: "green",
                        onclick: (event) => {
                            heartCounter(event);
                        },
                    }),
                ],
            }),
            createElement("textarea", {
                className: "output",
                id: "scoreboard",
            }),
        ],
    });

    return container;
};

