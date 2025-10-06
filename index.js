const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// app.use(express.json());


app.get('/', (req, res) => {
    res.send('Home route is working!');
});

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Booking backend listening at http://localhost:${port}`);
});
