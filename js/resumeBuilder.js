var cameron = {};
cameron.job = "course dev";

var makeCourse = function() {
	// make a course
	console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev") {
	makeCourse();
	courses= courses + 1;
	if(courses === 10) {
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);


if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}


var bio = {
	"name" : "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Francisco", 
	},
	"welcomeMessage": "Welcome to my online resume!",
	"skills": [
		"awesomeness", "JS", "HTML and CSS"],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
	{
		"name": "Nova Southeastern University",
		"city": "Fort Lauderdale, FL",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 2013,
		"url": "http://example.com"
	},
{

		"name": "Eckerd College",
		"city": "Saint Petersburg, FL",
		"degree": "BA"
	},
	]
}
	"onlineCourses": [
	{
		"title": "JavaScript Crash Course",
		"school" : "Udacity",
		"date": 2014,
		"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
	{
		"employer": "Planet Express",
		"title": "Delivery Boy",
		"dates": "January 3000 - Future"
		"description": "Who moved my cheese"
	},
	{
		"employer": "Panucci's Pizza",
		"title": "Delivery Boy",
		"dates": "1998 - December 31, 1999"
		"description": "Who moved my cheese"
	}
  ]
}

var projects = {
	"projects": [
		{
			"title": "Sample project 1",
			"dates": "2014"
			"description": "Who moved my cheese"
			"images": [
			"http://lh3.ggpt.com"
			]
		}
	]
	
}





