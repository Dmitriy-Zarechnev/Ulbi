import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // ---- Важен порядок loaders, поэтому выносим их в переменные ----
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            nsSeparator: '~',
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const cssLoader =
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    //test: /\.css$/i,
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:8]'
                                : '[hash:base64:8]',
                            namedExport: false,
                            exportLocalsConvention: 'as-is'
                        }
                    }
                },
                // Compiles Sass to CSS
                'sass-loader'
            ]
        }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }


    // ---- Складываем loaders - предназначенные для обработки файлов, выходящих за рамки JS ----
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}