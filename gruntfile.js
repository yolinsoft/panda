module.exports = function(grunt) {
    grunt.initConfig({
      nwjs: {
        options: {
            version: '0.12.1',
            macIcns: './assets/osx/icon.icns',
            winIco: './assets/win/icon.ico',
            platforms: ['win'],
            buildDir: './build', // Where the build version of my NW.js app is saved
        },
        src: ['./panda/**/**'] // Your NW.js app
      },
    });

    grunt.loadNpmTasks('grunt-nw-builder');
    grunt.registerTask('default', ['nwjs']);

}

