
// createuser.js

const express = require('express');
const router = express.Router();
const User = require('../Models/Users');
const { body, validationResult } = require

('express-validator');
const jwtSecret="Secret_KEy :) =>##"
const jwt=require( 'jsonwebtoken' );
const bcrypt=require("bcryptjs")
router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const salt = await bcrypt.genSalt( 10); // 10 is the salt round
  const setPassword=await bcrypt.hash(req.body.password,salt)
    try {
        await User.create({
            name: req.body.name,
            password: setPassword,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while creating the user." });
    }
});

router.post("/loginuser", [
    body('email').isEmail(),

    body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    let email = req.body.email;
    try {
        let userdata = await User.findOne({email} );
        if (!userdata) {
            return res.status(400).json({ errors: "Try Logging with correct credential " })
        }
        const pwdCompare=await bcrypt.compare(req.body.password,userdata.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Try Logging with correct credential " })
        }
        const data={
            user:{
                id:userdata.id,
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({ success: true,authToken:authToken })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while creating the user." });
    }
});

module.exports = router;
