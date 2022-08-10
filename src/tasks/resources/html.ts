import { src, dest } from "gulp";
import htmlMin from "gulp-htmlmin";
import rename from "gulp-rename";
import { getAssetDirs } from "../../utils/file-utils";

const html = async () =>
  getAssetDirs().map((dir) => {
    src(`src/assets/templates/${dir}/index.html`)
      .pipe(htmlMin({ collapseWhitespace: true }))
      .pipe(
        rename({
          suffix: ".min",
          extname: ".html",
        })
      )
      .pipe(dest(`dist/templates/${dir}`));
  });

export default html;
