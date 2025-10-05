const cors = require('cors');
const dotenv = require('dotenv');
const http = require("node:http");
const express = require('express');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '256mb'}));

app.get('/', (_, res) => {

    const date = new Date()

    const day = date.getDate();
    const month = date.getMonth()
    const year = date.getFullYear();

    const payload = {
        app: '${{ values.app_name }}',
        owner: '${{ values.app_owner }}',
        date: `${day}-${month}-${year}`,
        version: '1.0'
    }

    res.status(200).send(payload)
})

app.get('/api/v1/health', (_, res) => {
    res.status(200).send({status: 'healthy'})
})

server.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
})