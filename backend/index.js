const express = require("express");
const registerRouter = require("./router");
const cors = require("cors");

const app = express();
app.use(cors());
registerRouter(app);

app.listen(5000, console.log("服务已经启动"));
