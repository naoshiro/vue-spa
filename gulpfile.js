// module
// ---------------------------------------------
var gulp = require("gulp")
var browser = require("browser-sync").create()
var sass = require("gulp-sass");
var browserify = require('browserify');
var source = require("vinyl-source-stream")
var clean = require('gulp-clean')

// path
// ---------------------------------------------


// clean
// ---------------------------------------------
gulp.task('clean', cb => {
  gulp.src('./dist/*', {read: false})
		.pipe(clean())
})


// copy
// ---------------------------------------------
gulp.task("copy", () => {
  gulp.src("./src/**/*.html")
    .pipe(gulp.dest("./dist/"))
  gulp.src("./src/assets/img/**/*")
    .pipe(gulp.dest("./dist/assets/img/"))
  gulp.src("./src/assets/data/**/*")
    .pipe(gulp.dest("./dist/assets/data/"))
})


// sass
// ---------------------------------------------
gulp.task("sass", () => {
  gulp.src("./src/assets/css/*.scss")
    .pipe(sass({
      includePaths: ['./node_modules/bootstrap/scss']
    }))
    .pipe(gulp.dest("./dist/assets/css/"))
})


// browserify
// ---------------------------------------------
gulp.task("browserify", () => {
  browserify("./src/assets/js/app.js")
    .transform("vueify")
    .transform("babelify")
    .bundle()
    .on("error", (err) => {
      console.log("Error : " + err.message)
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest("./dist/assets/js/"))
})


// browser-sync
// ---------------------------------------------
gulp.task("browser-sync", () => {
  browser.init({
    server: {
      baseDir: "./dist/",
      routes: {
        "/bower_components": "bower_components"
      }
    }
  })
})


// Default task
// ---------------------------------------------
gulp.task("default", ["browser-sync"], () => {
  gulp.watch(["./src/assets/css/**/*.scss"], ["sass"])
  gulp.watch(["./src/assets/js/**/*"], ["browserify"])
  gulp.watch(["./src/assets/img/**/*", "./src/assets/data/**/*", "./src/**/*.html"], ["copy"])
  gulp.watch("./dist/**/*").on("change", browser.reload)
})

gulp.task("build", ["copy", "browserify", "sass"])
