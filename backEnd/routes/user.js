 const router = require("express").Router();  
 const User = require("../models/User");

 // REGISTRATION
 router.post("/register", async (req, res) => {
     const emailExists = await User.findOne({
         email: req.body.email
     });
     if (emailExists) {
         return res.status(400).send("Email is already exists");
     }
     const user = new User(
         {
             name: req.body.name,
             email: req.body.email,
             password: req.body.password,
             phone: req.body.phone,
             city: req.body.city,
             country: req.body.country
         }
     );
     try {
         const savedUser = await user.save();
         res.json(savedUser);
     } catch (error) {
         res.status(400).send({message: error});
     }
 });

 // LOGIN 
 router.post("/login", async (req, res) => {
    const findUser = await User.findOne({
        email: req.body.email
    });
    if (!findUser) {
        return res.send("Email is invalid");
    }
    const checkPassword = await req.body.password.match(findUser.password);
    if (!checkPassword) {
        return res.status(400).send("Incorrect password");
    }
    res.send("Welcome, you are now logged in");
 });

 // UPDATE IN USER PROFILE
 router.put("/update", async(req, res) => {
     const newData = new User({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         phone: req.body.phone,
         city: req.body.city,
         country: req.body.country
     });
     try {
         const updatedUserData = await newData.save();
         res.send("Your pofile is updated");
     } catch (error) {
         res.status(400).send("Error. Please try again latter");
     }
 });


 module.exports = router;