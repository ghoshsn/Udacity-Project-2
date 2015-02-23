
// Biography JSON

var  bio = {
	"name" : "Santanu Ghosh",
	"role" : "web Developer",
	"contacts": {
		"mobile": "847-630-8632",
		"email":"ghoshsn@gmail.com",
		"github": "TBD",
		"twitter": "TBD",
		"location": "Round Lake, IL"
	},
	"welcomeMessage": "Experienced IT Professional",
	"skills": [
	"Software Quality Assurance and Testing", "Testing Tools", "System Integration","Databases", "Networking", "SDLC"
	],
	"bioPic": "images/SG.JPG"
}

// Education JSON

var education = {
	"schools": [
	{
		"name": "Illinois Institute of Technology",
		"location": "Chicago, IL",
		"degree": "Masters",
		"majors": ["Information Technology and Management"],
		"dates": 2011,
		"url" : "http://web.iit.edu/"
	},
	{
		"name": "Thapar Institute of Engineering and Technology",
		"location": "Patiala, India",
		"degree": "Masters",
		"majors": ["Computer Applications"],
		"dates": 1994
	}
	],

	"onlineCourses": [
		{
			"title": "HTML and CSS",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com"
		},
		{
			"title": "Javascript",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com"
		},
		{
			"title": "Python",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com"
		}
	]
}

// Work JSON

var work = {
	"jobs": [
		{
			"employer": "LG Electronics",
			"title": "Test Engineer",
			"location": "Lincolnshire, IL",
			"dates": "2013-Present",
			"description": "Worked in the Advanced Product Division (APD) for commercial DVB/ATSC digital displays, for hospitality and healthcare industries.Supported development efforts of the business solutions based on a Linux/Java based Pro:Centric server and Pro:Idiom encryption platforms, in a client-server environment.Performed complex validation and regression testing for deployment outside of North America.Interfaced between development engineering team in New Jersey and QA team in Korea.Introduced and implemented test case management tool Testopia and improved overall testing process within APD.Assisted in the monitoring and resolution of product quality issuesDesigned, developed, and executed test cases for custom applications and integrations.Analyzed test results, made recommendations fto support process improvement, and implement changes.Worked with application engineers and customer service to test and identify the root cause of issues.Communicated application problems and issues to key stakeholders, including management, development teams, end users, and unit leaders."
		},
		{
			"employer": "Nokia",
			"title": "Senior Quality Assurance Engineer",
			"location": "Itasca, IL",
			"dates": "2011-2013",
			"description": "Worked in an Agile Scrum environment.Worked on QA for Nokia's Ovi browser platform webapps and proxy server, for Nokia's S40 phones, which runs in a proxy based client-server environment.Worked in the Analytics Scrum team in the testing/integration of a cloud based Analytics framework for the proxy based Nokia browser usage, using Amazon's AWS/ Redshift along with Hadoop and Scribe. Worked with product architects to eliminate quality issues right at the design phase.Worked on the end to end client-server applications for the cloud based ovi browserDeveloped test webapps with HTML, CSS and Javascript for the Ovi browser platform using Nokia's WDE IDE.Participated in debugging and trouble shooting of webapps in the proxy based environment using various tools like Wireshark, RFtrace etc.Wrote and executed test plans for User Stories and Requirements.Wrote and maintained test cases using HP Quality Center.Devised regression test plans for contactors in the regression test team.Worked in automating test cases using Python on Nokia's ART2 framework. Maintained suites of automated tests.Worked with development and program management teams to track and resolve issues.Worked with various teams spread across many timezones in California, Finland and India.Wrote upgrade procedures and supported the 'Network Operations' Team."
		},
		{
			"employer": "GoGo (formerly Aircell Inc.)",
			"title": "System Integration Engineer",
			"location": "Itasca, IL",
			"dates": "2007-2010",
			"description": "Worked on the integration and testing of Air-To-Ground (ATG)  system that provides 802.11 data services, i.e. Internet Access, for 802.11 equipped clients in commercial aircrafts. Worked on the Airborne system composed of five primary in-cabin components Worked in the system integration of hardware and software components of the above system. Authored system level end to end test procedures based on requirements . Tested, reproduced and analyzed customer issues and worked with engineering to resolve issues; Led troubleshooting efforts with various engineering and networks teams; Participated in debugging various bugs.Worked in resolving issues that were discovered by the client and customer management teams.Created integration and configuration documentation suitable for conversion into engineering, configuration, test and manufacturing plans; Worked with 3rd party vendors to resolve evaluation, integration issues and questions."
		},
		{
			"employer": "Motorola Inc.",
			"title": "Senior Software Engineer",
			"location": "Libertyville, IL",
			"dates": "1999-2007",
			"description": "Worked as Test Engineer in the Verizon product group for mobile handsets.Automation Lead in the Verizon messaging team. In this role, was responsible for developing, scripting, testing automation scripts for testing messaging application for Verizon Phones. Led other engineers in the team to develop and deploy automation within the organization.. Was the test lead for the messaging portion of Verizon Krazr phone. Authored test plans (Sanity, Regression and New Feature tests) based on customer requirement. Responsible for testing, analyzing, verifying and solving field issues from customers across the world. Worked on Motorola Base Station (BSS) software releases for GSM, GPRS and EDGE networks. Worked in the integration and testing of Huawei SGSN with other GSN network elements of a 2.5G GPRS network. This included developing integration, acceptance and functional test plans for the SGSN and other components. Worked extensively with third parties such as Rocket Mobile, Alcatel and Huawei of in the various developmental, test and integration phase. Tested SGSN related field issues and their fixes in the lab. Acted as primary liaison between various development teams based in Arlington Heights, lL and Swindon, UK for facilitating efficient problem solving from identification through to resolution in a formal, documented, consistent and timely manner."
		},
		{
			"employer": "Infotech Resources Group",
			"title": "Programmer Analyst",
			"location": "Piscataway, NJ",
			"dates": "1998-1999",
			"description": "Worked on Lucent's Intelligent Network (IN) software solution.Integrated the Service Control Point (SCP) platform to the customer's network as a Member of the NPI (New Product Introduction) Group. Feature tested, authored test plans along with the platform development team for the Service Control Point (SCP) for Lucent’s Advantage Model 1 and Model 2 SCP."
		}
	]
}


