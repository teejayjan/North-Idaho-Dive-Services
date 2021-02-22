const express = require("express");
const path = require("path");
const fs = require("fs");
const { dirname } = require("path");
const bodyParser = require("body-parser")


const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("port", 3000)

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about")
})

// app.post("/", (req, res) => {
//     const info = req.body;
//     console.log(info);
//     res.redirect("/")
// })

app.listen(app.get("port"), function () {
    console.log(`Express started on localhost:${app.get("port")}; press Ctrl-C to terminate.`)
})

