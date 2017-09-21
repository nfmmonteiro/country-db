import _ from 'lodash';
import {countries} from './countries.json';

function getAllCountryNames(region) {
  var regionCountries = _.filter(countries, function(country) {
    return (!region || country.region === region);
  });
  var regionCountryNames = regionCountries.map(function(country) {
    return country.name;
  });
  return regionCountryNames;
}

function getByAlpha2Code(code) {
  var country = _.find(countries, function(country) {
    return (country.alpha2Code === code);
  });
  return country;
};

function getByAlpha3Code(code) {
  var country = _.find(countries, function(country) {
    return (country.alpha3Code === code);
  });
  return country;
};

function getAllCountries(region) {
  return _.filter(countries, function(country) {
    return (!region || country.region === region);
  });
};

function _getCapital(alpha2Code) {
  return getByAlpha2Code(alpha2Code).capital;
}

module.exports = {
  getAllCountryNames: getAllCountryNames,
  getByAlpha2Code: getByAlpha2Code,
  getByAlpha3Code: getByAlpha3Code,
  getAllCountries: getAllCountries,
  getCapital: _getCapital
};
