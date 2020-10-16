import "./favorites.css";

import { createElement } from "../../utilities/element";
import { isHaikuAlreadyLiked } from "../../utilities/isHaikuAlreadyLiked";
import { manageLikes } from "../../utilities/manageLikes";

export const buildLikeMe = (haiku) => {

    const fav = "Favorites";
    const imgSrc = isHaikuAlreadyLiked(haiku.id, fav);

    const buttonHearth = createElement("img", {
        className: "imgHearth",
        src: imgSrc,
        alt: "Like Me",
        onclick: (event) => {
            manageLikes(event, fav);
        }
    });

    buttonHearth.dataset.id = haiku.id;

    const element =  createElement("div",{
        className: "haiku-element",
        children: 
        [
            createElement("div", {
                className: "haiku-container",
                children: 
                [
                    createElement("p", {
                        className: "haiku",
                        innerHTML: haiku.title,
                    }),
                    createElement("span", {
                        className: "autor",
                        innerHTML: haiku.writer,
                    })
                ],
            }),
            createElement("button", {
                className: "likeButton",
                children: 
                [
                    buttonHearth,
                ],
            }),
        ],
    });

    return element;
}