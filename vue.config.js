module.exports = {
    lintOnSave :false,
    devServer : {
        port:8080,
        // open: true, //配置自动启动浏览器
        proxy: {
            "/ldzy": {
            target: "http://localhost:8088", //后端ip地址及端口
            ws: true, //是否跨域
            changeOrigin: true,
            pathRewrite: {
                "^/ldzy": "/"
            }
            }
        }
    },
}