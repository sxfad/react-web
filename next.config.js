const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');
const path = require('path');

const SRC_PATH = path.join(__dirname, 'src');

const plugins = [
    withLess,
    {
        lessLoaderOptions: {
            /* ... */
        },
    },
];

const config = {
    reactStrictMode: true,

    // 自定义webpack配置
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // Important: return the modified config
        config.resolve.alias.src = SRC_PATH;
        config.resolve.alias['@'] = SRC_PATH;
        return config;
    },
};

module.exports = withPlugins(plugins, config);
