import { sync } from "del";
import gulp from "gulp";
import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";

const css = () =>
  gulp
    .src("src/**/*.css")
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));

const clearDist = async () => sync(["dist"]);

const prepare = gulp.series([clearDist]);

export const dev = gulp.series([prepare, css]);
