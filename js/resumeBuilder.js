
var name = "Madison Kanna"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Madison Kanna",
	"role": "Web Developer",
	"contacts": {
		"mobile": "916-599-5151",
		"email": "madisonkanna@gmail.com",
		"github": "madisonkanna",
		"twitter": "@madisonkanna",
		"location": "Sacramento", 
	},
	"welcomeMessage": "Welcome to my online resume!",
	"skills": [
		"awesomeness", "JS", "HTML and CSS"],
	"bioPic": "images/image.jpeg"
}

var work = {};
work.position = "Executive Assistant";
work.employer = "Dominant Players";
work.years = 1.2;

var education = {};
education["name"] = Udacity
education["years"] = "2015-2016"
education["city"] = "Sacramento"

$("#main").append(work["position"]);
$("#main").append(education.name);



