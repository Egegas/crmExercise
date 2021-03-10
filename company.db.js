const fs = require('fs');
const { isNull } = require('util');

o ={
    id: "", 
    name: "", 
    country: "", 
}




const companys = [];

function read(callback) {
    callback(null, companys);
}

function create(company, callback) {
    if (companys.find(co => co.id === company.id)) {
        return callback('contact already exist');
    }

    companys.push(company);
    callback(null, company);
}

function update(company, callback) {
    const _company = companys.find(co => co.id === company.id);
    let newcompany = Object.assign(_company, company);
    companys.splice(companys.indexOf(_company), 1, newcompany);

    callback(null, true);
}

function remove(companyid, callback) {
    const company = companys.find(co => co.id === companyid);
    companys.splice(contacts.indexOf(company), 1);
    callback(null, true);
}

module.exports = {
    read: read,
    create: create,
    update: update,
    remove: remove
}