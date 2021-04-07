'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('./src/css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/css/*.scss', ['sass']);
});

gulp.task('browser-sync', function () {
    var files = [
	'./*.html',
	'./src/css/*.css',
	'./src/img/*.{png,jpg,gif}',
	'./src/js/*.js'
    ];

    browserSync.init(files, {
	server: {
            baseDir: "./public/"
	}
    });

});

// Default task
gulp.task('default', gulp.series('browser-sync', function() {
    gulp.start('sass:watch');
}));
