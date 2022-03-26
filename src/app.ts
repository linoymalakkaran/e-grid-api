import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos";

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`App running => http://localhost:%d`, port);
});
