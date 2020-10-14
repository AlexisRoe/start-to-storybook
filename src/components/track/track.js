import "./track.css";
import playIcon from "../../assets/icon-play-color.svg";
import pauseIcon from "../../assets/icon-pause-gradient.svg";

/* export function createTrackElement(artist, album, albumImageSource) { */
export function createTrackElement(track) {
    /* allgemeine Funktionen */
    
    const setImgProperties = (img, imgSrc, imgAlt, imgClass) => {
        img.src = imgSrc;
        img.alt = imgAlt;
        if (imgClass !== undefined) {
            img.classList.add(imgClass);
        };
    };

    const createSpan = (parent, content) => {
        const span = document.createElement("span");
        span.innerHTML = content;
        parent.appendChild(span);
    };

    const createComponent = (typeComponent, classComponent) => {
        const item = document.createElement(typeComponent);
        if (classComponent !== undefined) {
            item.classList.add(classComponent);
        };
        
        return item;
    };

    /* Container */
    const listItem = createComponent("li", "track");

    // album picture
    const trackImage = document.createElement("img");
    setImgProperties(trackImage, track.trackImageSource,  `artist - ${track.artist}`, "imgTrack")
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

        /* 
        * let isPlaying = false;
        * isPlaying != isPlaying;
        * -- Console ---
        * isPlaying ergibt true
        * != negiert den Wert innerhalb einer Variable
        */
    };

    return listItem;
}

