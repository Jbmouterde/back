const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String }, 
  date: { type: Date }, 
  description: { type: String },
  nameWritter: { type: String }, 
  //GOOGLE MAP INTEGRATION
  location: { type: String }, 
  email: String,
  imageUrl : {type : String}, 
  organization: { 
    type: String,
    enum : ["World Wildlife Fund","Centra Terra Viva","Giz","World Ressource institute","Other"]
  },
  reportChange: { 
    type: String,
    enum : ["Increased rainfall","Decreased rainfall","Changes in timing of seasons","Storms","Loss of water source", "Wildlfires", "none"]
  },
  type: { 
    type: String,
    enum : ["Personal Information","Interview","Project","Story","Publication"]
  },
},
{
  timestamps : true
}
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
