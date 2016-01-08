module.exports = {
    entry: {
        webpack: "./webpack_app.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.js$/, loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};
