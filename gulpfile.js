const { src, dest, watch, series, parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const { deleteAsync } = require('del');

// Paths
const paths = {
  html: '_site/**/*.html',
  css: ['_site/css/*.css', '_site/css/bootstrap-5.3.7-dist/css/bootstrap.css'],
  js: '_site/js/*.js',
  assets: '_site/assets/**/*',
  seo: ['_site/robots.txt', '_site/sitemap.xml'],
  dist: 'dist/'
};

// dist/ folder cleaning
async function cleanDist() {
  await deleteAsync([paths.dist, '!dist']);
}

// HTML minification
function minifyHTML() {
  return src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(paths.dist));
}

// CSS minification
function minifyCSS() {
  return src([
      '_site/css/*.css',
      '_site/css/bootstrap-5.3.7-dist/css/bootstrap.min.css'
    ], { allowEmpty: true })
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest(paths.dist + 'css'));
}

// JS minification
function minifyJS() {
  return src(paths.js, { allowEmpty: true })
    .pipe(terser(
      { format: { comments: false, }, }))
    .pipe(dest(paths.dist + 'js'));
}

// Assets folder cpoying
function copyAssets() {
  return src(paths.assets, { base: '_site/assets' })
    .pipe(dest(paths.dist + 'assets'));
}

// SEO-files copying
function copySEO() {
  return src(paths.seo, { allowEmpty: true })
    .pipe(dest(paths.dist));
}

// Changes watch
function watchFiles() {
  watch(paths.html, minifyHTML);
  watch(paths.css, minifyCSS);
  watch(paths.js, minifyJS);
  watch(paths.assets, copyAssets);
  watch(paths.seo, copySEO);
}

// Final build
const build = series(
  cleanDist,
  parallel(minifyHTML, minifyCSS, minifyJS, copyAssets, copySEO)
);

exports.clean = cleanDist;
exports.build = build;
exports.watch = series(build, watchFiles);
exports.default = build;