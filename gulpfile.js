const gulp = require('gulp');
const sass = require('gulp-sass');
const image = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


gulp.task('image', () => gulp
  .src('src/assets/*')
  .pipe(image())
  .pipe(gulp.dest('dist/assets')));


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
gulp.task('watch', ['browserSync', 'sass', 'image'], () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/assets/*');
  gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
