const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.listen(5000, console.log("Server running on port 5000"));