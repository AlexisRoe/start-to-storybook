import "./track.css";
import imageDog from "../../assets/dog.jpg";
import playIcon from "../../assets/icon-play-color.svg";

export function createTrackElement(artist, title) {
    /* Container */
    const listItem = document.createElement("li");
    listItem.classList.add("track");

    // artist picture
    const imgArtist = document.createElement("img");
    imgArtist.src = imageDog; // for demo purposes
    imgArtist.alt = `artist - ${artist}`;
    imgArtist.classList.add("imgArtist");

    listItem.appendChild(imgArtist);

    // metadata
    const albumInformation = document.createElement("div");
    albumInformation.classList.add ("albumInformation");
    const albumSpan = document.createElement("span");
    albumSpan.innerHTML = title;
    const artistSpan = document.createElement("span");
    artistSpan.innerHTML = artist;
    
    albumInformation.appendChild(albumSpan);
    albumInformation.appendChild(artistSpan);
    listItem.appendChild(albumInformation);

    // play-button
    const playButton = document.createElement("button");
    playButton.type = "submit";
    playButton.classList.add("playButton");
    const playImage = document.createElement("img");
    playImage.src = playIcon;

    playButton.appendChild(playImage);
    listItem.appendChild(playButton);

    playButton.onclick = () => console.log("click");
    
    return listItem;
}

