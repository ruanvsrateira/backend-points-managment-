const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.session.token;

    token ? next() : res.json({ error: "token is not provided" });
};

