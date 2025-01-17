const User = require('../models').users

exports.CreateUser = async (req, res) => {
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

exports.UpdateUser = async (req, res) => {
    try {
        const { user_id, username, email, password } = req.body
        if (!user_id) return res.json({ status: 404, msg: `Provide a user id` })

        const user = await User.findOne({ where: { id: user_id } })
        if (!user) return res.json({ status: 404, msg: 'Account not found' })

        if (username) {
            user.username = username
        }
        if (email) {
            user.email = email
        }
        if (password) {
            user.password = password
        }
        await user.save()

        return res.json({ status: 200, msg: `Account updated successfully` })
    } catch (error) {
        return res.json({ status: 500, msg: error.message })
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        const { user_id } = req.body
        if (!user_id) return res.json({ status: 404, msg: `Provide a user id` })

        const user = await User.findOne({ where: { id: user_id } })
        if (!user) return res.json({ status: 404, msg: 'Account not found' })
        await user.destroy()

        return res.json({ status: 200, msg: `Account deleted successfully` })
    } catch (error) {
        return res.json({ status: 500, msg: error.message })
    }
}