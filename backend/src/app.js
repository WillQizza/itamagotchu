const express = require("express");
const { PORT } = require("./config");

const app = express();

app.listen(PORT, () => console.log(`Backend server is up and running on port ${PORT}`));