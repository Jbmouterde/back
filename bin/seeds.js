const mongoose = require('mongoose');
const Article = require('../models/article-model');

const dbName = 'server';
mongoose.connect(`mongodb://localhost/${dbName}`);

const articles =[
  {
    title : "cheese", 
    date : "good",
    type : "good",
    email : "j@m.co"
  }, 
  {
    title : "chedfdfdese", 
    date : "gofdfdod",
    type : "goofdfdd",
    email : "fd@m.co"
  }, 
  {
    title : "cheesssse", 
    date : "good",
    type : "good",
    email : "jfdfd@m.co"
  }

]
Article.create(articles, (err)=>{
  if (err){ throw(err)}
  console.log(`Created ${articles.length}`)
});
