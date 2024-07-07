import {ResolveOptions} from 'webpack'
import {BuildOptions} from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        // ---- Расширения, отображение которых будет проигнорировано при импорте ----
        extensions: ['.tsx', '.ts', '.js'],
        // ---- Настройки абсолютных импортов ----
        preferAbsolute: true,
        // ---- Откуда идут абсолютные пути ----
        modules: [options.paths.src, 'node_modules'],
        // ---- Главный файл в модуле ----
        mainFiles: ['index'],
        // ---- Символ в начале абсолютного импорта ----
        alias: {}
    }
}