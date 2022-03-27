import express from "express";
import bodyParser from "body-parser";

import eGridRoutes from "./routes/egrid-routes";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));
app.use("/api", eGridRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`App running => http://localhost:%d`, port);
});
