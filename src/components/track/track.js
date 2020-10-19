import "./track.css";
import playIcon from "../../assets/icon-play-color.svg";
import pauseIcon from "../../assets/icon-pause-gradient.svg";
import { createElement } from "../../utilities/element";

/* export function createTrackElement(artist, album, albumImageSource) { */
export function createTrackElement(track) { 

    const audioElement = new Audio(track.audioSrc);

    const buttonIcon = createElement("img", {
        src: playIcon,
        alt: `play ${track.title}`,
    });

    const setImgProperties = (img, imgSrc, imgAlt, imgClassName = "") => {
        img.src = imgSrc;
        img.alt = imgAlt;
        img.className = imgClassName;
    };
    
    const trackElement =  createElement("li", {
        className: "track",
        children: 
            [
                createElement("img", {
                    className: "imgTrack",
                    src: track.trackImageSource,
                    alt: `artist - ${track.artist}`,
                }),
                createElement("div", {
                    className: "trackDescription",
                    children:
                    [
                        createElement("span", {
                            innerHTML: track.title,
                        }),
                        createElement("span", {
                            innerHTML: track.artist,
                        }),
                    ],
                }),
                createElement("button", {
                    className: "playButton",
                    type: "submit",
                    children: [buttonIcon],
                    onclick: () => {
                        if (audioElement.paused) {
                            audioElement.play();
                            setImgProperties(buttonIcon, pauseIcon, "pause music");
                        } else {
                            audioElement.pause();
                            setImgProperties(buttonIcon, playIcon, `play ${track.title}`);
                        }
                    },
                }),
            ],
    });

    return trackElement;
};
