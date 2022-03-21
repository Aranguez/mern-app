const express = require("express");
const path = require("path");

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../../webpack.config");

const app = express();
const port = process.env.ENV_PORT || 8000;
const apiRoutes = require("./routes/api.js");

app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/tasks", apiRoutes);

app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
