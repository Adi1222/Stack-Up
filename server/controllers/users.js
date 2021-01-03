const User = require('../models/user')

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


module.exports = {
    getUsers,
    getSingleUser
}