import { series } from "gulp";
import typeScript from "../resources/type-script";
import html from "../resources/html";
import css from "../resources/css";

export const assets = series(html, css, typeScript);
