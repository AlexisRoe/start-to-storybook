import "./favorites.css";

import { createElement } from "../../utilities/element";

import heartOrange from "../../assets/favorite/heart-orange.svg";
import heartBlue from "../../assets/favorite/heart-blue.svg";
import heartPink from "../../assets/favorite/heart-pink.svg";
import heartYellow from "../../assets/favorite/heart-yellow.svg";
import heartGreen from "../../assets/favorite/heart-green.svg";

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
                        alt: "orange-hearth",
                        onclick: (event) => {
                            altOfImage(event);
                        },
                    }),
                    createElement("img", {
                        src: heartBlue,
                        alt: "blue-hearth",
                        onclick: (event) => {
                            altOfImage(event);
                        },
                    }),
                    createElement("img", {
                        src: heartPink,
                        alt: "pink-hearth",
                        onclick: (event) => {
                            altOfImage(event);
                        },
                    }),
                    createElement("img", {
                        src: heartYellow,
                        alt: "yellow-hearth",
                        onclick: (event) => {
                            altOfImage(event);
                        },
                    }),
                    createElement("img", {
                        src: heartGreen,
                        alt: "green-hearth",
                        onclick: (event) => {
                            altOfImage(event);
                        },
                    }),
                ],
            }),
            createElement("textarea", {
                className: "output",
            }),
        ],
    });

    return container;
};

function altOfImage(event) {
    console.log(event.target.alt);
};