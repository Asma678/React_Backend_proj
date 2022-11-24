const express = require('express');
const data = require("../Controllers/Fitness");

const dataRouter = express.Router()

dataRouter.route('/Fitness')
.get(data.FitnessData)

module.exports=dataRouter;