import del from "del";
import { series } from "gulp";

const clear = () => del(["dist"]);

export const prepare = series([clear]);
