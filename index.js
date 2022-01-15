const express = require("express");
const app = express();
const routerApi = require("./src/routes");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Custom Middlewares
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./src/middlewares/error.handler");
app.use(express.json());

// CORS
const whiteList = ["http://localhost:8080", "https://ppjcode.com"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed"));
    }
  },
};
app.use(cors());

// Define routing
routerApi(app);

// Middleware Handler Error
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Running in port ${port}`));
