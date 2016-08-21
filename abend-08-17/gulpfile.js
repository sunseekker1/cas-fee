var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
//var open = require('gulp-open');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserify = require("browserify"); // ts / es6
var source = require('vinyl-source-stream'); // ts
var tsify = require("tsify"); // ts
var babelify = require("babelify"); // es6
var buffer = require("vinyl-buffer"); // es6
var sourcemaps = require('gulp-sourcemaps'); // es6

gulp.task('es5', function() {
	return gulp.src('src/es5/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.es5.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('ts', function() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['src/ts/main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(rename({suffix: '.ts'}))
        .pipe(gulp.dest("build/js"));
});

gulp.task('es6', function() {
    var bundler = browserify('src/es6/main.js');
    bundler.transform("babelify", {presets: ["es2015"]});

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(rename({suffix: '.es6'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('build', function() {
    gulp.start('es5', 'ts', 'sass');
});
/*
gulp.task('run', function() {
    var options = {
        uri: 'http://localhost:8888/cas-fee/abend-08-17/',
        app: 'chrome'
    };
    gulp.src('./index.html')
        .pipe(open(options));


});
*/

gulp.task('default', function() {
	gulp.watch(['src/es5/*.js', 'src/ts/*.ts', 'src/scss/*.scss'], ['es5', 'ts','sass']);
    gulp.start('build');
});
