const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Home page working");
});

app.get("/twitter", (req, res) => {
    res.send("Twitter page working");
});
app.get("/utube", (req, res) => {
    res.send("Twitter page working");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
