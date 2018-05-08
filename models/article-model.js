const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  date: String,
  type: String,
  email: String,
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
