const { Router } = require('express');
const { getAllTypes } = require('../controllers/controllers');
const { Type } = require("../db")

const typesRoutes = Router();

typesRoutes.get("/",async (req,res) => {
try {
    const result = await getAllTypes()
    return res.status(200).send(result)
} catch (error) {
    return res.status(400).send(error.message)
}
})

typesRoutes.post("/", async (req,res) => {
    try {
        const data = req.body;
        const types = await Type.bulkCreate(data) 
        return res.status(201).send(types)
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

module.exports = typesRoutes;