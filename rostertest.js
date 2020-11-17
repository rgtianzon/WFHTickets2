const mongoose = require('mongoose');
const Roster = require('./models/roster');
const fetch = require("node-fetch");

mongoose.connect('mongodb+srv://admin:TriskelioN12@cluster0.o9j4k.mongodb.net/wfht?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection open!');
    })
    .catch(() => {
    console.log('error');
    })

fetch('http://122.55.177.109/Extend/toJSON.php')
.then(res => {
    // console.log('connected', res)
    return res.json()
})
.then (data => {
    for (i=0; i<data.length; i++) {
        let newRoster = new Roster({
            empID: data[i].employee_ID, 
            firstName: data[i].first_name,
            lastName: data[i].last_name,
            fullName: data[i].first_name + " " + data[i].last_name,
            email: data[i].corporate_email,
            password: data[i].password,
            manEmail: data[i].manager_email,
            Account: data[i].subdepartment_name
        })
        // console.log(newRoster)
        newRoster.save()
        // console.log(Roster.length)
    }
})
.catch(err => {
    console.log('error', err)
})