import {createTrackElement} from "./track.js";
import dog from "../../assets/dog.jpg";

export default { title: "Components/Track" };

export const beatIt = () => createTrackElement({
    artist: "Michael Jackson", 
    title: "Billie Jean", 
    trackImageSource: dog
});

// give a object to function call
export const christmasAdventure = () => createTrackElement({
    artist: "TRG Banks", 
    title: "A Christmas Adventure",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_10_-_A_Christmas_adventure_Part_3.mp3", 
    trackImageSource: "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290"
});

// create object and give it directly to function call
export const christmasAdventure2 = () => {
    const track = {
        artist: "TRG Banks",
        title: "A Christmas Adventure",
        trackImageSource: "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290"
    }; 
    
    return createTrackElement(track);
}

/* track array */
const playlist = [
{
    artist: "TRG Banks", 
    title: "A Christmas Adventure",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_10_-_A_Christmas_adventure_Part_3.mp3", 
    trackImageSource: "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290"
},
{
    artist: "TRG Banks",
    title: "A Christmas Adventure",
    trackImageSource: "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290"
},
{
    artist: "Michael Jackson", 
    title: "Billie Jean", 
    trackImageSource: dog
}
];

 export const songs = () => {
    const container = document.createElement("ul");
    container.className = "container";

    playlist.forEach( track => {
        const element = createTrackElement(track);
        container.append(element);
    });

    return container;
};