const express = require("express");
const mongoose = require("mongoose");
const Property = require("../models/property");

exports.propertyForm = async(req,res)=>{
    res.render("addProperty");
};

exports.delPropertyPage = async (req,res)=>{
    Property.find({}, (err, property)=>{
      if(err)
        res.send(err);
      else{ 
          console.log(property);
          res.render("delProperty.ejs",{
          property
          });
      }
    });
}

exports.addProperty = async(req,res)=>{
    const {name,size,description}=req.body;
    const prop = new Property({
        name:name,
        size:size,
        description:description
    });

    await prop.save((err)=>{
        if(err)
            console.log(err);
        else 
            console.log("property added");
    });
    console.log(prop);
    res.redirect("/");
};

module.exports.delProperty = async (req,res) => {
    //const id = 
    console.log(" welcome");
    Property.deleteOne({_id:req.params.id}, function(err){
        if(err){
            res.send(err);
        }
        else{
            res.redirect("/");
        }
    });

};