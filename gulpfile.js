const gulp = require('gulp')
const sass = require('gulp-sass')
const headerComment = require('gulp-header-comment')
const Fiber = require('fibers')

// Explicitly declare dart-sass as the sass compiler
sass.compiler = require('sass')

/**
 * Compiles Sass from ui/modules
 */
function compileSass() {
  return gulp
    .src('ui/modules/**/*.scss')
    .pipe(
      sass({
        fiber: Fiber,
        sourceComments: false,
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./ui/modules'))
}

/**
 * Watch task to fire off different build tasks when certain directories change
 */
function watch() {
  gulp.watch('ui/modules/**/*.scss', compileSass)
}

/**
 * Exporting public methods for external invocation
 */
exports.compileSass = compileSass
exports.build = gulp.series(compileSass) // more will likely happen here
exports.watch = watch
