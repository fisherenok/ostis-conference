module.exports = function() {

    var kb = 'kb/ui_components/formation_of_the_expected_list_of_speakers_component';
    var components = 'sc-web/components/formation_of_the_expected_list_of_speakers_component/';
    var clientJsDirPath = '../../sc-web/client/static/components/js/';
    var clientCssDirPath = '../../sc-web/client/static/components/css/';
    var clientHtmlDirPath = '../../sc-web/client/static/components/html/';
    var clientImgDirPath = '../../sc-web/client/static/components/images/';

    return  {
        concat: {
            formation_of_the_expected_list_of_speakers_component: {
                src: [
                    components + 'src/formation_of_the_expected_list_of_speakers_component.js'],
                dest: clientJsDirPath + 'formation_of_the_expected_list_of_speakers_component/formation_of_the_expected_list_of_speakers_component.js'
            }
        },
        copy: {
            formation_of_the_expected_list_of_speakers_component_IMG: {
                cwd: components + 'static/components/images/',
                src: ['*'],
                dest: clientImgDirPath + 'formation_of_the_expected_list_of_speakers_component/',
                expand: true,
                flatten: true
            },
            formation_of_the_expected_list_of_speakers_component_CSS: {
                cwd: components + 'static/components/css/',
                src: ['formation_of_the_expected_list_of_speakers_component.css'],
                dest: clientCssDirPath,
                expand: true,
                flatten: true
            },
            formation_of_the_expected_list_of_speakers_component_HTML: {
                cwd: components + 'static/components/html/',
                src: ['*.html'],
                dest: clientHtmlDirPath,
                expand: true,
                flatten: true
            },
            kb: {
                cwd: kb,
                src: ['*'],
                dest: '../../kb/ui_components/formation_of_the_expected_list_of_speakers_component/',
                expand: true,
                flatten: true
            }
        },
        watch: {
            formation_of_the_expected_list_of_speakers_component: {
                files: components + 'src/**',
                tasks: ['concat:formation_of_the_expected_list_of_speakers_component']
            },
            formation_of_the_expected_list_of_speakers_component_IMG: {
                files: [components + 'static/components/images/**'],
                tasks: ['copy:formation_of_the_expected_list_of_speakers_component_IMG']
            },
            formation_of_the_expected_list_of_speakers_component_CSS: {
                files: [components + 'static/components/css/**'],
                tasks: ['copy:formation_of_the_expected_list_of_speakers_component_CSS']
            },
            formation_of_the_expected_list_of_speakers_component_HTML: {
                files: [components + 'static/components/html/**',],
                tasks: ['copy:formation_of_the_expected_list_of_speakers_component_HTML']
            },
            copyKB: {
                files: [kb + '**',],
                tasks: ['copy:kb']
            }
        },
        exec: {
          updateCssAndJs: 'sh add-css-and-js.sh'
        }
    }
};

