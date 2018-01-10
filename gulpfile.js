//引入插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	cssnano = require("gulp-cssnano");
//编译sass
	gulp.task("sass",function(){
		return gulp.src("src/sass/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css"));
	})
//压缩sass文件
	gulp.task("yasuo",function(){
		return gulp.src("src/sass/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css")).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
	})
//监听
	gulp.task("watch",function(){
		gulp.watch("src/sass/*.scss",["sass"]);
	})