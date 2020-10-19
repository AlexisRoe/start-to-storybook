import fullHearth from "../assets/favorite/heart-full.svg";
import emptyHearth from "../assets/favorite/heart-empty.svg";

import { storageAvailable } from "./testStorage";

export const isHaikuAlreadyLiked = (imgID, fav) => {

    if (!storageAvailable("localStorage") || !localStorage.getItem(fav)) {
        return emptyHearth;
    };

    const currentList = localStorage.getItem(fav).split(',').map(item => Number(item));

    if (currentList.includes(imgID)) {
        return fullHearth;
    } else {
        return emptyHearth;
    }
}