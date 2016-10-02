'use strict';

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import sass from 'gulp-sass';
import pkg from './package.json';
import webpackConfig from './webpack.config.js';

const reload = browserSync.reload;

// Copy over HTML
gulp.task('html', () =>
    gulp.src(['app/*.html'])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
);

// Compress non-webpack css
gulp.task('styles', () =>
    gulp.src(['app/styles/**/*.scss'])
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream())
);

// Package up js and required files
gulp.task('webpack', () =>
    gulp.src('./app/scripts/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.stream())
);

// Clean output directory
gulp.task('clean', () => del(['dist/*'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['webpack', 'styles', 'html'], () => {
  browserSync({
    notify: false,
    logPrefix: 'OSG',
    server: 'dist',
    port: 3000
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.scss'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['webpack', reload]);
});

// Build production files, the default task
gulp.task('default', ['clean', 'webpack', 'styles', 'html']);
