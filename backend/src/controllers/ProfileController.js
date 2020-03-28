const connection = require('../database/connection')
module.exports = {
    async index(request, response){
        const  id  = request.headers.authorization
        const incidents = await connection('incidents').where('ong_id', id).select('*').catch(function(error) { console.error(error); })
        return response.json(incidents)
        }
    }