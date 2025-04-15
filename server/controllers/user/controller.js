const user = require("../../models/user/userModel")

async function createUser(req, res)
{
    try {
        const { name, email, intrest } = req.body;
        const newUser =  user.create({
            name,
            email,
            intrest
        })
        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }


}


module.exports ={
    createUser
}