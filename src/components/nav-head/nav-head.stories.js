import "./nav-head.css";
import navheads from "./nav-head.html";
import navheadStandards from "./nav-head-standard.html";
import navheadStandardsBack from "./nav-head-standard-back.html";
import navheadNowPlayings from "./nav-head-now-playing.html";
import navheadDriverModes from "./nav-head-driver-mode.html";
import navheadSearchOpen from "./nav-head-search.html";

export default { title: "Components/Navigation on Top" };

export const navhead = () => navheads;
export const navheadStandard = () => navheadStandards;
export const navheadStandardBack = () => navheadStandardsBack;
export const navheadNowPlaying = () => navheadNowPlayings;
export const navheadDriverMode = () => navheadDriverModes;
export const navheadSearchfield = () => navheadSearchOpen;
