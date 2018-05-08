const mongoose = require('mongoose');
const Article = require('../models/article-model');

const dbName = 'server';
mongoose.connect(`mongodb://localhost/${dbName}`);

const articles =[
  {
    title : "cHuge RainFall in Alaska", 
    date: new Date(2018, 03, 08),
    description : "There is a lots of rain in Alaska right now, please help",
    nameWritter : " Jack",
    location : "12 rue ehne, Alaska",
    email : "j@m.co",
    imageUrl : "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350",
    organization : "World Wildlife Fund",
    reportChange : "Increased rainfall",
    type : "Personal Information"
  }, 
  {
    title : "People are under the water in New York", 
    date: new Date(2017, 10, 08),
    description : " There is water everywhere",
    nameWritter : " bob",
    location : "13 rue ehne",
    email : "fd@m.co",
    imageUrl : "https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg",
    organization : "World Wildlife Fund",
    reportChange : "Increased rainfall",
    type : "Project"
  }, 
  {
    title : "No more water in africa", 
    date: new Date(2017, 11, 08),
    description : "People in Africa needs to have water in order to grow some plants & foods",
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
