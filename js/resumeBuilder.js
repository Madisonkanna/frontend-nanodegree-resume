var data = "%data%";

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
    "welcomeMessage": "Welcome to my site",
    "skills": ["awesomeness", " delivering things", " cryogenic sleep", "saving the world"],
    "biopic": "images/fry.jpg"
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
            "majors": ["CS"],
            "dates": "2013",
            "url": "http://example.com"
        },
        {
            "name": "Eckerd College",
            "location": "Saint Petersburg, FL",
            "degree": "BA",
            "majors": ["CS"],
            "dates": "2003",
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2014",
        "url": "http://www.udacity.com/course/ud804"
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "My sample project description",
        "images": [
            "images/projectimage.png"
        ]
    }]
};

// Bio object

bio.display = function() {

// Loop over skills
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
    $("#skills").append(formattedSkill);
}

    var formattedcontactMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedcontactEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedcontactGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedcontactTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedcontactLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedcontactInfo = formattedcontactMobile + formattedcontactEmail + formattedcontactGithub + formattedcontactTwitter + formattedcontactLocation;
    $("#topContacts, #footerContacts").append(formattedcontactInfo);

};

var formattedName = HTMLheaderName.replace(data, bio.name);
var formattedRole = HTMLheaderRole.replace(data, bio.role);
var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
formattedbioInfo = formattedName + formattedRole + formattedbioPic;
$("#header").prepend(formattedbioInfo);
$("#header").append(formattedWelcomeMessage);


bio.display();

//Work function
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedworkDates = HTMLworkDates.replace(data, job.dates);
        var formattedworkLocation = HTMLworkLocation.replace(data, job.location);
        var formattedworkDescription = HTMLworkDescription.replace(data, job.description);
        var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
        $(".work-entry:last").append(formattedEmployerInfo);

    });
};

work.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace(data, school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace(data, school.degree);
        var formattedschoolDates = HTMLschoolDates.replace(data, school.dates);
        var formattedschoolLocation = HTMLschoolLocation.replace(data, school.location);
        var formattedschoolMajors = HTMLschoolMajor.replace(data, school.majors);
        var formattededInfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajors;
        $(".education-entry:last").append(formattededInfo);
    });

    // Online classes
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(course) {

        var formattedonlineTitle = HTMLonlineTitle.replace(data, course.title);
        var formattedonlineSchool = HTMLonlineSchool.replace(data, course.school);
        var formattedonlineDates = HTMLonlineDates.replace(data, course.dates);
        var formattedonlineURL = HTMLonlineURL.replace(data, course.url);
        var formattedonlineInfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
        $(".education-entry:last").append(formattedonlineInfo);
    });
};

education.display();

// Projects object

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace(data, project.title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace(data, project.dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedprojectDescription);

    $("#header").append(HTMLprojectImage);
    for (var i = 0; i < projects.projects.images.length; i++) {
    var formattedprojectImage = HTMLprojectImage.replace(data, projects.projects.images[i]);
    $(".project-entry:last").append(formattedImage);
}

    });
};


projects.display();

$("#mapDiv").append(googleMap);
