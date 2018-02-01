const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const pngquant = require('imagemin-pngquant');
const rename = require('gulp-rename');
const del = require('del');
const multipipe = require('multipipe');

gulp.task('img', () => {
  return multipipe(
    gulp.src('src/assets/images/**/*'),
    (cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))),
    (gulp.dest('public/images/')));
});

gulp.task('svg', () => {
  return multipipe(
    gulp.src('src/assets/icons/**/*'),
    (cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))),
    (gulp.dest('public/icons/')));
});

gulp.task('default', ['img', 'svg']);
