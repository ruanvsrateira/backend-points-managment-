
exports.adminVerify = async function(req, res, next) {

    const userLogged = req.session.user;

    userLogged.admin ? next() : res.json({ error: "user is not admin" });

};