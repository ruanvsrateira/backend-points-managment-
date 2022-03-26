const Aluno = require('../models/Aluno');
const Point = require('../models/Point');


exports.store = async function(req, res) {
    const { nome, email, password, admin } = req.body;

    const exist = await Aluno.findOne({ where: { email } });

    if (exist) {
        return res.json({ error: "User already registered in this email" });
    }

    console.log(nome, email, admin, password);
    const user = await Aluno.create({ nome, email, password, admin });

    return res.json(user);
}

exports.getAllAlunos = async function(req, res) {
    const users = await Aluno.findAll({
        order: [
            ['id', 'DESC']
        ],
       
    });

    return res.json(users);
}

exports.deleteAluno = async function(req, res) {
    const userId = req.params.userId;

    const user = await Aluno.destroy({ where: { id: userId } });

    return res.json(user);
}

exports.getOneAluno = async function(req, res) {
    const user_id = req.params.user_id;

    const user = await Aluno.findOne({ where: { id: user_id } });

    if(user) {
        return res.json(user);
    } else {
        return res.json({error: "Aluno not finded"})
    }
}