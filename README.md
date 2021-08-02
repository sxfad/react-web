基于 [Next.js](https://nextjs.org/) 服务端渲染框架，适用于官网等需要SEO的项目。

## 安装依赖

```bash
yarn
```

## 开发启动

```bash
yarn start
```

## 生产构建

```bash
yarn build
```

## 生产启动服务

```bash
yarn start:pro
```

1. 支持less，如果需要`CSS module` less文件名需要是`xxx.module.less`
1. webpack resolve.alias.src 别名支持
1. ajax 请求使用 [@ra-lib/ajax](https://sxfad.github.io/ra-lib/ajax)
1. 开发代理设置 `src/setupProxy.js`
