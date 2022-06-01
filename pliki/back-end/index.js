require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const studentRouter = require('./app/router/studentRouter');
const studentApi = require('./app/api/studentApi')

const config = {
    origin: 'http://' + process.env.DB_HOST
}

// console.log(config.origin);
app.use(express.json());
app.use(cors());

app.use('/student', studentRouter)
app.use('/api/student',studentApi)


app.get('/', cors(config), function (req, res) {
    res.status(219).json('witaj')
})
app.listen(process.env.PORT, function () {
    console.log(`Serwer na porcie ${process.env.PORT} działą poprawnie`);
})