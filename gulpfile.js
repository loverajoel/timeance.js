var gulp    = require("gulp"),
    plugins = require("gulp-load-plugins")();

gulp.task("build", function () {
    gulp
        .src("src/timeance.js")
        .pipe(gulp.dest("dist"))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["scripts"]);
