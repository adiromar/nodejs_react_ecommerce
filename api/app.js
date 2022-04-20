const express = require("express");
const routes = require("./routes/");
const app = express();
const port = 9001;

// load mongoose at start
require("./service/mongoose");
console.log("hello world");

// for all endpoints with api
app.use('/api', routes)


// 404 not found case
app.use((req, res, next) => {
    next({
        status: 404,
        msg: "Not found "
    });
})

// error handling
app.use((err, req, res, next) => {
    let code = err?.status || 500;
    let msg = err?.msg || "Error";
    res.status(code).json({
        result: req.body,
        status: false,
        msg: msg
    })
})

app.listen(port, 'localhost', (err) => {
    if(err){
        console.log("Error while listening to port");
    }else{
        console.log(`server is listening to port: ${port}`);
        console.log("press ctrl + c to stop server listen");
    }
});