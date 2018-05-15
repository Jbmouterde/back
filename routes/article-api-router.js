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
  const {title, date , description, nameWritter , email,imageUrl,coordinates, organization, species, type, danger,descriptif}= req.body;
  const location = {
    type: 'Point',
    coordinates
  };
  Article.create ({title, date , description, nameWritter, location , email, imageUrl, organization, species, type, danger,descriptif})
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

// DELETE 
router.delete("/articles/:articleId", (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.articleId)){
    next();
    return; 
  }
Article.findByIdAndRemove(req.params.articleId)
.then((removeArticle)=>{
  if(!removeArticle){
    next(); // 
    return;
  }
  res.json(removeArticle);
})
.catch((err)=>{
  next(err);
})
});


module.exports = router;
