const User = require('../models').users

exports.CreateUsers = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) return res.json({ status: 404, msg: `Enter your username, email and password` })

        await User.create({
            username: username,
            email: email,
            password: password
        })

        return res.json({ status: 200, msg: `Account created successfully` })
    } catch (error) {
        return res.json({ status: 500, msg: error.message })
    }
}

exports.GetAllUsers = async (req, res) => {
    try {
        const allusers = await User.findAll({})

        // //get user profile or the particular user
        // const user = await User.findOne({ where: { id: id } })

        return res.json({ status: 200, msg: allusers })
    } catch (error) {
        return res.json({ status: 500, msg: error.message })
    }
}