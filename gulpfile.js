var gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  sourcemap = require("gulp-sourcemaps"),
  connect = require("gulp-connect");
  
gulp.task("html", () => {
  return gulp
    .src("./stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("css", () => {
  return gulp
    .src("./stage/css/main.scss")
    .pipe(sourcemap.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("js", async () => {
  gulp.src("./stage/js/main.js").pipe(gulp.dest("dist/js"));
});

gulp.task("watch", () => {
  connect.server({
    port: 8000,
    livereload: true,
  });
  gulp.watch("./stage/html/**/*.pug", gulp.parallel("html"));
  gulp.watch("./stage/css/**/*.*", gulp.parallel("css"));
  gulp.watch("./stage/js/*.js", gulp.parallel("js"));
});
