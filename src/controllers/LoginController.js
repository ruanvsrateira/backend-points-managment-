const Aluno = require('../models/Aluno');

const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.validaLogin = async function(req, res) {

    const { email, password } = req.body;
    
    const user = await Aluno.findOne({ where: { email, password }});

    if(user) {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, { expiresIn: 982333 });

        req.session.token = token;
        req.session.user = user;


        return res.json({ msg: 'Aluno encontrado', token: req.session.token, user });

        
    } else {
        return res.json({ error: "Credenciais Incorretas !" });
    }
}

exports.logout = async function(req, res) {
    try { 

        await req.session.destroy();
        
    } catch(err) {
        console.log(err);

        return res.json({ error: "erro ao destroir a sessão " })
    }
    
}