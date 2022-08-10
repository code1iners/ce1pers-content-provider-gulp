import { series, dest } from "gulp";
import gulpTS from "gulp-typescript";
import uglify from "gulp-uglify";
import babel from "gulp-babel";
import rename from "gulp-rename";
const tsProject = gulpTS.createProject("tsconfig.json");

const templates = async () =>
  tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".js",
      })
    )
    .pipe(dest("dist/templates"));

const typeScript = series([templates]);

export default typeScript;
