//const Callbreak = require('../models/callbreak');
module.exports.home = (req,res)=>{
    return res.render("home", {
        title: "Call Break Stats"
      });
    } 
