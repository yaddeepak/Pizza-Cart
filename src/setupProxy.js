const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ecom-rest-apis.herokuapp.com',
      changeOrigin: true,
    })
  );
};