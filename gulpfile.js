// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var webdav = require('gulp-webdav-sync');
var tsProject = ts.createProject("tsconfig.json");


var webdavOpts = {
    'log': 'info',
    'logAuth': true,
    'base': 'Portal',
    'uselastmodified': false
};

var path = {
    scss: 'ROOT/**/Styles/*.scss',
    css: 'ROOT/**/Styles/*.css',
    velocity: 'ROOT/**/Velocity/*.vm',
    js: 'ROOT/**/Scripts/*.js'
}

var webdav_opts = {
    username: 'USERNAME',
    password: 'PASSWORD',
    baseURL: 'BASEURL/webdav/files/ROOT',
    path: () => {
        return 'http://' + this.username + ":" + this.password + "@" + this.baseURL;
    }
}

gulp.task('sass', function() {
    return gulp.src(path.scss)
        .pipe(sass())
        .pipe(gulp.dest(function(f){
            return f.base;
        }))
});

gulp.task("ts:compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(function(f){
            return f.base;
        }));
});


gulp.task("deploy", function(){
    return gulp.src([path.js, path.css, path.velocity])
            .pipe(webdav(webdavOpts.path(), webdavOpts))
});

gulp.task('default:watcher', function() {
    gulp.watch(path.scss, function(e){
        gulp.src(e.path)
        .pipe(sass())
        .pipe(gulp.dest(function(f){
            return f.base;
        }))
        .on('error', function(e){});
    });
    gulp.watch(tsProject.config.files, function(e){
        tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(function(f){
            return f.base;
        }))
        .on('error', function(e){});
    });
    gulp.watch([path.js, path.css, path.velocity], function(e){
        gulp.src(e.path)
            .pipe(webdav(webdavOpts.path(), webdavOpts))
            .on('error', function(e){});
    });
})