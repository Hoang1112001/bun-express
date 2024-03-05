import express from "express";
// # docker build --pull -t bun-express .
// # docker run -d -p 8080:8080 bun-express

const app = express();
const port = 8080;
const cors = require("cors");
const allowlist = ['https://h5.zdn.vn', 'zbrowser://h5.zdn.vn', "http://locahost:3000"]
const corsOptionsDelegate = function (req: any, callback: any) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
const indexRouter = require("./routes/index");
const zaloRouter = require("./routes/zalo");

app.use(express.json());
app.use(cors(corsOptionsDelegate))
app.use(express.urlencoded({ extended: false }));
app.use('/',indexRouter)
app.use('/zalo',zaloRouter)
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});