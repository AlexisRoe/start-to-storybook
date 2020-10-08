import "./nav-head.css";
import navheads from "./nav-head.html";
import navheadStandards from "./nav-head-standard.html";
import navheadStandardsBack from "./nav-head-standard-back.html";
import navheadNowPlayings from "./nav-head-now-playing.html";

export default { title: "Components/Navigation on Top" };

export const navhead = () => navheads;
export const navheadStandard = () => navheadStandards;
export const navheadStandardBack = () => navheadStandardsBack;
export const navheadNowPlaying = () => navheadNowPlayings;
