const Aluno = require('../models/Aluno');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

exports.validaLogin = async function(req, res) {

    const { email, password } = req.body;

    let user = await Aluno.findOne({ where: { email } });
    

    if(user) {
        let passwordByUserForCompare = user.password; 
        
        const passwordIsValid = await bcrypt.compareSync(password, passwordByUserForCompare);

        if (passwordIsValid) {
            const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, { expiresIn: 982333 });

            req.session.token = token;
            req.session.user = user;


            return res.json({ msg: 'Aluno encontrado', token: req.session.token, user: user  });
        } else {
            return res.json({ error: "Credenciais Incorretas !" });
        }   

    } else {
        return res.json({ error: "Email or password incorrect" });
    }

}

exports.logout = async function(req, res) {
    try { 
        await req.session.destroy();
        
    } catch(err) {
        console.log(err);

        return res.json({ error: "erro ao destroir a sessão " })
    }

    return res.json({ msg: "logout successfully" });
}