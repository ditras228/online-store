const {Type} = require('../models/models')
class TypeController{
    async create(req, res){
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        }catch (e){
            res.json({message: e})
        }
    }
    async getAll(req, res){
        let type = await Type.findAll()
        return res.json(type)
    }

}
module.exports = new TypeController()