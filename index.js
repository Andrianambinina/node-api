const express = require('express');
const app = express();
require("./models/config");
const postRoutes = require("./controllers/postsController");

app.use("/", postRoutes);

app.listen(5500, () => console.log('Server started: 5500'));