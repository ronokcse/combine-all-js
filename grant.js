'use strict';
module.exports = function(grunt) {

  // Project configuration.
 grunt.initConfig({ 
  uglify: { 
    my_target : { 
      options : { 
        sourceMap : true, 
        sourceMapName : 'sourceMap.map'
      }, 
      files : { 
        'composite.min.js' : ['src/heatmap.js', 'src/html2canvas', 'src/scroll_heatmap'] 
      } 
    } 
  } 
}); 

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify']); 
  grunt.registerTask('concat-js', ['concat:js']);
};