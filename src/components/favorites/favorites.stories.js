import "./favorites.css";
import firstApproach from "./favorites.html";
import { createFavorites } from "./favorites";
import { buildLikeMe } from "./likeMe";

export default { title: "Components/Favoriten" };

export const hearthHtml = () => firstApproach;
export const hearthScoreBoard = () => createFavorites();

const likes = 
[
{
    id: 455639424234222221245,
    title: 
    `Stromausfall.<br />
    In der Wohnung des Nachbarn<br />
    spielt jemand Klavier.<br />`,
    writer: "Sigrid Baurmann",
},
{
    id: 34534543657457,
    title: 
    `Windstille.<br />
    Vom Ruderblatt tropft<br />
    der Abendhimmel.<br />`,
    writer: "Hubertus Thum",
},
{
    id: 86596398563334324,
    title: 
    `im drehkreuz<br />
    zur vollzugsanstalt<br />
    eine sonnenblume<br />`,
    writer: "Mario Fitterer",
},
{
    id: 127589348584369453,
    title: 
    `Sonnenuntergang.<br />
    Die leuchtenden Gesichter<br />
    verblassen wieder.<br />`,
    writer: "Udo Wenzel",
},
];

export const haiku = () => {

    const container = document.createElement("div");

    likes.forEach( like => {
        const element = buildLikeMe(like);
        container.append(element);
    });

    return container;
};