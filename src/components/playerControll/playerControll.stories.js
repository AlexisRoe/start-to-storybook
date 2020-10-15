import { createPlayer } from "./playerControll";
import playerDefault from "./playerControll.html";
import "./playerControll.css";

export default { title: "Components/Player" };

export const playerDefault1 = () => playerDefault;

export const playerJS = () => {
    const player = createPlayer({
        title: "Whatever",
        artist: "Mister NoBody",
        audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_10_-_A_Christmas_adventure_Part_3.mp3"    
    });

    return player;
}