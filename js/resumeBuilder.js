var name = "John Doe";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);


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
	"welcomeMessage": "Welcome to my site",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"bioPic": "images/fry.jpg"
  }


if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);


}


var work = {
  "jobs": [
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "dates": "January 3000 - Future",
      "description": "This is a description of the work experience at Planet Express"
    },
    {
      "employer": "Panucci's Pizza",
      "title": "Delivery Boy",
      "dates": "1998",
      "description": "This is a description of the work experience at Panucci's Pizza"
    }
  ]
}



function displayWork() {
  for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedDescription);
  }  
}

displayWork();

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "My sample project description",
      "images": [
        "http://www.example.com",
        "http://example.com"
      ]
    }
  ]
}


function displayProjects() {}

  for (project in projects.projects) {
  $("#projects").append(HTMLprojectStart);


  var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  var formattedprojectImage = HTMLworkDates.replace("%data%", projects.projects[project].images);


  $(".project-entry:last").append(formattedprojectTitle);
  $(".project-entry:last").append(formattedprojectDates);
  $(".project-entry:last").append(formattedprojectDescription);
  $(".project-entry:last").append(formattedprojectImage);
  
}

displayProjects();

var education = {
  "schools": [
    {
      "name": "Nova Southeastern University",
      "location": "Fort Lauderdale, FL",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": 2013,
      "url": "http://example.com"
    },
    {
      "name": "Eckerd College",
      "location": "Saint Petersburg, FL",
      "degree": "BA",
      "majors": ["CS"],
      "dates": 2003,
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "date": 2014,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
}



for (school in education.schools) {
  $("#education").append(HTMLeducationStart);

  var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  
  $(".education-entry:last").append(formattedschoolName);
  $(".education-entry:last").append(formattedschoolDegree);
  $(".education-entry:last").append(formattedschoolDates);
  $(".education-entry:last").append(formattedschoolLocation);
  $(".education.entry:last").append(formattedschoolMajor);
}  