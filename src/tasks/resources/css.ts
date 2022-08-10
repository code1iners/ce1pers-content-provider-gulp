import { src, dest } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import { getAssetDirs } from "../../utils/file-utils";

export default async () =>
  getAssetDirs().map((dir) =>
    src(`src/assets/${dir}/index.css`)
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(
        rename({
          suffix: ".min",
          extname: ".css",
        })
      )
      .pipe(dest(`dist/${dir}`))
  );
