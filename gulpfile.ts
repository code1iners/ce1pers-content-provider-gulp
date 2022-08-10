import { series } from "gulp";
import { prepare, assets } from "./src/tasks";

export const dev = series([prepare, assets]);
