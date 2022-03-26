const Aluno = require('../models/Aluno');

exports.validaLogin = async function(req, res) {

    const errors = [];
    const { email, password } = req.body;
    
    const user = await Aluno.findOne({ where: { email, password }});

    if(user) {
        return res.json({ msg: 'Aluno encontrado' });
    } else {
        return res.json({ error: "Credenciais Incorretas !" });
    }
}