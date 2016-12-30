var role = "Web Developer";
var name = "Madison Kanna"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role)


$("#header").append(formattedName);
$("#header").append(formattedRole);


