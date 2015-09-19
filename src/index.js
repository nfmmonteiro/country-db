var countries = require('./countries.json').countries,
	_ = require('lodash');

function getAllCountryNames() {
	var countryNames = countries.map(function(country) {
		return country.name;
	});
	return countryNames;
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
