// const express = require("express"); 

// const User = require("../models/User");

// const router = express.Router();



// router.get("/admin", (req,res,next)=>{
//   // if not log in or not admin
//   if(!req.user || req.user.role !== "admin"){
//     //next without error go straight to the 404 
//     next();
//     return 
//   }

// User.find()
// .then((usersFromDb)=>{
// res.locals.userList = usersFromDb;
// res.json({userInfo : req.user});
// })

// .catch((err)=>{
//   next(err)
// })
// });


// // DELETE OTHER USER 
// // PART 1 

// router.get('/admin/users/:usersId/delete', (req,res,next)=>{
//   User.findByIdAndRemove(req.params.usersId)
//   .then(()=>{
//     res.redirect('/admin/users')
//   })
//   .catch((err)=>{
//     next(err)
//   })
// })


