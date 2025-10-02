const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Home route is working!');
});

app.listen(port, () => {
    console.log(`Booking backend listening at http://localhost:${port}`);
});
