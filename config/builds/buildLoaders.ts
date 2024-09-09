import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack';
import type { BuildOptions } from './types/config';

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: ['src/app/styles/variables/global.scss', 'src/app/styles/variables/mixins.scss'],
                },
            },
        ],
    };

    const fileLoader = {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name][ext]',
        },
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
            },
        },
    };

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        scssLoader,
    ];
}
