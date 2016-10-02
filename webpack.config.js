module.exports = {
    module:{
        loaders:[
            { test: /\.scss$/, loaders:['style', 'css','sass'] },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            }
        ]
    },
    output: {
        filename: '[name].js'
    }
}
