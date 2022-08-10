import { src, dest, series } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import { getAssetDirs } from "../../utils/file-utils";

const templates = async () =>
  getAssetDirs().map((dir) =>
    src(`src/assets/templates/${dir}/index.css`)
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(
        rename({
          suffix: ".min",
          extname: ".css",
        })
      )
      .pipe(dest(`dist/templates/${dir}`))
  );

const styles = async () =>
  src("src/assets/styles/**/*.css")
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(dest(`dist/styles`));

const css = series([templates, styles]);

export default css;
