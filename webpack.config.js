const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const entry = './ClientApp';
const output = './wwwroot/dist';


module.exports = (env, argv) =>{
    //const isProd = env.prod === 'true';
    const isProd = false;
    console.log('isProd = ',isProd)

    return{
        /*entry:{
            index: entry,
            main:['react-hot-loader/patch', 'webpack-hot-middleware/client?name=main']
        },*/
        entry:{
            main: entry
        },
        output:{
            path: path.resolve(__dirname, output),
            filename:'[name].js',
            publicPath:'dist/'
        },

        module:{
            rules:[
                {
                    test:/\.scss$/,                     
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',                           
                                options: {
                                        modules: true,
                                        camelCase: true,
                                        localIdentName: '[name]__[local]__[hash:base64:8]',
                                        //url: false,
                                        minimize: true,
                                        sourceMap: true
                                }
                            }, 
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })       
                },
                {
                    test:/\.css$/,                     
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',                           
                                options: {
                                        modules: true,
                                        camelCase: true,
                                        localIdentName: '[name]__[local]__[hash:base64:8]',
                                        minimize: true,
                                        sourceMap: true
                                }
                            }
                        ]
                    })                          
                },
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    use : [{
                        loader:'babel-loader',
                        options:{
                            presets: ['env','stage-2','react'],
                            //plugins: ["react-hot-loader/babel"]
                        }
                    }]
                },
                {
                    test:/\.(jpg|png)$/,
                    use : [{
                        loader:'file-loader',
                        options:{
                            name:'[name]_[hash:base64:8].[ext]',
                            outputPath:'public/',
                            //publicPath:'/'
                        }
                    }]
                }

            ]
        },
        devtool: isProd ? 'source-map' : 'eval-source-map',
        resolve:{
            extensions: [".js", ".json"],
            alias:{
                '~': path.resolve(__dirname, entry),
            }
        },
        //externals: {jquery: 'jQuery'},    
        plugins: [
            new HtmlWebpackPlugin({
                template: entry + '/index.html',
                minify:{
                    collapseWhitespace: isProd
                }
            }),
            //new CleanWebpackPlugin([output + '/*.*']),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'                
            }),
            new ExtractTextPlugin({
                filename: 'styles.css',
                disable: !isProd        //not compatible with React Hot Loader
            }),
             new webpack.DefinePlugin({
                'process.env.NODE_ENV': !isProd ? '"development"' : '"production"'
            }),
            //new webpack.HotModuleReplacementPlugin()   //x2        
        ].concat(!isProd ? [
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]:[])
    };
}

// npm install aspnet-webpack aspnet-webpack-react webpack-hot-middleware -–save-dev
// dotnet add package Microsoft.AspNetCore.SpaServices --version 2.0.3
// set ASPNETCORE_ENVIRONMENT=Development & dotnet run