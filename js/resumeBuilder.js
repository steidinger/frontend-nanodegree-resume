var bio = {
    name: 'John Doe',
    role: 'Frontend Developer',
    contacts: {
        mobile: '+49-171-123456',
        email: 'john.doe@example.com',
        github: 'http://github.com',
        twitter: '@jdoe',
        location: 'Stuttgart, Germany'
    },
    welcomeMessage: 'Welcome',
    skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    biopic: 'images/fry.jpg',
    display: function () {
        var placeholder = '%data%';
        var $header = $('#header');

        $header.prepend(HTMLheaderName.replace(placeholder, bio.name) + HTMLheaderRole.replace(placeholder, bio.role));
        Object.keys(bio.contacts).forEach(function (contact) {
            var html = HTMLcontactGeneric.replace('%contact%', contact).replace(placeholder, bio.contacts[contact]);
            $('#topContacts, #footerContacts').append(html);
        });
        $header.append(HTMLbioPic.replace(placeholder, bio.biopic));
        $header.append(HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage));
        $header.append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $('#skills').append(HTMLskills.replace(placeholder, skill));
        });
    }
};

var education = {
    schools: [
        {
            name: 'Universität Karlsruhe',
            location: 'Karlsruhe, Germany',
            degree: 'Diplom-Informatiker',
            majors: 'Computer Science',
            dates: '2005 - 2009',
            url: 'http://www.uni-karlsruhe.de/'
        }
    ],
    onlineCourses: [
        {
            title: 'Developing Android Apps',
            school: 'Udacity',
            date: 20014,
            url: 'https://www.udacity.com/course/developing-android-apps--ud853'
        },
        {
            title: 'Data Analysis with R',
            school: 'Udacity',
            date: 20014,
            url: 'https://www.udacity.com/course/data-analysis-with-r--ud651'
        }
    ],
    display: function () {
        var placeholder = '%data%';
        var $education = $("#education");

        education.schools.forEach(function (school) {
            var html = HTMLschoolName.replace(placeholder, school.name);
            html += HTMLschoolDegree.replace(placeholder, school.degree);
            html += HTMLschoolDates.replace(placeholder, school.dates);
            html += HTMLschoolLocation.replace(placeholder, school.location);
            html += HTMLschoolMajor.replace(placeholder, school.majors);
            $education.append(HTMLschoolStart);
            $education.find(".education-entry:last").append(html);
        });

        if (education.onlineCourses) {
            $education.append(HTMLonlineClasses);
            education.onlineCourses.forEach(function (course) {
                var html = HTMLonlineTitle.replace(placeholder, course.title);
                html += HTMLonlineSchool.replace(placeholder, course.school);
                html += HTMLonlineDates.replace(placeholder, course.date);
                html += HTMLonlineURL.replace(placeholder, course.url);
                $education.append(HTMLonlineClassStart);
                $education.find(".education-entry:last").append(html);
            });
        }
    }
};

var work = {
    jobs: [
        {
            employer: 'Mobilitas',
            title: 'Software Engineer',
            location: 'Bern, Switzerland',
            dates: '2011 - 2015',
            description: 'Developed in-house applications in Java using the Swing framework.'
        },
        {
            employer: 'Acme Corp.',
            title: 'Digital Prophet',
            location: 'Konstanz, Germany',
            dates: '2009 - 2011',
            description: 'Did the same job Shingy does for AOL.'
        }
    ],
    display: function () {
        var placeholder = '%data%';
        var $workExperience = $("#workExperience");

        work.jobs.forEach(function (job) {
            var html = HTMLworkEmployer.replace(placeholder, job.employer);
            html += HTMLworkTitle.replace(placeholder, job.title);
            html += HTMLworkDates.replace(placeholder, job.dates);
            html += HTMLworkLocation.replace(placeholder, job.location);
            html += HTMLworkDescription.replace(placeholder, job.description);
            $workExperience.append(HTMLworkStart);
            $workExperience.find('.work-entry:last').append(html);
        })
    }
};

var projects = {
    projects: [
        {
            title: 'Photography',
            dates: '2000 - present',
            description: 'Taking lots and lots of photographs',
            images: [
                'images/project1-1x.jpg',
                'images/project2-1x.jpg',
                'images/project3-1x.jpg'
            ]
        },
        {
            title: 'Nanodegree Frontend Developer Portfolio',
            dates: '5/2015 -5/2015',
            description: 'Responsive web site showing a project portfolio. Does not use Javascript, only HTML and CSS',
            images: ['images/197x148.gif']
        },
        {
            title: 'Nanodegree Frontend Developer Resume',
            dates: '5/2015 -5/2015',
            description: 'Dynamic web site showing my resume.',
            images: ['images/197x148.gif']
        }
    ],
    display: function () {
        var placeholder = '%data%';
        var $projects = $("#projects");

        projects.projects.forEach(function (project) {
            var html = HTMLprojectTitle.replace(placeholder, project.title);
            html += HTMLprojectDates.replace(placeholder, project.dates);
            html += HTMLprojectDescription.replace(placeholder, project.description);
            project.images.forEach(function (image) {
                html += HTMLprojectImage.replace(placeholder, image);
            });
            $projects.append(HTMLprojectStart);
            $('#projects').find(".project-entry:last").append(html);
        })
    }
};

function addMap() {
    $("#mapDiv").append(googleMap);
}

function initCollapsibleSections() {
    $("section h2").on("click", function (event) {
        $(event.currentTarget).closest("section").toggleClass("collapsed");
    });
}

bio.display();
work.display();
education.display();
projects.display();
addMap();
initCollapsibleSections();