const express = require ('express');
const app = express();
const port = 8000;
const ejs = require("ejs");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const db = require ('./config/mongoose');
const sassMiddleware = require("node-sass-middleware");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
    sassMiddleware({
      src: "./assets/scss",
      dest: "./assets/css",
      debug: true,
      outputStyle: "extended",
      prefix: "/css",
    })
  );
app.use(expressLayouts);
app.use(express.static("./assets"));
app.set("layout extractStyles", true),
app.set("layout extractScripts", true),
app.use(express.urlencoded());

app.use("/",require('./routes'));
app.use("*", function (req,res){
    res.send("<h2> Something Went Wrong !! </h2>");
}); 

app.listen(port,function(err){
    if(err){
        console.log("Error in Running Server",err)
        return;
    }
else{
        console.log("Server is up and Running on Port:",port);
    }
})
