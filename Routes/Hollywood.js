const express = require('express');
const data = require("../Controllers/Hollywood");

const dataRouter = express.Router()

dataRouter.route('/Hollywood')
.get(data.HollywoodData)

module.exports=dataRouter;