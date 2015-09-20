var countries = require('./countries.json').countries,
	_ = require('lodash');

function getAllCountryNames(region) {
	var regionCountries, regionCountryNames;
	regionCountries = _.filter(countries, function(country) {
		return (!region || country.region === region);
	});
	regionCountryNames = regionCountries.map(function(country) {
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

module.exports = {
	getAllCountryNames: getAllCountryNames,
	getByAlpha2Code: getByAlpha2Code,
	getByAlpha3Code: getByAlpha3Code
};
