module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375,//视窗宽度，对应设计稿的宽度
            viewportHeight: 667,//视窗高度，（可不配置）
            unitPrecision: 5,//指定'px'转换为视窗单位值的小数位数
            viewportUnit: 'vw',//指定需要转换的视窗单位，建议用'vw'
            selectorBlackList: ['ignore', 'tab-bar','tab-bar-item'],//指定不需转换的类名
            minPixelValue: 1,//小于或等于'1px'不转换为视窗单位
            mediaQuery: false,//允许在媒体查询中转换'px'
            // exclude: [/^ig/]//忽略正则匹配的文件
        },
    }
}