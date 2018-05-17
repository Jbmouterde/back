const express = require("express"); 
const mongoose = require("mongoose")

const Article = require("../models/article-model");

const router = express.Router();


//GET THE ARTICLE 
router.get("/articles", (req,res,next)=>{
  // find gives an Array
  Article
  .find()
  .limit(6)
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
// UPDATE ARTICLE 
router.put("/articles/:articleId", (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.articleId)){
    next();
    return; 
  }
  const {like}= req.body;
  Article.findByIdAndUpdate(
    req.params.articleId, 
    {like},
    {runValidators : true, new: true } // run validation and "new" get the updated version
  )
  .then((updatedArticle)=>{
    if(!updatedArticle){
      next(); // show error if phone was not found
      return;
    }
    res.json(updatedArticle);
  })
  .catch((err)=>{
    next(err);
  })
});



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

// UPDATE ARTICLE 
router.put("/articles/:articleId/like", (req,res,next)=>{
  if (!mongoose.Types.ObjectId.isValid(req.params.articleId)){
    next();
    return; 
  }

  Article.findById(req.params.articleId)
    .then((article) => {
      let change;
      const hasLiked = article.likes.some(id => id.toString() === req.user._id.toString());
      
      if (hasLiked) {
        change = { $pull: { likes: req.user._id } };
      }
      else {
        change = { $push: { likes: req.user._id } };
      }

      return Article.findByIdAndUpdate(
        req.params.articleId, 
        change,
        {runValidators : true, new: true } // run validation and "new" get the updated version
      );
    })
    .then((updatedArticle)=>{
      if(!updatedArticle){
        next(); // show error if phone was not found
        return;
      }
      res.json(updatedArticle);
    })
    .catch((err)=>{
      next(err);
    })
});



module.exports = router;
