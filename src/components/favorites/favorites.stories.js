import "./favorites.css";
import firstApproach from "./favorites.html";
import { createFavorites } from "./favorites";

export default { title: "Components/Favoriten" };

export const firstFav = () => firstApproach;
export const secondFav = () => createFavorites();