/*const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https:community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=JSONP&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f39cfb5adbmsh1147da813ebb31cp1364a3jsnf531fb19e8f1",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});*/

var apiKey = "784e356bfemshf5f9086383a8662p166ec6jsn6d50fd49c55f"

$.ajax({
	url: "http:community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=" + apiKey + "2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
	type: "GET",
	crossDomain: true,
	dataType: 'JSONP'
}).done(function (response) {
	console.log(response)
})

/*$(document).ready(function() {
	$("h2").on();
});*/
