const express = require('express');
const bodyParser = require('body-parser');

// my modules imports
const contactDb = require('./contact.db');

// configurations
const PORT = 14700;
const app = express();
app.use(bodyParser.json());


app.get('/contact', function (req, res) {
    contactDb.read(function (err, contactsData) {
        if (err) return res.status(500).send();

        res.json(contactsData);
    });
});

app.post('/contact', function (req, res) {
    const contact = req.body;
    contactDb.create(contact, function (err, contactData) {
        if (err) return res.status(500).send(err);

        res.status(201).json(contactData);
    });
});

app.put('/contact', function (req, res) {
    const contact = req.body;
    contactDb.update(contact, function (err, success) {
        if (err) return res.status(500).send();

        res.status(200).json(success);
    });
});

app.delete('/contact', function (req, res) {
    const { contact_id } = req.query;
    phoneDb.remove(contact_id, function (err, data) {
        if (err) return res.status(500).send();

        res.status(204).send();
    });
});

app.listen(PORT, () => console.log(`server started at port ${PORT}`));