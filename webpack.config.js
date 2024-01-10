import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { VueLoaderPlugin } from 'vue-loader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        historyApiFallback: true,
        open: true,
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: '200.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`src/views/**/*`, { nodir: true }),
        // }),
        new VueLoaderPlugin()
    ],
}