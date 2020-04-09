const express = require('express');
const app = express();
// const cron = require('node-cron');
const server = require("http").Server(app)
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser') 
const cors = require('cors');

require('./db/index');
const name_collection_1 = "blocks";

// const indexS = require('./db/models/indexs/indexsSchema');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("Origin") || '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(require('./routes/routes')); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()) 

app.get('/', async (req, res) =>{
    return res.status(200).json({ successes: true})
});

app.post('/', async (req, res) => {

});

const port = process.env.PORT || 8000; 
server.listen(port, async () => { console.log("Server is up port: " + port); });