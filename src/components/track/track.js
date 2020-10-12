import imageDog from "../../assets/dog.jpg"; // import picture for appending
import playIcon from "../../assets/icon-play-color.svg"; // import picture for appending

export function createTrackElement() {
    const artist = "Michael Jackson";
    const title = "Billie Jean";

    /* Container */
    const listItem = document.createElement("li");
    listItem.classList.add("track");

    // artist picture
    const imgArtist = document.createElement("img");
    imgArtist.src = imageDog; // for demo purposes
    imgArtist.alt = `artist - ${artist}`;
    imgArtist.classList.add("imgArtist"); // add class of name artist to image

    listItem.appendChild(imgArtist);

    // metadata
    const albumInformation = document.createElement("div");
    albumInformation.classList.add ("albumInformation");
    const albumSpan = document.createElement("span");
    albumSpan.innerHTML = title; // for demo purposes
    const artistSpan = document.createElement("span");
    artistSpan.innerHTML = artist; // for demo purposes
    
    albumInformation.appendChild(albumSpan);
    albumInformation.appendChild(artistSpan);
    listItem.appendChild(albumInformation);

    // play-button
    const playButton = document.createElement("button");
    playButton.type = "submit"; // type definition
    playButton.classList.add("playButton");
    const playImage = document.createElement("img");
    playImage.src = playIcon;

    playButton.appendChild(playImage);
    listItem.appendChild(playButton);
    
    return listItem;
}

