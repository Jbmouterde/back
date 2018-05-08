const mongoose = require('mongoose');
const Article = require('../models/article-model');

const dbName = 'server';
mongoose.connect(`mongodb://localhost/${dbName}`);

const articles =[
  {
    title : "cheese", 
    date: new Date(1910, 10, 08),
    type : "good",
    description : " c'est dfdlffrf good",
    nameWritter : " Jack",
    location : "12 rue ehne",
    email : "j@m.co",
    imageUrl : "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350",
    organization : "World Wildlife Fund",
    reportChange : "Increased rainfall",
    type : "Personal Information"
  }, 
  {
    title : "chedfdfdese", 
    date: new Date(1913, 10, 08),
    type : "goofdfdd",
    description : " c'estdsdsds dfdlffrf good",
    nameWritter : " bob",
    location : "13 rue ehne",
    email : "fd@m.co",
    imageUrl : "https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg",
    organization : "World Wildlife Fund",
    reportChange : "Increased rainfall",
    type : "Project"
  }, 
  {
    title : "cheesssse", 
    date: new Date(1910, 10, 08),
    type : "good",
    description : " c'est dfdlffrf goodsdsdd",
    nameWritter : " henri",
    location : "12 rue edfhne",
    email : "jfdfd@m.co",
    imageUrl : "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350",
    organization : "Centra Terra Viva",
    reportChange : "Decreased rainfall",
    type : "Interview"
  }

]
Article.create(articles, (err)=>{
  if (err){ throw(err)}
  console.log(`Created ${articles.length}`)
});
