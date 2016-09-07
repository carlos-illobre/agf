var gulp = require('gulp')
var del = require('del')
var concat = require('gulp-concat')
var addsrc = require('gulp-add-src')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var inlineAngularTemplates = require('gulp-inline-angular-templates')
var autoprefixer = require('gulp-autoprefixer')
var csslint = require('gulp-csslint')
var csso = require('gulp-csso')
var uncss = require('gulp-uncss')
var w3cjs = require('gulp-w3cjs')
var inject = require('gulp-inject')
var htmlify = require('gulp-angular-htmlify')
var removeHtmlComments = require('gulp-remove-html-comments')
var htmlmin = require('gulp-htmlmin')
var manifest = require('gulp-manifest')
var replace = require('gulp-replace-task')
var fs = require('fs')
var zip = require('gulp-zip')
var ftp = require('vinyl-ftp')
var gutil = require('gulp-util')

gulp.task('clean', function() {
	return del(['public'])
})

gulp.task('font', ['clean'], function() {
	//node_modules\materialize-css\dist\font\material-design-icons
	return gulp.src([
		'src/font/**'
	])
	.pipe(gulp.dest('public/font'))
})

gulp.task('custom-css', ['clean', 'font'], function() {
	return gulp.src(['src/css/*.css'])
	.pipe(gulp.dest('public/css'))
})

gulp.task('custom-css:prod', ['clean', 'font'], function() {
	return gulp.src(['src/css/*.css'])
	.pipe(autoprefixer())
	.pipe(concat('agrofinger.css'))
	.pipe(csso())
	.pipe(gulp.dest('public/css'))
})

gulp.task('css', ['clean', 'custom-css'], function() {
	return gulp.src([
		'node_modules/materialize-css/dist/css/materialize.css',
		'node_modules/nvd3/build/nv.d3.css'
	])
	.pipe(gulp.dest('public/css/lib'))
})

gulp.task('css:prod', ['clean', 'custom-css:prod'], function() {
	return gulp.src([
		'node_modules/materialize-css/dist/css/materialize.min.css',
		'node_modules/nvd3/build/nv.d3.min.css',
		'public/css/*.css'
	])
	.pipe(concat('agrofinger.css'))
	.pipe(gulp.dest('public/css'))
})

gulp.task('js', ['clean'], function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/materialize-css/dist/js/materialize.js',
		'node_modules/angular/angular.js',
		'node_modules/angular-animate/angular-animate.js',
		'node_modules/angular-route/angular-route.js',
		'bower_components/angular-swipe/dist/angular-swipe.js',
		'node_modules/angucomplete-alt/angucomplete-alt.js',
		'node_modules/d3/d3.js',
		'node_modules/nvd3/build/nv.d3.js',
		'node_modules/angular-nvd3/dist/angular-nvd3.js',
		'src/agrofinger.js',
		'src/**/*.js'
	])
	.pipe(gulp.dest('public/js'))
})

gulp.task('js-custom:prod', ['clean'], function() {
	return gulp.src([
		'src/agrofinger.js',
		'src/**/*.js'
	])
	.pipe(concat('agrofinger.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
})

gulp.task('js:prod', ['js-custom:prod'], function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/materialize-css/dist/js/materialize.min.js',
		'node_modules/angular/angular.min.js',
		'node_modules/angular-animate/angular-animate.min.js',
		'node_modules/angular-route/angular-route.min.js',
		'bower_components/angular-swipe/dist/angular-swipe.min.js',
		'node_modules/angucomplete-alt/dist/angucomplete-alt.min.js',
		'node_modules/d3/d3.min.js',
		'node_modules/nvd3/build/nv.d3.min.js',
		'node_modules/angular-nvd3/dist/angular-nvd3.min.js',
		'public/js/agrofinger.js'
	])
	.pipe(concat('agrofinger.js'))
	.pipe(gulp.dest('public/js'))
})

gulp.task('html', ['clean'], function() {
	return gulp.src('src/view/*.html')
	.pipe(htmlify())
	.pipe(gulp.dest('public'))
})

