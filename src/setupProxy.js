const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cdn-api.co-vin.in/',
      changeOrigin: true,
    })
  );
};
