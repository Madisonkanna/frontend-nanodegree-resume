
var name = "Madison Kanna"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Madison Kanna",
	"role": "Web Developer"
	"contacts": {
		"mobile": "916-599-5151",
		"email": "madisonkanna",
		"github": "madisonkanna",
		"twitter": "@madisonkanna",
		"location:" "Sacramento", 
	},
	"welcomeMessage": "Welcome to my online resume!"
	"skills": [
		"awesomeness", "JS", "HTML and CSS"]
	"bioPic": "images/image.jpeg"
}
