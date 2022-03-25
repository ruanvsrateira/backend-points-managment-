const Aluno = require('../models/Aluno');

exports.store = async function(req, res) {
    const { nome, email, admin } = req.body;

    console.log(nome, email, admin)
    const user = await Aluno.create({ nome, email, admin });

    return res.json(user);
}

exports.getAllAlunos = async function(req, res) {
    const users = await Aluno.findAll({
        order: [
            ['id', 'DESC']
        ]
    });

    return res.json(users);
}

exports.deleteAluno = async function(req, res) {
    const userId = req.params.userId;

    const user = await Aluno.destroy({ where: { id: userId } });

    return res.json(user);
}