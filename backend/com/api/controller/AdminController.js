const jwt = require('jsonwebtoken');
 const Admin = require('../models/AdminModels');
 const {AddLog}  = require('../logger.js')
 const User = require('../models/UserModels');
 const Marque = require('../models/MarqueCars');
 const Categorie = require('../models/CategorieCars');
 const Voiture_neuf = require('../models/Voiture_neuf');
 const Models = require('../models/Models_Cars');
 const Act = require('../models/actualite');
//login superAdmin
const SuperAdminLogin = async (req,res)=>{
    const{phone,password} = req.body
  const admin =  await Admin.findOne({phone, password})
        if (admin) {
            var token = null
            if (admin.is_super_admin) {
                token = jwt.sign({ _id: admin._id   , is_super_admin: admin.is_super_admin }, 'SuperAdminToken')
                console.log('super admin');
                console.log(admin.is_super_admin)
            }
            else {
                token = jwt.sign({ _id: admin._id    , is_admin: admin.is_admin }, 'TokenAdmin' )
                console.log('admin');
            }
            res.send({ admin: admin, token: token })
        
    }
 else {
     
    res.send('go to signup page')
}

}
///Add first Admin
const AddAdmin = (req,res) =>{
      
      
    const full_name = req.body.full_name;
     const phone = req.body.phone;
     const password = req.body.password;
     const email = req.body.email;
 
     const newAdmin = new Admin({full_name,phone,password,email});
     newAdmin
     .save()
     .then(() => res.json("Admin successfully added"))
     .then(()=>     AddLog("Add Admin", "info", "Add Admin")) 
     
     .catch((err) => res.status(400).json("Error :" + err));
}
// Get User
const getuser = async (req,res) =>{
    User.find({ is_valid:false}).exec((err, user) => {
      if(err){
          return res.status(500).json({
              error: err
          })
      }
  
      res.json(user)
  })
  }

///Add Model Cars
const AddMarque = (req,res) =>{
    const Marque_name = req.body.Marque_name;
    const  Description_Marque = req.body. Description_Marque;
    const Nationality_Marque = req.body.Nationality_Marque;

    const newMarque = new Marque({Marque_name,Description_Marque,Nationality_Marque });
    newMarque
    .save()
    .then(() => res.json("Marque successfully added"))
    .then(()=>     AddLog("Add Marque", "info", "Add Marque")) 
    
    .catch((err) => res.status(400).json("Error :" + err));
    

}

///Add Categorie Cars 
const AddCategorie = (req,res) =>{
    const  Categorie_name = req.body. Categorie_name;
    const  Description_Categorie = req.body. Description_Categorie;

    const newMarque = new Categorie({Categorie_name,Description_Categorie });
    newMarque
    .save()
    .then(() => res.json(" Categorie successfully Categorie"))
    .then(()=>     AddLog("Add Categorie", "info", "Add Categorie")) 
    
    .catch((err) => res.status(400).json("Error :" + err));

}
///Add Voiture_neuf 
const Add_Voiture_neuf  = (req,res) =>{

    const  Voiture_name = req.body.Voiture_name;

    const new_Voiture_neuf = new Voiture_neuf ({Voiture_name });
    new_Voiture_neuf
    .save()
    .then(() => res.json(" Voiture_neuf successfully Voiture_neuf"))
    .then(()=>     AddLog("Add Voiture_neuf", "info", "Add Voiture_neuf")) 
    
    .catch((err) => res.status(400).json("Error :" + err));

}

///Add Voiture_neuf 
const Add_Modeles  = (req,res) =>{

    const  Modele_name = req.body.Modele_name;
    const  Modele_Prix = req.body.Modele_Prix;
    const  Modele_Carburant = req.body.Modele_Carburant;
    const  Type_boite_vittesse = req.body.Type_boite_vittesse;
    const  puissance_reelle = req.body.puissance_reelle;
    const  puissance_Fiscale = req.body.puissance_Fiscale;
    const  Nomber_Portes = req.body.Nomber_Portes;
    const  Photos = req.body.Photos;
    const  Videos = req.body.Videos;
    const new_Modele =
     new Models ({  
        Modele_name,
        Modele_Prix ,
        Modele_Carburant,
        Type_boite_vittesse,
        puissance_reelle ,
        puissance_Fiscale ,
        Nomber_Portes ,
        Photos,
        Videos  });
        new_Modele
    .save()
    .then(() => res.json(" Modele successfully Modele"))
    .then(()=>     AddLog("Add Modele", "info", "Add Modele")) 
    
    .catch((err) => res.status(400).json("Error :" + err));

}
///Add Act 
const Add_Act = (req,res) =>{

    const  Title_act = req.body.Title_act;
    const  Description_act = req.body.Description_act;
    const  Photo_act = req.body.Photo_act;


    const new_Act = new Act ({Photo_act, Title_act,Description_act});
    new_Act
    .save()
    .then(() => res.json(" Actualite successfully Actualite"))
    .then(()=>     AddLog("Add Actualite", "info", "Add Actualite")) 
    
    .catch((err) => res.status(400).json("Error :" + err));

}




module.exports =  {SuperAdminLogin , AddAdmin ,getuser  , AddMarque , AddCategorie , Add_Voiture_neuf ,Add_Modeles  , Add_Act} 