// Projects JSON

var projects = {
	"projects": [
		{
			"title": "Sample Project",
			"date": "2014",
			"description": "Udacity HTML and CSS Course ",
			"images": [
			"images/circuit.JPG"
			]
		}
	]
}


// Header with name and role

bio.display = function() {
var name = "Santanu Ghosh";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// Contact information on the header and footer


var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedHTMLmobile);
$("#footerContacts").prepend(formattedHTMLmobile);

var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(formattedHTMLemail);
$("#footerContacts").prepend(formattedHTMLemail);

var  formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(formattedHTMLgithub);
$("#footerContacts").prepend(formattedHTMLgithub);

var  formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").prepend(formattedHTMLtwitter);
$("#footerContacts").prepend(formattedHTMLtwitter);

var  formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedHTMLlocation);
$("#footerContacts").prepend(formattedHTMLlocation);

var formattedWecomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWecomeMsg);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);

}


// Skills summary

bio.skills.display = function() {
if(bio.skills.length> 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
}
}


// Display work information

work.display = function(){
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}


// Display Projects Information

projects.display = function(){
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

	$(".project-entry:last").append(formattedHTMLprojectTitle);

	var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	$(".project-entry:last").append(formattedHTMLprojectDates);

	var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedHTMLprojectDescription);

	var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0])
	$(".project-entry:last").append(formattedHTMLprojectImage);

}
}



// Display Education Information

education.display = function(){
for (edu in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);


	$(".education-entry:last").append(formattedHTMLschoolName);

	var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
	$(".education-entry:last").append(formattedHTMLschoolDates);

	var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
	$(".education-entry:last").append(formattedHTMLschoolMajor);
}


$("#education").append(HTMLonlineClasses);

for (online in education.onlineCourses) {
	$("#education").append(HTMLschoolStart);



	var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
	var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
	var formattedEOnlineTitleSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;

	$(".education-entry:last").append(formattedEOnlineTitleSchool);

	var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
	$(".education-entry:last").append(formattedHTMLonlineDates);


	var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
	$(".education-entry:last").append(formattedHTMLonlineURL);

}
}

//Call the above functions and display them on the resume

bio.display();
bio.skills.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
