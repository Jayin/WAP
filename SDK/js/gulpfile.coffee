gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
minify = require 'gulp-minifier'
del = require 'del'

BUILD_DEST = './build/'
DEV = process.env.DEV == 'true' ? true : false

gulp.task 'copy', ()->
    gulp.src ['./src/lib/**/*.js']
        .pipe gulp.dest(BUILD_DEST + '/lib')
    gulp.src ['./src/main.js']
        .pipe gulp.dest(BUILD_DEST)


gulp.task 'merge-lib', ['copy'], ()->
    if process.env.DEV
        MINIFY = false
    else
        MINIFY = true

    gulp.src [  
                './build/lib/cookie.js',
                './build/lib/fetch.js', 
                './build/lib/uuid.js',
                './build/lib/observe.js'
             ]
        .pipe concat('main.js')
        .pipe minify
                minify: MINIFY,
                collapseWhitespace: MINIFY,
                conservativeCollapse: MINIFY,
                minifyJS: MINIFY,
        .pipe gulp.dest(BUILD_DEST + 'lib/')


gulp.task 'merge-core', ['merge-lib'], ()->
    if process.env.DEV
        MINIFY = false
    else
        MINIFY = true

    gulp.src ['./build/lib/main.js', './build/main.js']
        .pipe concat('wap.js')
        .pipe minify
                minify: MINIFY,
                collapseWhitespace: MINIFY,
                conservativeCollapse: MINIFY,
                minifyJS: MINIFY,
        .pipe gulp.dest(BUILD_DEST)


gulp.task 'build', ['merge-core']


# 生成md5
gulp.task 'md5', ['build'], ()->
    fs = require 'fs'
    crypto = require 'crypto'

    md5 = crypto.createHash('md5')
        .update(fs.readFileSync('./build/wap.js'))
        .digest('hex')

    console.log md5


gulp.task 'watch', ['build'], ()->
    gulp.watch './src/**/*', ['build']

gulp.task 'default', ['watch']

