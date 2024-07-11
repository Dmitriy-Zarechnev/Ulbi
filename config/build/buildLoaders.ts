import webpack from 'webpack'
import {BuildOptions} from './types/config'
import {buildCssLoader} from './loaders/buildCssLoader'
import {buildSvgLoader} from './loaders/buildSvgLoader'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // ---- Важен порядок loaders, поэтому выносим их в переменные ----
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = buildSvgLoader()

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

    const cssLoader = buildCssLoader(isDev)


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