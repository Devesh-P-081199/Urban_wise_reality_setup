const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
    user_id: { type: String },
    user_name: { type: String },
    user_contact: { type: String },
    user_type: { type: String },
    user_password: { type: String },
}, { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const credential = mongoose.model('userCredential' , credentialSchema);
module.exports = credential;