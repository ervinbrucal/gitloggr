var gulp = require('gulp'),
    server = require('browser-sync'),
    reload = server.reload,
    watch = require('gulp-watch');

gulp.task('serve', function() {
      server({
        server: {
          baseDir: 'app'
        }
      });

      gulp.watch(['*.html', 'assets/**/*.css', 'assets/**/*.js', 'components/**/*.js', 'shared/**/*.js'], {cwd: 'app'}, reload);
});