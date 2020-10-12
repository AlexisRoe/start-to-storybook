import imageDog from "../../assets/dog.jpg"; // import picture for appending

export function createTrackElement() {
    const listItem = document.createElement("li");

    const imgArtist = document.createElement("img");
    imgArtist.src = imageDog; // for demo purposes
    imgArtist.classList.add("artist"); // add class of name artist to image

    listItem.appendChild(imgArtist);

    const songContainer = document.createElement("div");
    const artist = document.createElement("span");
    artist.innerHTML = "Some Artist"; // for demo purposes
    const album = document.createElement("span");
    album.innerHTML = "a album title"; // for demo purposes
    const playButton = document.createElement("button");
    playButton.type = "submit"; // type definition
    playButton.innerHTML = "Play"; // for demo purposes

    songContainer.appendChild(artist);
    songContainer.appendChild(album);
    songContainer.appendChild(playButton);

    listItem.appendChild(songContainer);

    return listItem;
}

