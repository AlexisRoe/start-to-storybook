import playerIconBackward from "../../assets/player/icon-player-backward.svg";
import playerIconForward from "../../assets/player/icon-player-forward.svg";
import playerIconPlay from "../../assets/player/icon-player-play.svg";
import playerIconPause from "../../assets/player/icon-player-stop.svg"
import playerIconList from "../../assets/player/icon-player-list.svg";
import playerIconShuffle from "../../assets/player/icon-player-shuffle.svg";
import playerIconRepeat from "../../assets/player/icon-player-repeat.svg";
import playerIconEQ from "../../assets/player/icon-player-eq.svg";
import playerIconFav from "../../assets/player/icon-player-favorite.svg";

import "./playerControll.css";
import { createElement } from "../../utilities/element";

export const createPlayer = (track) => {

    const audioElement = new Audio(track.audioSrc);

    const iconAlttext = `Play ${track.title} by ${track.artist}`;

    const playIcon = createElement("img", {
        src: playerIconPlay,
        alt: iconAlttext,
    });

    const player = createElement("div", {
        className: "container",
        children: 
        [
            createElement("div",{
                className: "player",
                children: 
                [
                    createElement("div", {
                                    className: "player__main",
                                    children: 
                                    [
                                        createElement("button", {
                                            className: "player__button",
                                            onclick: () => {
                                                console.log("Play: Last Song");
                                            },
                                            children: 
                                            [
                                                createElement("img", {
                                                    src: playerIconBackward,
                                                    alt: "Last Song",
                                                }),
                                            ],
                                        }),
                                        createElement("button", {
                                            className: "player__button",
                                            onclick: () => {
                                                if (audioElement.paused) {
                                                    audioElement.play();
                                                    setImgProperties(playIcon, playerIconPause, "Pause music");
                                                } else {
                                                    audioElement.pause();
                                                    setImgProperties(playIcon, playerIconPlay, iconAlttext);
                                                }
                                            },
                                            children: [playIcon],
                                        }),
                                        createElement("button", {
                                            className: "player__button",
                                            onclick: () => {
                                                console.log("Play: Next Song");
                                            },
                                            children: 
                                            [
                                                createElement("img", {
                                                    src: playerIconForward,
                                                    alt: "Next Song",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                    createElement("div", {
                                    className: "player__secondary",
                                    children: 
                                    [
                                        createElement("div", {
                                            className: "player__functions",
                                            children: 
                                            [
                                                createElement("button", {
                                                    className: "player__button",
                                                    onclick: () => {
                                                        console.log("Playlist");
                                                    },
                                                    children:
                                                    [
                                                        createElement("img", {
                                                            src: playerIconList,
                                                            alt: "playlist",
                                                        }),
                                                    ],
                                                }),
                                                createElement("span", {
                                                    innerHTML: "Playlist",
                                                }),
                                            ],
                                        }),
                                        createElement("div", {
                                            className: "player__functions",
                                            children: 
                                            [
                                                createElement("button", {
                                                    className: "player__button",
                                                    onclick: () => {
                                                        console.log("Shuffle");
                                                    },
                                                    children:
                                                    [
                                                        createElement("img", {
                                                            src: playerIconShuffle,
                                                            alt: "shuffle",
                                                        }),
                                                    ],
                                                }),
                                                createElement("span", {
                                                    innerHTML: "Shuffle",
                                                }),
                                            ],
                                        }),
                                        createElement("div", {
                                            className: "player__functions",
                                            children: 
                                            [
                                                createElement("button", {
                                                    className: "player__button",
                                                    onclick: () => {
                                                        console.log("Repeat");
                                                    },
                                                    children:
                                                    [
                                                        createElement("img", {
                                                            src: playerIconRepeat,
                                                            alt: "repeat",
                                                        }),
                                                    ],
                                                }),
                                                createElement("span", {
                                                    innerHTML: "Repeat",
                                                })
                                            ],
                                        }),
                                        createElement("div", {
                                            className: "player__functions",
                                            children: 
                                            [
                                                createElement("button", {
                                                    className: "player__button",
                                                    onclick: () => {
                                                        console.log("EQ");
                                                    },
                                                    children:
                                                    [
                                                        createElement("img", {
                                                            src: playerIconEQ,
                                                            alt: "EQ",
                                                        }),
                                                    ],
                                                }),
                                                createElement("span", {
                                                    innerHTML: "EQ",
                                                })
                                            ],
                                        }),
                                        createElement("div", {
                                            className: "player__functions",
                                            children: 
                                            [
                                                createElement("button", {
                                                    className: "player__button",
                                                    onclick: () => {
                                                        console.log("Favorites");
                                                    },
                                                    children:
                                                    [
                                                        createElement("img", {
                                                            src: playerIconFav,
                                                            alt: `make ${track.title} to my favorite`,
                                                        }),
                                                    ],
                                                }),
                                                createElement("span", {
                                                    innerHTML: "Favorites",
                                                })
                                            ],
                                        }),
                                    ],
                                }),
                ],
            }),
        ],
    });

    return player;
};

const setImgProperties = (img, imgSrc, imgAlt) => {
    img.src = imgSrc;
    img.alt = imgAlt;
};