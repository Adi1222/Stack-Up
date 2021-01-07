require('dotenv').config();

const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]


    if (!token) 
    {
        return res.status(401)
                  .json({ message: 'Authenktication invalid.' })
    }


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {


        if (err) {
            console.error(err);

            return res.status(403)
                       .json({ message: 'Invalid Token' })
        }


        req.user = user;

        next();
        

    })


}

