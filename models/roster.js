const mongoose = require('mongoose');

const rosterSchema = new mongoose.Schema({
    empID: Number,
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    password: String,
    manEmail: String,
    Account: String,
    Position: String,
}, { timestamps: { createdAt: 'created_at' } });

const Roster = mongoose.model('Roster', rosterSchema);
module.exports = Roster;