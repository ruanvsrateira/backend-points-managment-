const Point = require("../models/Point");
const Aluno = require('../models/Aluno');

exports.store = async function(req, res) {
    const { points, motivo } = req.body;
    const { user_id } = req.params

    const user = await Aluno.findOne({ where: { id: user_id } });

    if (user) {
        const point = await Point.create({
            points, motivo, user_id
        });
    
        let oldTotalPoints = await Aluno.findOne({ where: { id: user_id } });
        oldTotalPoints = oldTotalPoints.total_points;
    
        const total_points = oldTotalPoints + points;
    
        await user.update({ total_points });

        return res.json({ total_points: total_points });
    } else {
        return res.json({ error: "User is not exist" });    
    }
};

exports.getPointsUser = async function(req, res) {
    const { user_id } = req.params;

    const points = await Point.findAll({ 
        where: { user_id },
        order: [
            ['points', 'DESC']
        ]
    });

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

    return res.json(points);
};

exports.editPoints = async function(req, res) {
    const { point_id } = req.params;
    const { motivo, points } = req.body;

    const point = await Point.update({ motivo, points }, { where: { id: point_id } });

    res.json(point);
};

exports.deletePoint = async function(req, res) {
    const { point_id } = req.params;

    const point = await Point.findOne({ where: { id: point_id } });
    point.destroy();

    return res.json({ pontoremovido: point });
}