import imageDog from "../../assets/dog.jpg";

export function createTrackElement() {
    const listItem = document.createElement("li");

    const imgArtist = document.createElement("img");
    imgArtist.src = imageDog;
    imgArtist.classList.add("artist");

    listItem.appendChild(imgArtist);

    const songContainer = document.createElement("div");
    const artist = document.createElement("span");
    artist.innerHTML = "Some Artist";
    const album = document.createElement("span");
    album.innerHTML = "a album title";
    const playButton = document.createElement("button");
    playButton.type = "submit";
    playButton.innerHTML = "Play";

    songContainer.appendChild(artist);
    songContainer.appendChild(album);
    songContainer.appendChild(playButton);

    listItem.appendChild(songContainer);

    return listItem;
}

