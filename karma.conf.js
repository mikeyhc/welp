var webpackConfig = require('./webpack.config');
var argv = require('yargs').argv;

module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        basePath: '',
        pareprocessors: {},
        port: 9876,
        singleRun: !argv.watch,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        reporters: ['spec'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader'
        ]
    });
}
