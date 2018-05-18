const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required : true }, 
  date: { type: Date }, 
  description: { type: String, required : true },
  descriptif: { type: String, required : true },
  nameWritter: { type: String ,required : true }, 
  //GOOGLE MAP INTEGRATION
  location:
  //  {type :String}
  {
    type: { type: String },
    coordinates: [
      { type: Number }
    ]
  }, 
  likes: {
    type: Array,
    default: []
  },
  email: {type : String, required : true},
  imageUrl : {type : String, required : true}, 
  organization: { 
    type: String,
    enum : ["World Wildlife Fund","Centra Terra Viva","Giz","World Ressource institute","Other"]
  },
  species: { 
    type: String,
    enum : ["Mammals","Reptiles","Birds","Insects","Aquatic Animals", "Other"]
  },
  type: { 
    type: String,
    enum : ["Personal Information","Interview","Project","Story","Publication"]
  },
  danger: { 
    type: String,
    enum : ["In Danger","Real Danger","Almost Extinct"]
  },
},
{
  timestamps : true
}
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
