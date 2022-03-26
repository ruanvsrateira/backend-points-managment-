const Point = require("../models/Point");
const Aluno = require('../models/Aluno');

exports.store = async function(req, res) {
    const { points, motivo } = req.body;
    const { user_id } = req.params

    const point = await Point.create({
        points, motivo, user_id
    });

    console.log(point);
}
