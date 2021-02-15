const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.send('Hello world!');
});
// routes
// app.use('/', require('./routes/index.js'));

app.use((req, res) => {
    res.status(404);
    res.end('Page not found.');
});


app.use((err, req, res) => {
    // set locals, only providing error in development
    console.log(err);
    res.end('Error page');
});


app.listen(port, () => {
    console.log(`CS API started on port ${port}`);
});
