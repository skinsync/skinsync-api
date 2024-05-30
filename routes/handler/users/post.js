const { User } = require('../../../models');

//create data user
module.exports = async (req, res) => {

    const body = req.body;

    if ( !body.name || !body.email || !body.password ) 
        return res.status(400).json({ message: "Name, email, and password must be provided" });

    const user = await User.create(body);
    return res.json(user);
};