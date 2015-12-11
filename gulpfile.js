// module
// ---------------------------------------------
var gulp = require("gulp")
var browser = require("browser-sync").create()
var sass = require("gulp-ruby-sass")
var webpack = require("gulp-webpack")
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
  sass("./src/assets/css/*.scss", {
      bundleExec: true,
      require: ["bootstrap"]
    })
    .pipe(gulp.dest("./dist/assets/css/"))
})


// webpack
// ---------------------------------------------
gulp.task("webpack", () => {
  gulp.src("./src/assets/js/app.js")
    .pipe(webpack({
      output: {
        filename: 'app.js',
      },
      module: {
        loaders: [
          {
            test: /\.vue$/,
            loader: 'vue'
          },
          {
            test: /\.js$/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    }))
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
  gulp.watch(["./src/assets/js/**/*"], ["webpack"])
  gulp.watch(["./src/assets/img/**/*", "./src/assets/data/**/*", "./src/**/*.html"], ["copy"])
  gulp.watch("./dist/**/*").on("change", browser.reload)
})

gulp.task("build", ["copy", "webpack", "sass"])
