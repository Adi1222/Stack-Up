const jwt = require('jsonwebtoken');
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator');


const signup = async (req, res) => {

    try {

        const username = req.body.username;

        const pass = req.body.password;

        const userObect = {
            username: username.toLowerCase(),
            password: pass
        };

        const existingUser = await User.findOne({ username: u.username });

        if (existingUser) 
        {
            return res.status(400).json({ message: 'Username Already Exists.' })
        }


        const u = new User(userObect);
        const savedUser = await u.save();

        if (savedUser)
        {
            const token = jwt.sign(savedUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5d' })

            const { username, id, created, profilepic } = savedUser;

            const userInfo = {
                username,
                id, 
                created, 
                profilepic
            }


            return res.json({ message: 'User Created', token, userInfo })

        }
        else
        {
            return res.json(400).json({ message: 'Cannot create your Account!' })
        }



        
    } catch(error) {

        console.error(error)
        return res.json(400).json({ message: 'Cannot create your Account!' })

    } 


} 

const login = async (req, res) => {

    try {
        
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({ username: username.toLowerCase() })

        if (!user) 
        {
            return res.status(403).json({ message: 'Invalid username or password' }) 
        }

        const match = await bcrypt.compare(password, user.password);

        if (match) 
        {
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5d' })
            
            const { username, id, created, profilepic } = savedUser;

            const userInfo = {
                username,
                id, 
                created, 
                profilepic
            }


            return res.json({ message: 'Authentication Successfull', token, userInfo })
        }
        else 
        {
            res.status(403).json({
              message: 'Wrong username or password.'
            })
        }

    } catch(error) {
        console.error(error)
        return res.json(400).json({ message: 'ERROR!' })   
    }


}

const getUsers =  async (req, res) => {

    try{

        const { sortAccording = '-created' } = req.body; // if not specified sort based on user created in descending order
        const users = await User.find().sort(sortAccording);
        res.json(users)

    } catch(error) {
        console.error(error)
        return res.status(500)
                   .json({ message: "Error!!!" })
    }

}

const getSingleUser = async (req, res) => {

    try {

        const u = await User.findById(req.params.id);
        res.json(u);

    } catch(error) {
        console.error(error)
        return res.json({ message: "Invalid user id" })
    }

}


const validateUser = [
    body('username')
        .exists()
        .trim()
        .withMessage('is required')

        .notEmpty()
        .withMessage('cannot be blank')

        .isLength({ max: 15 })
        .withMessage('must be atmost 15 characters long'),
    
    body('password')
        .exists()
        .trim()
        .withMessage('is required')

        .notEmpty()
        .withMessage('cannot be blank')

        .isLength({ min: 5 })
        .withMessage('must be atleast 5 characters long')

        .isLength({ max: 15 })
        .withMessage('must be atmost 15 characters long')
];

module.exports = {
    getUsers,
    getSingleUser,
    signup,
    login,
    validateUser
}