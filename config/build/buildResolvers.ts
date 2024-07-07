import {ResolveOptions} from 'webpack'

export function buildResolvers(): ResolveOptions {
    // ---- Расширения, отображение которых будет проигнорировано при импорте ----
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}