const express = require("express");
require("./db/conn");
const User=require("./models/usermassage")
const hbs = require("hbs")
const path = require("path");
const app = express();
const { registerPartials } = require("hbs");
const port = process.env.PORT || 8000;

//set the path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
//midlewere
app.use("/css",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/jq",express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use("/js",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.set("view engine", "hbs");
// app.set("views", partialpath);
app.set("views", templatepath);
hbs.registerPartials(partialpath);

// routing   // get request
app.get("/", (req, res) => {
  res.render('index');
});
app.get("/contact", (req, res) => {
  res.render('contact');
});

app.post("/contact",async(req,res)=>{
  try {
    const userData =new User(req.body);
    await userData.save();
    res.status(201).render("index");
   
  } catch (error) {
    res.status(500).send(error);
  }
})

//server create
app.listen(port, () => {
  console.log(`server is running on port no localhost:${port}`);
});
