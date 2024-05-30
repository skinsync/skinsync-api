const bcrypt = require('bcrypt')
const { User } = require('../../../models');
const { where } = require('sequelize');

module.exports = async (req, res) => {

    const { body } = req;

    //validasi user input
    if(!body.name || !body.email || !body.password) 
        return res.status(400).json({
            message: "name, email, and password must be provided",
        });
    
    //cek email have been used
    const isEmailUsed = await User.findOne({
        where: {
            email: body.email,
        },
    });

    if(isEmailUsed) {
        return res.status(400).json({
            message: 'email have been used',
        });
    }

    //encryp password
    const password = bcrypt.hashSync(body.password, 10);

    const user = await User.create({
        name: body.name,
        email: body.email,
        password,
    });

    return res.json({
        id: user.id,
        name: user.name,
        email: user.email,
    });
}