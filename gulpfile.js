const { src, dest, watch, series, parallel } = require('gulp');
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const util = require('gulp-util');
const jsonMinify = require('gulp-json-minify');
// const concat = require('gulp-concat');


function minifyhtml() {
    return src(["src/pages/*.html",])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("build/pages"));
}

function movecss() {
    return src('src/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest("build/styles"));
}

function minifyJS(){
    return src('src/js/*.js')
    .pipe(sourcemaps.init())  
    .pipe(terser({
        toplevel: true,
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/js'));
}

function minifyjson() {
    return src('src/*.json')
    .pipe(jsonMinify())
    .pipe(dest('build'))
    .on('error', util.log);
}

function watchTask() {
    watch('src/*.js', parallel(minifyhtml, movecss, minifyJS, minifyjson));
}

exports.default = series(minifyhtml, movecss, minifyJS, minifyjson, watchTask);

