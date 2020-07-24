

$(document).ready(function(){
	var newsSource = document.getElementById("release-template").innerHTML,
  	template = Handlebars.compile(newsSource);
  // var generatedHTML = compiledTemplate(newsData)

	$.getJSON('release.json', function(json) {
    console.log(json.releases[0])
    console.log(json.releases[1])
    var data = template(json);
		$('.news').html(data);
  });
  

	Handlebars.registerHelper('formatDate', function(date, format) {
		return moment(date).format(format);
	});

	Handlebars.registerHelper('truncate', function(text, num) {
		return text.substr(0,num) + '...';
  });
  
}); 


