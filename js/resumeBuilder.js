

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["awesomeness", "programming", "teaching", "JS"];
$("#header").append(skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Francisco"
	},
	"welcomeMessage": "Welcome to my site!",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"bioPic": "images/fry.jpg"

}

$("#main").append(bio.role);


cameron = {};
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
