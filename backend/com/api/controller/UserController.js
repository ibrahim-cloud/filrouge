



const User = require("../models/UserModels");
const {AddLog}  = require('../logger.js')
const jwt = require('jsonwebtoken');
const Avis = require("../models/Avis");
const Occasion = require("../models/Voiture_Occasion");



///ajouter User
const AddUser = (req,res) =>{
    const full_name = req.body.full_name;
    const phone = req.body.phone;
    const age = req.body.age;
    const password = req.body.password;
    const email = req.body.email;
 


    const newUser = new User({full_name,phone,age,password,email});
    newUser
    .save()
    .then(() => res.json("User successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
}

/// Login User
const UserLogin = async (req,res)=>{
    const{phone,password} = req.body
   const Users= await  User.findOne({phone, password}, (err,  User) => {
     
         
             if(err || ! User || ! User. is_valid ){
                 console.log('error')
                return res.status(400).json({
                    error : " User not found with this email, Please Singup" + err
                })

             }
  else{
      let token = jwt.sign({ _id: User._id   }, 'secretkey')
        res.send({  User:  User ,token:token})  
        AddLog("Login  User", "info", "Login  User") 
       }

     
     

          });
 } 

 ///ajouter Avis
 const AddAvis = (req,res) =>{
 const Title_Avis = req.body.Title_Avis;
 const Description_Avis = req.body.Description_Avis;


 const newAvis = new Avis({Title_Avis,Description_Avis});
 newAvis
 .save()
 .then(() => res.json("Avis successfully added"))
 .catch((err) => res.status(400).json("Error :" + err));

 }
 

    ///Add Voiture_neuf 
const Add_Voiture_Occasion  = (req,res) =>{

    const  Modele_name = req.body.Modele_name;
    const  Modele_Prix = req.body.Modele_Prix;
    const  Modele_Carburant = req.body.Modele_Carburant;
    const  Type_boite_vittesse = req.body.Type_boite_vittesse;
    const  puissance_reelle = req.body.puissance_reelle;
    const  puissance_Fiscale = req.body.puissance_Fiscale;
    const  Nomber_Portes = req.body.Nomber_Portes;
    const  Photos = req.body.Photos;
    const new_Voiture_Occasion  =
     new Occasion ({  
        Modele_name,
        Modele_Prix ,
        Modele_Carburant,
        Type_boite_vittesse,
        puissance_reelle ,
        puissance_Fiscale ,
        Nomber_Portes ,
        Photos
          });
        new_Voiture_Occasion 
    .save()
    .then(() => res.json(" Voiture_Occasion  successfully Modele"))
    .then(()=>     AddLog("Add Voiture_Occasion ", "info", "Add Voiture_Occasion ")) 
    
    .catch((err) => res.status(400).json("Error :" + err));

}







module.exports =  {AddUser,UserLogin , AddAvis , Add_Voiture_Occasion} 