const express = require("express");
const app = express();
const routerApi = require("./src/routes"); //Import router handler
const port = process.env.PORT || 3000;

// Middleware JSON
app.use(express.json());

// Routes
routerApi(app);

app.listen(port, () => console.log(`Running in port ${port}`));