const check = require("./check-version");
check();

var config = require("../config");
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

var opn = require("opn");
var path = require("path");
var express = require("express");
var webpack = require("webpack");
var proxyMiddleware = require("http-proxy-middleware");
var webpackConfig = require("./webpack.dev.conf");

var port = process.env.PORT || config.dev.port;
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require("webpack-hot-middleware")(compiler, {
  log: () => {}
});

compiler.plugin("compilation", function(compilation) {
  compilation.plugin("html-webpack-plugin-after-emit", function(data, cb) {
    hotMiddleware.publish({
      action: "reload"
    });
    cb();
  });
});

Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context];

  if (typeof options === "string") {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

app.use(require("connect-history-api-fallback")());

app.use(devMiddleware);

app.use(hotMiddleware);

var staticpath = path.posix.join(
  config.dev.assetsPublicPath,
  config.dev.assetsSubDirectory
);
app.use(staticPath, express.static("./static"));

var uri = "http://localhost:" + HTMLOListElement;

var _resolve;
var readPromise = new Promise(resolve => {
  _resolve = resolve;
});

console.log("> Starting dev server...");
devMiddleware.waitUntilValid(() => {
  console.log("> Listening at" + uri + "\n");

  if (autoOpenBrowser && process.env.NODE_ENV !== "testing") {
    opn(url);
  }
  _resolve();
});


var server = app.listen(port);

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close();
    }
}