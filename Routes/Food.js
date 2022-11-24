const express = require('express');
const data = require("../Controllers/Food");

const dataRouter = express.Router()

dataRouter.route('/Food')
.get(data.FoodData)

module.exports=dataRouter;