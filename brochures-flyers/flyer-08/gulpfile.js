/* AUTOPREFIXER MUST BE JUST BEFORE THE sourcemaps.write() call to fix the issue of erroring out with inline comments in sass files*/

var gulp = require('gulp');
var sass = require('gulp-sass'); 
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var reverse = require('svg-path-reverse');
//var gcmq = require('gulp-group-css-media-queries');
 
var path = "M0,135a135,135 0 1,0 270,0a135,135 0 1,0 -270,0";

var reversed = reverse(path);

console.log(reversed);











