import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello from the server and i am on production server | HOstinger'
    });
});

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
});