const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  property_id: { type: String },
  owner_name: { type: String },
  owner_id: { type: String },
  property_address: { type: String },
  property_area: { type: String },
  property_landmark: { type: String },
  property_type: { type: String },
  property_size: { type: String },
  property_images_url: { type: String },
  property_video_url: { type: String },
}, { timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
})

const propertyData = mongoose.model('propertyDetails' , propertySchema);
module.exports = propertyData;