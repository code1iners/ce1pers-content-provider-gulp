import { src, dest } from "gulp";
import htmlMin from "gulp-htmlmin";
import rename from "gulp-rename";
import { getAssetDirs } from "../../utils/file-utils";

export default async () =>
  getAssetDirs().map((dir) => {
    src(`src/assets/${dir}/index.html`)
      .pipe(htmlMin({ collapseWhitespace: true }))
      .pipe(
        rename({
          suffix: ".min",
          extname: ".html",
        })
      )
      .pipe(dest(`dist/${dir}`));
  });
