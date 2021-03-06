module.exports = function(grunt) {

  // Project configuration
  var files = ["src/main.js"];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner : '/*' + 
      '\n * <%= pkg.name %>.js - <%= pkg.version %> \n' + 
      ' * Description : <%= pkg.description %> \n' +
      ' * Project Url : <%= pkg.repository.url %> \n' +
      ' * Author : <%= pkg.author %> \n' +
      ' * License : <%= pkg.license %> \n' +
      ' * Depedencies: Marrow.js \n' + 
      ' */\n\n',
    uglify: {
      options: {
        banner: "<%=banner%>"
      },
      build: {
        src: files,
        dest: 'build/<%= pkg.name.toLowerCase() %>.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/*.js']
    },
    concat: {
      options: {
        banner: "<%=banner%>",
        separator: '\n\n',
        stripBanners : true
      },
      dist: {
        src: files,
        dest: 'build/<%= pkg.name.toLowerCase() %>.js'
      }
    }
    // simplemocha: {
    //   all: { src: 'test/*.js' }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('minify', ['uglify']);
  //grunt.registerTask('test', ['simplemocha', "jshint"]);
  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask("default", ["jshint", "concat", "uglify"]);

};