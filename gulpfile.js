const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => gulp
  .src('src/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'))
  .pipe(
    browserSync.reload({
      stream: true,
    }),
  ));

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
});

// Watchers
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
