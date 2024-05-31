const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
const { User } = require('../../../models');
const { compareSync } = require('bcrypt');

module.exports = async (req, res) => {
    
    const { body } = req;

    //validasi user input
    if(!body.email || !body.password)
        return res.status(400).json({
            message: 'email and password mush be provided'
        });

    //cek email
    const user = await User.findOne({
        where: { 
            email: body.email,
        },
    });

    if(!user) 
        return res.status(404).json({
            message: 'email not found',
        });

    //cek password correct
    const isPaswordCorrect = compareSync(body.password, user.password);

    if(!isPaswordCorrect) 
        return res.status(400).json({
            message: 'wrong password',
        });

    const data = {
        id: user.id,
        name: user.name,
        email: user.email,
    };

    const token = jwt.sign({data}, 'sadfhasdda', {
        expiresIn: '1d',
    });
    
    return res.json({
        token,
    });
}