const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
    console.log(path.join(__dirname + '/dist'));
    return {
        target: 'web',
        entry: './src/react-charging-station-connector-icons.js',
        externals: {
            react: 'react',
        },
        output: {
            path: path.join(__dirname + '/dist'),
            filename: 'react-charging-station-connector-icons.js',
            library: 'ReactChargingStationConnectorIcons',
            libraryTarget: 'umd',
            globalObject: 'this',
            umdNamedDefine: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: '@svgr/webpack',
                        options: {icon: true},
                    }],
                },
            ],
        },
    };
};
