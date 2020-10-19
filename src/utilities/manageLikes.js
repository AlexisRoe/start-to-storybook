import { storageAvailable } from "./testStorage";

import fullHearth from "../assets/favorite/heart-full.svg";
import emptyHearth from "../assets/favorite/heart-empty.svg";

export const manageLikes = (event, fav) => {

    const imgID = Number(event.target.dataset.id);

    if (!storageAvailable("localStorage")) {
        console.log("no access to localStorage");
        return;
    };

    if (!localStorage.getItem(fav)) {
        event.target.src = fullHearth;
        localStorage.setItem(fav, imgID);
        return;
    };

    const currentList = localStorage.getItem(fav).split(',').map(item => Number(item));

    if (currentList.includes(imgID)) {
        event.target.src = emptyHearth;
        const index = currentList.findIndex((element) => element === imgID);
        delete currentList[index];
        const newList = currentList.filter(() => !"");
        localStorage.setItem(fav, newList);
    } else {
        event.target.src = fullHearth;
        currentList.push(imgID);
        localStorage.setItem(fav, currentList);
    };
};