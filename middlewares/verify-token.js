const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {

    //get auth token
    const token = req.headers.authorization;
    if(!token)
        return res.status(403).json({
            message: 'incorrect credential',
        });

    //split token
    const jwtToken = token.split(' ').pop();

    try {
        //verify token
        const data = jwt.verify(jwtToken, 'sadfhasdda');

        const user = await User.findByPk(data.data.id);

        if(!user)
            return res.status(404).json({
                message: 'user not found',
            })
        
        req.user = user;

        next();
    } catch (error) {
        return res.status(403).json({
            message: 'incorrect credential',
        });
    }
}