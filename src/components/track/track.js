import imageDog from "../../assets/dog.jpg"; // import picture for appending
import playIcon from "../../assets/icon-play-color.svg"; // import picture for appending

export function createTrackElement() {
    const artist = "Michael Jackson";
    const title = "Billie Jean";

    /* Container */
    const listItem = document.createElement("li");

    // artist picture
    const imgArtist = document.createElement("img");
    imgArtist.src = imageDog; // for demo purposes
    imgArtist.alt = `artist - ${artist}`;
    imgArtist.classList.add("artist"); // add class of name artist to image

    listItem.appendChild(imgArtist);

    // metadata
    const songContainer = document.createElement("div");
    const albumSpan = document.createElement("span");
    albumSpan.innerHTML = title; // for demo purposes
    const artistSpan = document.createElement("span");
    artistSpan.innerHTML = artist; // for demo purposes
    
    songContainer.appendChild(albumSpan, artistSpan);
    listItem.appendChild(songContainer);

    // play-button
    const playButton = document.createElement("button");
    playButton.type = "submit"; // type definition
    const playImage = document.createElement("img");
    playImage.src = playIcon;

    playButton.appendChild(playImage);
    listItem.appendChild(playButton);
    
    return listItem;
}

