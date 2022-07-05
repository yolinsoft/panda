module.exports = function (grunt) {
  grunt.initConfig({
    nwjs: {
      options: {
        version: '0.14.7',
        macIcns: './assets/osx/icon.icns',
        winIco: './assets/win/icon.ico',
        platforms: ['osx64'],
        buildDir: './build' // Where the build version of my NW.js app is saved
      },
      src: ['./panda/**/**'] // Your NW.js app
    }
  })

  grunt.loadNpmTasks('grunt-nw-builder')
  grunt.registerTask('default', ['nwjs'])
}
