const express = require('express');
const data = require("../Controllers/Technology");

const dataRouter = express.Router()

dataRouter.route('/Technology')
.get(data.TechnologyData)

module.exports=dataRouter;