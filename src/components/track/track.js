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
                            innerHTML: "track.artist",
                        }),
                    ],
                }),
                createElement("button", {
                    className: "playButton",
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

    /* 
    * original code for distributing an track element
    * 
    // small externalized functions
    const setImgProperties = (img, imgSrc, imgAlt, imgClassName = "") => {
        img.src = imgSrc;
        img.alt = imgAlt;
        img.className = imgClassName;
    };

    const createSpan = (parent, content) => {
        const span = document.createElement("span");
        span.innerHTML = content;
        parent.appendChild(span);
    };

    const createComponent = (typeComponent, classComponentName = "") => {
        const item = document.createElement(typeComponent);
        item.className = classComponentName;
        return item;
    };

    // buildung one track element container as an unorderd list item
    const listItem = createComponent("li", "track");

    // album picture
    const trackImage = document.createElement("img");
    setImgProperties(trackImage, track.trackImageSource, `artist - ${track.artist}`, "imgTrack")
    listItem.appendChild(trackImage);

    // metadata
    const trackDescription = createComponent("div", "trackDescription");
    createSpan(trackDescription, track.title );
    createSpan(trackDescription, track.artist );

    listItem.appendChild(trackDescription);

    // play-button
    const playButton = createComponent("button", "playButton");
    playButton.type = "submit";

    const playImage = document.createElement("img");
    setImgProperties(playImage, playIcon, `play ${track.title}`);
    playButton.appendChild(playImage);
    
    listItem.appendChild(playButton);

    // my own concept of play and pause
    const audioElement = new Audio(track.audioSrc);

    playButton.onclick = () => {
        if (audioElement.paused) {
            audioElement.play();
            setImgProperties(playImage, pauseIcon, "pause music");
        } else {
            audioElement.pause();
            setImgProperties(playImage, playIcon, `play ${track.title}`);
        }
    };

    return listItem; 
*/
} 

