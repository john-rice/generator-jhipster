var webpack = require('webpack');
module.exports = {
    entry: {
        'vendor': [
            './src/main/webapp/app/vendor',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/forms',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/upgrade',
            '@ng-bootstrap/ng-bootstrap',
            'angular2-cookie',
            'angular2-infinite-scroll',
            'jquery',
            'ng-jhipster',
            'ng2-webstorage',
            'rxjs',
            <%_ if (websocket == 'spring-websocket') { _%>
            'sockjs-client',
            'webstomp-client',
            <%_ } _%>
            'ui-router-ng2'
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules']
    },
    module: {
        exprContextCritical: false,
        rules: [
            <%_ if (useSass) { _%>
            {
                test: /(vendor\.scss|global\.scss)/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            <%_ } else { _%>
            {
                test: /(vendor\.css|global\.css)/,
                loaders: ['style-loader', 'css-loader']
            },
            <%_ } _%>
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
        ]
    },
    output: {
        filename: '[name].dll.js',
        path: './<%= BUILD_DIR %>www',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: './<%= BUILD_DIR %>www/[name].json',
        }),
    ]
};
