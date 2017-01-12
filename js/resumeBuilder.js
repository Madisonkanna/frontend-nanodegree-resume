

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
  "welcomeMsg": "Welcome to my site",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "bioPic": "images/fry.jpg"
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

var education = {
  "schools": [
    {
      "name": "Nova Southeastern University",
      "location": "Fort Lauderdale, FL",
      "degree": "Masters",
      "major": ["Computer Science"],
      "date": 2013,
      "url": "http://example.com"
    },
    {
      "name": "Eckerd College",
      "location": "Saint Petersburg, FL",
      "degree": "BA",
      "major": ["Computer Science"],
      "date": 2003,
      "url": "http://example.com"
    }
  ],
  "onlineClasses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "date": 2014,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014", 
      "description": "My sample project description",
      "images": [
        "images/projectimage.png"
      ]
    }
  ]
}

bio.display = function() {


  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


  if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(item in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[item]));
  }
}

for(item in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[item]);
  $("#footerContacts").append(formattedContactInfo[item]);
}

}

bio.display();








//where work info was
work.display = function() {
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

work.display();

function locationizer(work_object) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.job[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}



education.display = function() {

for (school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
  var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

  
  $(".education-entry:last").append(formattedschoolName);
  $(".education.entry:last").append(formattedschoolMajor);
  $(".education-entry:last").append(formattedschoolDegree);
  $(".education-entry:last").append(formattedschoolDates);
  $(".education-entry:last").append(formattedschoolLocation);

  }

for (onlineClasses in education.onlineClasses) {
    $("#education").append(HTMLonlineClasses);

    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClasses].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClasses].school);


    $(".education-entry:last").append(formattedonlineTitle);
    $(".education-entry:last").append(formattedonlineSchool);
  }

}

education.display();




projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedprojectTitle);

    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $("project-entry:last").append(formattedprojectDates);

    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedprojectDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedprojectImage);
      }
    }
  }
}

projects.display();


//$('#main').append(internationalizeButton)

$("#mapDiv").append(googleMap);

