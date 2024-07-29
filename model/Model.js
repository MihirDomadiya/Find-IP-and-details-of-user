const mongoose = require("mongoose");

const IPSchema = mongoose.Schema({
  ip: {
    type: String,
  },
  network: {
    type: String,
  },
  version: {
    type: String,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  region_code: {
    type: String,
  },
  country: {
    type: String,
  },
  country_name: {
    type: String,
  },
  country_code: {
    type: String,
  },
  country_code_iso3: {
    type: String,
  },
  country_capital: {
    type: String,
  },
  country_tld: {
    type: String,
  },
  continent_code: {
    type: String,
  },
  in_eu: {
    type: Boolean,
  },
  postal: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  timezone: {
    type: String,
  },
  utc_offset: {
    type: String,
  },
  country_calling_code: {
    type: String,
  },
  currency: {
    type: String,
  },
  currency_name: {
    type: String,
  },
  languages: {
    type: String,
  },
  country_area: {
    type: Number,
  },
  country_population: {
    type: Number,
  },
  asn: {
    type: String,
  },
  org: {
    type: String,
  },
});

const IPModel = mongoose.model("IPData", IPSchema);

module.exports = IPModel;
