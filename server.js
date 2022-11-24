const express = require('express');
const app = express();
const data1 = require("./Routes/Bollywood")
const data2 = require("./Routes/Food")
const data3 = require("./Routes/Hollywood")
const data4 = require("./Routes/Fitness")
const data5 = require("./Routes/Technology")


app.use('/home',data1, data2, data3, data4, data5)
app.listen(8000,()=>{
    console.log("server is running");
})