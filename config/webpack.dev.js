const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const path = require('path'); //node内置path模块，该模块主要集成文件系统路径操作API
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development', //webpack打包的模式，上述命令里有介绍，也可以在本配置中配置
    entry: { //js的入口文件，支持多入口 注释①
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: { //js打包压缩后的出口文件，多入口时对应的配置应做相对变化 注释②
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                //     test: /\.js$/,
                //     loader: "babel-loader",
                //     options: {
                //         cacheDirectory: false,
                //         babelrc: true
                //     },
                //     exclude: path.resolve(__dirname, 'node_modules/'),
                // },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }]
                },
                {
                    test: /\.scss$/,
                    use: [
                        // 处理顺序是从sass-loader到style-loader
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                // {
                //     test: /\.js$/,
                //     exclude: /(node_modules|bower_components)/,
                //     use: {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
            ] // 配置loder使用的规则、作用范围、控制输出的名称、位置等；主要作用是编译，解析文件； 暂时不使用loader
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }), //根据项目提供HTML模板，生成新页面，并将对应的输出打包压缩输出的js，链接到页面中；详细配置见注释④
        new VueLoaderPlugin()
    ],
    devServer: { // webpack-dev-serve配置（仅开发环境需要）
        contentBase: path.join(__dirname, './dist'), // 编译打包的位置
        port: 8080, // 服务器端口号
        host: '0.0.0.0', // 服务器外部可访问
        proxy: {}, // 代理列表
        compress: true, // 启用gzip压缩
        historyApiFallback: true, // 开启服务器history重定向模式

    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
};