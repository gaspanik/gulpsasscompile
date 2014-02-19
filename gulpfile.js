var gulp = require('gulp')
,	gutil = require('gulp-util')
,	sass = require('gulp-ruby-sass')
,	minifycss = require('gulp-minify-css')
,	rename = require('gulp-rename');

gulp.task('styles', function() {
	return gulp.src('scss/*.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(gulp.dest('css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch(['scss/*.scss'], ['styles']);
});

gulp.task('default', ['styles', 'watch']);
