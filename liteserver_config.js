const proxy = require('http-proxy-middleware');
const fallback = require('connect-history-api-fallback');
module.exports = {
  "open": false,
  "port": 8080,
  "server": {
    "baseDir": "dist",
    "middleware": {
      1: proxy('/api/sfs',
        {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          "pathRewrite": {
            "/api/sfs": ""
          }
        }),
      2: fallback({
        index: '/index.html',
        verbose: true
      })
    }
  }
};
