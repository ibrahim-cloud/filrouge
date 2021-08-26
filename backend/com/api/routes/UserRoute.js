const express = require('express')
const router = express.Router() 

// const AdminController = require('../controller/AdminController')
const UserController = require('../controller/UserController')


router.route("/signup").post(UserController.AddUser) ;
router.route("/login").post(UserController.UserLogin) ;
router.route("/AddAvis").post(UserController.AddAvis) ;
router.post('/AddVO',(UserController.Add_Voiture_Occasion))




module.exports = router