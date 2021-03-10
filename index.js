const express = require('express');
const bodyParser = require('body-parser');

// my modules imports
const contactDb = require('./contact.db');
const companyDb = require('./company.db');

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

app.get('/company', function (req, res) {
    companyDb.read(function (err, companyData) {
        if (err) return res.status(500).send();

        res.json(companyData);
    });
});

app.post('/company', function (req, res) {
    const company = req.body;
    companyDb.create(company, function (err, companyData) {
        if (err) return res.status(500).send(err);

        res.status(201).json(companyData);
    });
});

app.put('/company', function (req, res) {
    const company = req.body;
    companyDb.update(company, function (err, success) {
        if (err) return res.status(500).send();

        res.status(200).json(success);
    });
});

app.delete('/company', function (req, res) {
    const { company_id } = req.query;
    companyDb.remove(company_id, function (err, data) {
        if (err) return res.status(500).send();

        res.status(204).send();
    });
});



app.listen(PORT, () => console.log(`server started at port ${PORT}`));