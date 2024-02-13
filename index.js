const exp = require("express");
const app = exp();
const path = require("path");


app.listen(8080, (req,res)=>{
    console.log("port started")
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(exp.static(path.join(__dirname, "/public")));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.get("/collage", (req,res) => {
    res.render("collage.ejs");
})

app.get("/carousel", (req,res) => {
    res.render("carousel.ejs");
})

app.get("/ss", (req,res) => {
    res.render("ss.ejs");
})