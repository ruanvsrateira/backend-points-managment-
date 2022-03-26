const Point = require("../models/Point");
const Aluno = require('../models/Aluno');

exports.store = async function(req, res) {
    const { points, motivo } = req.body;
    const { user_id } = req.params

    const point = await Point.create({
        points, motivo, user_id
    });

    console.log(point);
};

exports.getPointsUser = async function(req, res) {
    const { user_id } = req.params;

    const points = await Point.findAll({ where: { user_id } });

    if (Object.keys(points).length) {
        return res.json(points);
    } else {
        return res.json({ msg: "This user not contains points or user not exist" })
    }
    
};

exports.getAllPoints = async function(req, res) {
    const points = await Point.findAll({
        order: [
            ['points', 'DESC']
        ],

        include: [{
            model: Aluno,
            attributes: ["nome"]
        }]
    });

    return res.json(Object.points);
};

exports.editPoints = async function(req, res) {
    const { point_id } = req.params;
    const { motivo, points } = req.body;

    const point = await Point.update({ motivo, points }, { where: { id: point_id } });

    res.json(point);
}