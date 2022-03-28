const Aluno = require('../models/Aluno');
const Point = require('../models/Point');
const bcrypt = require('bcrypt');


exports.store = async function(req, res) {
    const { nome, email, password, admin } = req.body;
    const exist = await Aluno.findOne({ where: { email } });

    if (exist) {
        return res.json({ error: "User already registered in this email" });
    };

    const salt = bcrypt.genSaltSync(10);

    console.log(nome, email, admin, password);
    const user = await Aluno.create({ nome, email, password: bcrypt.hashSync(password, salt), admin, total_points: 0 });

    return res.json(user);
}

exports.getAllAlunos = async function(req, res) {
    const users = await Aluno.findAll({
        where: { admin: false },
        order: [
            ['total_points', 'DESC']
        ],
    });

    return res.json(users);
}

exports.deleteAluno = async function(req, res) {
    const user_id = req.params.user_id;

    const user = await Aluno.destroy({ where: { id: user_id } });

    if (user) {
        res.json({ msg: "user detroied" })
    } else { 
        res.json({ error: "User not finded by this id" });
    }
}

exports.getOneAluno = async function(req, res) {
    const user_id = req.params.user_id;

    const user = await Aluno.findOne({ where: { id: user_id } });

    if(user) {
        return res.json(user);
    } else {
        return res.json({error: "Aluno not finded"})
    };
};

exports.userLoggedIsAdmin = async function(req, res) {

    userLogged = req.session.user;
    userLogged.admin ? res.json({ isAdmin: true }) : res.json({ isAdmin: false });

};

exports.userIsLogged = async function(req, res) {

    const userIsLogged = req.session.user;

    userIsLogged ? res.json({ userIsLogged: true }) : res.json({ userIsLogged: false });

};

exports.getUsersAdmin = async function(req, res) {
    const users = await Aluno.findAll({ where: { admin: true }});

    if(users) {
        
        return res.json(users);

    } else {
        return res.json({ error: "Not users finded" });
    }
};