gulp.task('html:prod', ['index:prod'], function() {
	return gulp.src('src/view/*.html')
	.pipe(htmlify())
    .pipe(htmlmin({
		collapseWhitespace: true,
		keepClosingSlash: true
	}))
	.pipe(removeHtmlComments())
	.pipe(inlineAngularTemplates('public/index.html', {
		base: 'src/view',	// (Optional) ID of the <script> tag will be relative to this folder. Default is project dir. 
		selector: 'head',	// (Optional) CSS selector of the element to use to insert the templates. Default is `body`. 
		method: 'append'	// (Optional) DOM insert method. Values: append | prepend | replaceWith | after | before
    }))
	.pipe(htmlify())
    .pipe(htmlmin({collapseWhitespace: true}))
	.pipe(removeHtmlComments())
	.pipe(w3cjs())
	.pipe(gulp.dest('public'))
})

gulp.task('index', ['css', 'js'], function () {
	return gulp.src('src/index.html')
	.pipe(htmlify())
	.pipe(inject(
		gulp.src([
			'public/js/jquery.js',
			'public/js/materialize.js',
			'public/js/angular.js',
			'public/js/angular-animate.js',
			'public/js/angular-route.js',
			'public/js/angular-swipe.js',
			'public/js/angucomplete-alt.js',
			'public/js/d3.js',
			'public/js/nv.d3.js',
			'public/js/angular-nvd3.js',
			'public/js/agrofinger.js',
			'public/js/module/*.js',
			'public/js/service/*.js',
			'public/js/controller/*.js',
			'public/js/directive/*.js',
			'public/css/lib/*.css',
			'public/css/*.css'
		], {read: false}), {
			ignorePath: 'public',
			addRootSlash: false
		}
	))
	.pipe(gulp.dest('public'))
})

gulp.task('index:prod', ['css:prod', 'js:prod'], function () {
	return gulp.src('src/index.html')
	.pipe(inject(
		gulp.src(['public/js/*.js', 'public/css/*.css'], {read: false}), {
			ignorePath: 'public',
			addRootSlash: false
		}
	))
	.pipe(gulp.dest('public'))
})

gulp.task('manifest-inject', ['html:prod'], function() {
	return gulp.src(['public/index.html'])
	.pipe(replace({
		patterns: [
			{
				match: /(<html\s)(.*>.*)/i,
				replacement: '$1manifest="agrofinger.manifest" $2'
			}
		]
    }))
	.pipe(gulp.dest('public'))
})

gulp.task('manifest', ['manifest-inject'], function() {
	return gulp.src(['public/**/*'])
	.pipe(manifest({
		filename: 'agrofinger.manifest',
		timestamp: true
	}))
	.pipe(replace({
		patterns: [
			{
				match: /%5C/g,
				replacement: '/'
			}
		]
    }))
	.pipe(gulp.dest('public'))
})

gulp.task('apache', ['manifest'], function() {
	fs.writeFileSync('public/.htaccess', [
		'# Do not remove this line or mod_rewrite rules and search engine friendly URLs will stop working',
		'RewriteBase /',
		'',
		'AddType text/cache-manifest .appcache'
	].join('\n'))
})

gulp.task('zip', ['apache'], function() {
	fs.writeFileSync('public/.htaccess', [
		'# Do not remove this line or mod_rewrite rules and search engine friendly URLs will stop working',
		'RewriteBase /',
		'',
		'AddType text/cache-manifest .appcache'
	].join('\n'))
	return gulp.src('public/**/*')
	.pipe(zip('public.zip'))
	.pipe(gulp.dest('public'))
})

gulp.task('hostinger', ['apache'], function() {
	var conn = ftp.create({
        host:     'agrofinger.esy.es',
        user:     'u528766895',
        password: 'sxnC9X802M',
        parallel: 1,
		log: gutil.log
    })
	return gulp.src(['public/.htaccess', 'public/**'], {base: 'public', buffer: false})
	.pipe(conn.dest('/public_html'))
})

gulp.task('dev', ['html', 'index'])
gulp.task('default', ['hostinger'])

