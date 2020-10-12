export function createTrackElement() {
    const listItem = document.createElement("li");

    const imgArtist = document.createElement("img");
    imgArtist.src = "../../assets/icon-menu-paint.svg";

    listItem.appendChild(imgArtist);

    const songContainer = document.createElement("div");
    const artist = document.createElement("span");
    artist.innerHTML = "Some Artist";
    const album = document.createElement("span");
    album.innerHTML = "a album title";

    songContainer.appendChild(artist);
    songContainer.appendChild(album);
    const playButton = document.createElement("button");
    
    songContainer.appendChild(playButton);

    listItem.appendChild(songContainer);

    return listItem;
}