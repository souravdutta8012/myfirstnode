const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.end('Api Gateway is healthy: 200')
});

app.get("/list_movies", (req, res) => {
    const data = [
        {
            "id": 1,
            "title": "Star girl"
        },
        {
            "id": 2,
            "title": "Five feet apart"
        },
        {
            "id": 3,
            "title": "Titanic"
        },
        {
            "id": 4,
            "title": "Mr.Bean"
        }
    ]
    res.send(data);
});

app.post('/user', (req, res) => {
    let body = req.body;
    console.log(body);
    res.send(body);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
