import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import type webpack from 'webpack'
import { buildPlugins } from './config/build/buildPlugins'
import { buildLoader } from './config/build/buildLoaders'
import { buildResolver } from './config/build/buildResolver'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
}
