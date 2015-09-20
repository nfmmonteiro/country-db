// Mocha - describe / it
// Chai - expectations library

var countryDb 	= require('./index'),
	countries   = require('./countries.json').countries,
	expect 		= require('chai').expect;

function getRefRegions() {
	var regions = [], region;
	for (var i = 0; i < countries.length; i++) {
		region = countries[i].region;
		if (regions.indexOf(region) === -1) {
			regions.push(countries[i].region);
		}
	}
	return regions;
}

function getRefCountryNames(region) {
	var countryNames = [];
	for (var i = 0; i < countries.length; i++) {
		if (!region || countries[i].region === region) {
			countryNames.push(countries[i].name);
		}
	}
	return countryNames;
}

describe('country-db', function() {

	describe('getAllCountryNames function', function() {

		it('must return all the countries that are on countries.json (when no region is specified)', function() {
			// given
			var refCountryNames = getRefCountryNames();
			// when
			var countryNames = countryDb.getAllCountryNames();
			// then
			expect(countryNames).to.eql(refCountryNames);
		});

		getRefRegions().forEach(function(region) {
			it('must return all the countries of ' + region + ' region that are on countries.json', function() {
				// given
				var refCountryNames = getRefCountryNames(region);
				// when
				var countryNames = countryDb.getAllCountryNames(region);
				// then
				expect(countryNames).to.eql(refCountryNames);
			});
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