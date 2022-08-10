import { readdirSync } from "fs";
import { resolve } from "path";

export const getAssetDirs = () =>
  readdirSync(resolve("src", "assets", "templates"));
