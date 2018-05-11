const express = require("express"); 
const mongoose = require("mongoose")

const Article = require("../models/article-model");

const router = express.Router();


//GET THE ARTICLE 
router.get("/articles", (req,res,next)=>{
  // find gives an Array
  Article
  .find()
  .limit(5)
  .sort({createdAt: -1})
  .then((articles)=>{
    res.json(articles);
  })
  .catch((err)=>{
    next(err);
  })
})


// POST CREATE 
// create an article
// POST/api/articles
//location change
router.post("/articles", (req,res,next)=>{
  const {title, date , description, nameWritter ,location, email,imageUrl, organization, reportChange, type}= req.body;
  // const location = {
  //   coordinates: [latitude, longitude]
  // };
  Article.create ({title, date , description, nameWritter, location , email, imageUrl, organization, reportChange, type})
  .then((newArticle)=>{
    res.json(newArticle);
  })
  .catch((err)=>{
    next(err);
  })
})



// GET DETAILS 
router.get("/articles/:articleId", (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.articleId)){
    next();
    return; 
  }

  Article.findById(req.params.articleId)
  .then((article)=>{
    if(!article){
      next(); // show error if phone was not found
      return;
    }
    res.json(article)
  })
  .catch((err)=>{
    next(err)
  })
})



module.exports = router;
