const fs = require('fs');
const { isNull } = require('util');

o ={
    name: null, 
    id: "", 
    email: "", 
    Phone: "", 
    ComapnyID: ""
}

const contacts = [];

function read(callback) {
    callback(null, contacts);
}

function create(contact, callback) {
    if (contacts.find(c => c.id === contact.id)) {
        return callback('contact already exist');
    }

    contacts.push(contact);
    callback(null, contact);
}

function update(contact, callback) {
    const _contact = contacts.find(c => c.id === contact.id);
    let newcontact = Object.assign(_contact, contact);
    contacts.splice(contacts.indexOf(_contact), 1, newcontact);

    callback(null, true);
}

function remove(contactid, callback) {
    const contact = contacts.find(c => c.id === contactid);
    phones.splice(contacts.indexOf(contact), 1);
    callback(null, true);
}

module.exports = {
    read: read,
    create: create,
    update: update,
    remove: remove
}