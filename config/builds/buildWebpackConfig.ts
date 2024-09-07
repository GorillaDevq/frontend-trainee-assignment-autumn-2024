import type webpack from 'webpack';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolves from './buildResolves';

import buildDevServer from './buildDevServer';
import type { BuildOptions } from './types/config';

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
