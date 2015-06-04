var gulp = require('gulp');
var server = require('browser-sync');
var reload = server.reload;

gulp.task('serve', function() {
      server({
        server: {
          baseDir: 'app'
        }
      });

      gulp.watch(['*.html', 'assets/**/*.css', 'assets/**/*.js', 'components/**/*.js', 'shared/**/*.js'], {cwd: 'app'}, reload);
});