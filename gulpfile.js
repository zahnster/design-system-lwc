const gulp = require('gulp')
const sass = require('gulp-sass')
const headerComment = require('gulp-header-comment')

gulp.task('sass', function(cb) {
  return gulp
    .src('ui/modules/**/*.scss')
    .pipe(sass())
    .pipe(headerComment('--- generated file ---'))
    .pipe(gulp.dest('ui/modules'))

  cb()
})

gulp.task('watch', function() {
  gulp.watch('ui/modules/**/*.scss', gulp.series(['sass']))
})
