// Mocha - describe / it
// Chai - expectations library

var countryDb 	= require('./index'),
	countries   = require('./countries.json').countries,
	expect 		= require('chai').expect;

describe('country-db', function() {

	describe('getAllCountryNames function', function() {

		it('must return all the countries specified on countries.json', function() {
			// given
			var refCountryNames = [];
			for (var i = 0; i < countries.length; i++) {
				refCountryNames.push(countries[i].name);
			}
			// when
			var countryNames = countryDb.getAllCountryNames();
			// then
			expect(countryNames).to.eql(refCountryNames);
		});
	});

	describe('getByAlpha2Code function', function() {
		countries.forEach(function(country) {
			it('must return ' + country.name + ' details for alpha2 code: ' + country.alpha2Code, function() {
				// when
				var returnedCountry = countryDb.getByAlpha2Code(country.alpha2Code);
				// then
				expect(returnedCountry).to.eql(country);
			});
		});
	});

	describe('getByAlpha3Code function', function() {
		countries.forEach(function(country) {
			it('must return ' + country.name + ' details for alpha3 code: ' + country.alpha3Code, function() {
				// when
				var returnedCountry = countryDb.getByAlpha3Code(country.alpha3Code);
				// then
				expect(returnedCountry).to.eql(country);
			});
		});
	});

});