import {createTrackElement} from "./track.js";
import dog from "../../assets/dog.jpg";

export default { title: "Components/Track" };

export const beatIt = () => createTrackElement({artist: "Michael Jackson", title: "Billie Jean", trackImageSource: dog});

// give a object to function call
export const christmasAdventure = () => createTrackElement({artist: "TRG Banks", title: "A Christmas Adventure", trackImageSource: "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290"});

// create object and give it directly to function call
export const christmasAdventure2 = () => {
    const track = {
        artist: "TRG Banks",
        title: "A Christmas Adventure",
        trackImageSource: "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290"
    }; 
    
    return createTrackElement(track);
}