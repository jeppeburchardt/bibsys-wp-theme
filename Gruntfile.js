module.exports = function(grunt) {

	grunt.initConfig({
		banner: '/*\n' +
			'Theme Name: <%= pkg.name %>\n' +
			'Theme URI: biblioteksystemet.dk\n' +
			'Version: <%= pkg.version %>\n' +
			'Requires at least: WP 3.0\n' +
			'Author: <%= pkg.author %>\n' +
			'Build Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'Github URI: https://github.com/kosmobot\n' +
			'\n<%= pkg.description %> \n' +
			'*/',

		pkg: grunt.file.readJSON('package.json'),
		less: {
			dist: {
				files: {
					"src/style.css": "src/style.less"
      			}
			}
		},
		usebanner: {
			dist: {
				options: {
					position: 'top',
					banner: '<%= banner %>'
				},
				files: {
					src: [
						'src/style.css'
					]
				}
			}
		},
		zip: {
			'bin/bibsys-wp-theme.zip': [
				'src/footer.php',
				'src/funcitons.php',
				'src/header.php',
				'src/index.php',
				'src/page.php',
				'src/readme.txt',
				'src/style.css'
			]
		},
		watch: {
			scripts: {
				files: ['src/style.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-zip');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-banner');

	grunt.registerTask('default', ['less', 'usebanner', 'zip']);
}