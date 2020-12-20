const express = require('express');
const app = express();

app.listen(2020, () => {
    console.log("server running");
});

app.use(express.static(__dirname+ ""));
// app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', '');

app.get('/', (req, res) => {
    res.sendFile("./html/index.html", { root: __dirname });
});
app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/index.html', (req, res) => {
    res.redirect('/');
});

app.get("/register.html", (req, res) => {
    res.sendFile("./html/register.html", { root: __dirname });
});

app.get("/admin-login.html", (req, res) => {
    res.sendFile(__dirname + "/html/admin-login.html");
});
