const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/v2/launchpad/collections?offset=0&limit=499", {
      target: "https://api-mainnet.magiceden.dev",
      // secure: false,
      changeOrigin: true
    })
  );
};

