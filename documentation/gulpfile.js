const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cssnano = require('gulp-cssnano')

gulp.task('default', function(){
    return gulp.src('./scss/backend.scss')
        .pipe(sass({
            includePaths: ["./node_modules"],
            outputStyle: "compressed"
        }))
        .pipe(cssnano())
        .pipe(concat('bootstrap.css'))
        .pipe(gulp.dest(`./css`))
})