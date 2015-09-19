var _ = require('lodash'),
	countries = require('./countries.json').countries,
	countriesModule = {};

countriesModule.getAllCountryNames = function() {
	var countryNames = countries.map(function(country) {
		return country.name;
	});
	return countryNames;
};

module.exports = countriesModule;
