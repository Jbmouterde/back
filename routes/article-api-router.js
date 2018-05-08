const express = require("express"); 
const mongoose = require("mongoose")

const Article = require("../models/article-model");

const router = express.Router();


//GET THE ARTICLE 
router.get("/articles", (req,res,next)=>{
  // find gives an Array
  Article
  .find()
  .limit(20)
  .sort({createdAt: -1})
  .then((articles)=>{
    res.json(articles);
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;
