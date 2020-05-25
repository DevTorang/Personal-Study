//gulp modules

const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const plumber = require('gulp-plumber');
const gulpSort = require('gulp-sort');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

//node modules
const runSequence = require('run-sequence');
const yargs = require('yargs');
const path = require('path');
const fs = require('fs');
const paramPath = yargs.argv.path;

// notification
const notify = require('gulp-notify');



if(paramPath == 'embed'){
	var paths = {
		sprite_src: './product/common/embedStyle/sprite/',
		sprite_dest: './product/common/embedStyle/image/',
		css_src: './product/common/embedStyle/scss/',
		css_dest: './product/common/embedStyle/css/',
		img_dest: './product/common/embedStyle/image/'
	};
} else {
	var paths = {
		sprite_src: './product/common/sprite/',
		sprite_dest: './product/common/image/',
		css_src: './product/common/sass/',
		css_dest: './product/common/css/',
		img_dest: './product/common/image/'
	};
}

// 빌드 순서 
var build = gulp.series(gulp.parallel(a, b), c);

function a(){
	return console.log('a');
}

function b(){
	return console.log('b');
}

function c(){
	return console.log('c');
}



/*
gulp.task('watch', function(){
	runSequence('a', 'b', 'c', 'makeSpriteMap', 'sass');
});

*/





//sprite

//sass


var config = {
	device: 'mobile',	// 기기 종류 배수 설정
	browserSync: true,	// browserSync 사용 여부
	notify: true,
	urlRebase: false,	
	urlRebaseOption: {
		basePath: paths.img_dest,
		defaultUrl: '',
		urlList: {
			'sprite/': ''
		}
	},
	md5: true	// build 태크스 때문에 필요
};




function getFolders(dir) {  // dir 디렉토리 안에있는 파일을 제외하고 디렉토리만 가져오기
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

var globalOptions = {   // 에러 객체
	notify: !config.notify ? {} : {
		errorHandler: notify.onError({
			title: '<%= error.relativePath %>',
			message: '<%= error.line %> line - <%= error.messageOriginal %>',
			sound: 'Pop'
		}),
	}
};


exports.a = a;
exports.b = b;
exports.c = c;

exports.default = build;