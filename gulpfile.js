var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var es2015 = require('babel-preset-es2015');
var react = require('babel-preset-react');

gulp.task('connect',['build'],function(){
  connect.server({
    root:'build',
    livereload:true
  });
});

gulp.task('build',function(){
  return browserify({
    entries:'./src/index.jsx',
    extensions:['jsx'],debug:true
    })
    .transform(babelify,{presets:["es2015","react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch',['connect'],function(){
  gulp.watch('./src/*.jsx',['build']);
});

gulp.task('default',['watch']);
