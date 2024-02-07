const mongoose = require("mongoose");

const schema = mongoose.model('User', new mongoose.Schema({
    _id: String,
    Name: String,
    Gender: String,
    Roles: { type: Array },
    Badges: { type: Object },
    Views: { type: Number, default: 0 },
    Coin: { type: Number, default: 250, min: 0 },
    Gold: { type: Number, default: 1, min: 0 },
    Daily: { type: Number, default: 0 },
    Transfers: { type: Object },
    Inventory: { type: Object },
    CommandsLogs: { type: Object },
    Voices: {type: Array},
    Records: { type: Object },
    Tagged: { type: Boolean, default: false },
    Taggeds: { type: Object },
    Staff: { type: Boolean, default: false },
    Registrant: String,
    Responsibilitys: {type: Object, default: {}},
    tagCağıran: String,
    yetkiVeren: String,
    Staffs: { type: Object },
    staffCriminalPoint: {type: Number, default: 200},
    Uses: { type: Object },
    Names: { type: Object },
    StaffLogs: { type: Object },
    Meetings: Object,
    Streaming: Object,
    Notes: { type: Object }
}));

module.exports = schema;