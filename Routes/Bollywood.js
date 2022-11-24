const express = require('express');
const data = require("../Controllers/Bollywood");

const dataRouter = express.Router()

dataRouter.route('/Bollywood')
.get(data.BollywoodData)

module.exports=dataRouter;