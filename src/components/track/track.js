import "./track.css";
import playIcon from "../../assets/icon-play-color.svg";
import pauseIcon from "../../assets/icon-pause-gradient.svg";

/* export function createTrackElement(artist, album, albumImageSource) { */
export function createTrackElement(track) {
    /* Container */
    const listItem = document.createElement("li");
    listItem.classList.add("track");

    // album picture
    const imgTrack = document.createElement("img");
    imgTrack.src = track.trackImageSource;
    imgTrack.alt = `artist - ${track.artist}`;
    imgTrack.classList.add("imgTrack");

    listItem.appendChild(imgTrack);

    // metadata
    const trackDescription = document.createElement("div");
    trackDescription.classList.add ("trackDescription");
    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = track.title;
    const artistSpan = document.createElement("span");
    artistSpan.innerHTML = track.artist;
    
    trackDescription.appendChild(titleSpan);
    trackDescription.appendChild(artistSpan);
    listItem.appendChild(trackDescription);

    // play-button
    const playButton = document.createElement("button");
    playButton.type = "submit";
    playButton.classList.add("playButton");
    const playImage = document.createElement("img");
    playImage.src = playIcon;

    playButton.appendChild(playImage);
    listItem.appendChild(playButton);

    const audioElement = new Audio(track.audioSrc);
    playButton.onclick = function() {
        if (track.audioSrc == null) {
            alert("no sound file added");
        };
        if (audioElement.paused === true) {
            audioElement.play();
            playImage.src = pauseIcon;
        } else {
            audioElement.pause();
            playImage.src = playIcon;
        }
    };
    
    return listItem;
}

