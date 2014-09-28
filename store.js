var _ = require("underscore");

var data = [];
 
module.exports = {
  push: function(name, text) {
	data.unshift({
		"name": name,
		"text": text
	})  	
  },
  list: function() {
  	return data;
  },
  find: function(properties) {
  	return _.where(data, properties);
  }
}

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
 
var getFakeName = function() {
  var fakeFirsts = ['Le', 'Long', 'Anh', 'Quan', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Vuong', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
 
var getFakeTweet = function() {
  var awesome_adj = ['booboo','breathtaking','amazing','crazy','sweet','cool','wonderful','mindblowing'];
  return "You are " + randArrayEl(awesome_adj) + "! Your friends are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};
 
for(var i=0; i<10; i++) {
  module.exports.push(getFakeName(), getFakeTweet());
}