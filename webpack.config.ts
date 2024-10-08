import path from 'path';
import type webpack from 'webpack';

import buildWebpackConfig from './config/builds/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/builds/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3001;
    const apiUrl = env.apiUrl || 'http://localhost:3000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
    });

    return config;
};
