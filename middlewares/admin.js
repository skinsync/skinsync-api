

module.exports = async (req, res, next) => {

    //verify admin
    const { user } = req;
    if(user.role !== 'admin')
        return res.status(403).json({
            message: 'unauthorized',
        });
    next();
}