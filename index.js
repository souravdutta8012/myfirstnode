const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
