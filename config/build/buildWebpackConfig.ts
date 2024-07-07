import {BuildOptions} from './types/config'
import webpack from 'webpack'
import {buildPlugins} from './buildPlugins'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildDevServer} from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options

    return {
        // ---- Статус приложения ('development' | 'production') ----
        mode,

        entry: paths.entry,

        // ---- Где и как будет собрано приложение ----
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },

        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        // ---- Помогает с ошибками ----
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}