const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Property = require("./models/property");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://abhishekpal463:Abhipal123@cluster0-wlpqz.mongodb.net/ProductDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.set('view engine', 'ejs');
app.use(express.static("public"));

const adminRouter = require("./routes/admin");
 
app.get("/", async(req,res)=>{

    Property.find({}, (err, property)=>{
      if(err)
        res.send(err);
      else{ 
          console.log(property);
          res.render("index.ejs",{
          property
          });
      }
    });
});

app.use("/admin",adminRouter);

app.listen(3000,()=>{
    console.log("Server Started");
});
