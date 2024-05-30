const { User } = require('../../../models');

//get data all users
module.exports = async (req, res) => {
    const users = await User.findAll({
        attributes: { 
            exclude: ['password'] 
        },
    });
    return res.json(users);
};