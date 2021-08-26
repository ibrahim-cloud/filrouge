const express = require('express')
const router = express.Router() 

// const AdminController = require('../controller/AdminController')
const AdminController = require('../controller/AdminController')

// const Gadmin = require('../middleware/Gadmin')
// const admin = require('../middleware/admin')
// // const auth = require('../controller/token')
const auth = require('../controller/token')
 
// const auth = require('../controller/token')

//Login Admin
// router.post('/login',AdminController.SuperAdminLogin)
router.post('/login',AdminController.SuperAdminLogin)
router.post('/AddAdmin',(auth,AdminController.AddAdmin))
router.post('/AddMarque',(auth,AdminController.AddMarque))
router.post('/AddCategorie',(auth,AdminController.AddCategorie))
router.post('/AddVoitureNeuf',(auth,AdminController.Add_Voiture_neuf))
router.post('/AddModeles',(auth,AdminController.Add_Modeles))
router.post('/AddAct',(auth,AdminController.Add_Act))





router.get('/user',AdminController.getuser)

module.exports = router