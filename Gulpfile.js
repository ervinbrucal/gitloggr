var gulp = require('gulp'),
    server = require('browser-sync'),
    reload = server.reload,
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    less = require('gulp-less');

gulp.task('less', function() {
    var cssDestination = 'app/node_modules/uikit/src/css';
    var lessDestination = cssDestination + '/less/*.less';
    
    gulp.src(lessDestination)
        .pipe(watch(lessDestination))
        .pipe(less(lessDestination))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('serve', ['less'], function() {
      server({
        server: {
          baseDir: 'app'
        }
      });

      gulp.watch(['*.html', 'assets/**/*.css', 'assets/**/*.js', 'components/**/*.js', 'shared/**/*.js'], {cwd: 'app'}, reload);
});