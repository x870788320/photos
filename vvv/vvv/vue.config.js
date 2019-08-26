module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        proxy: {
            '/search': {
                target: 'http://localhost:8000/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/search': ''
                }
            }
        }
    }
}
// // .env.development
// VUE_APP_BASE_API=/search
