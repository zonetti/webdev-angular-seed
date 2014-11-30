var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BrewerySchema = new Schema({
  name: { type: String, default: '', required: true },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  country: { type: String, default: '' },
  beers: [{ type: Schema.Types.ObjectId, ref: 'Beer' }],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Brewery', BrewerySchema);