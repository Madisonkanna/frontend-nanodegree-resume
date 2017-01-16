var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco"
    },
    "welcomeMsg": "Welcome to my site",
    "skills": ["awesomeness", " delivering things", " cryogenic sleep", "saving the world"],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [{
            "employer": "Planet Express",
            "title": "Delivery Boy",
            "dates": "January 3000 - Future",
            "location": "Brooklyn, NY",
            "description": "This is a description of the work experience at Planet Express"
        },
        {
            "employer": "Panucci's Pizza",
            "title": "Delivery Boy",
            "dates": "1998",
            "location": "Manhatten, NY",
            "description": "This is a description of the work experience at Panucci's Pizza"
        }
    ]
};

var education = {
    "schools": [{
            "name": "Nova Southeastern University",
            "location": "Fort Lauderdale, FL",
            "degree": "Masters",
            "major": ["CS"],
            "date": 2013,
            "url": "http://example.com"
        },
        {
            "name": "Eckerd College",
            "location": "Saint Petersburg, FL",
            "degree": "BA",
            "major": ["CS"],
            "date": 2003,
            "url": "http://example.com"
        }
    ],
    "onlineClasses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "date": 2014,
        "url": "http://www.udacity.com/course/ud804"
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": 2014,
        "description": "My sample project description",
        "images": [
            "images/projectimage.png"
        ]
    }]
};

// Bio object

bio.display = function() {

    var formattedcontactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedcontactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedcontactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedcontactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedcontactInfo = formattedcontactEmail + formattedcontactGithub + formattedcontactTwitter + formattedcontactLocation;
    $("#footerContacts").append(formattedcontactInfo);
    $("#topContacts").append(formattedcontactInfo);

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
formattedbioInfo = formattedName + formattedRole + formattedBioPic;
$("#header").prepend(formattedbioInfo);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(formattedSkills);
}

bio.display();

//Work function
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
        $(".work-entry:last").append(formattedEmployerInfo);

    });
};

work.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.date);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        var formattededInfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
        $(".education-entry:last").append(formattededInfo);
    });

    // Online classes
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineClasses.forEach(function(course) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.date);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
        var formattedonlineInfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
        $(".education-entry:last").append(formattedonlineInfo);

    });
};

education.display();

// Projects object

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectDescription);
        if (project.images.length > 0) {
            var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry:last").append(formattedprojectimage);
        }
    });
};


projects.display();

$("#mapDiv").append(googleMap);
