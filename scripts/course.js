
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// create the buttons for the courses by "selecting" them from html with querySelector and the ID.

const allBtn = document.querySelector("#all-courses");
const wddBtn = document.querySelector("#WDD-courses");
const cseBtn = document.querySelector("#CSE-courses");


// create the container for the gallery by selecting it using querySelector and the class.

const gallery = document.querySelector(".gallery");

// create a function that displays the list in the gallery container. 

function displayCourses(list) {
    gallery.innerHTML = ""; // Clear previous cards
    
    // iterate through the course list and create a card

    list.forEach(course => {
        let check = ""
        if (course.completed) {
            check = `✔`;
        }

        // create an element called "card" within the div in html (for each item in list)

        const card = document.createElement("div");
        
        //  .classList.add adds a class to an html element. in this case the card element has a 
        // class added to it so that CSS can be used to style

        card.classList.add("all-cards")
        if (course.completed) {
            card.classList.add("completed-cards");
        }

        // adds text to the card. The $ and course.subject is from the array 

        card.innerHTML = `${course.subject} ${course.number} ${check} `;
           
        // add this newly created card to the gallery

        gallery.appendChild(card);

    });
    
    // create a variable for the credit counter to run the reduce function and find the credits of the displayed courses. 
    // This is why the reduce function is inside the display courses function but not in the for each loop.
        // find and select the credit counter in html and insert the const creditCounter 
        
        const totalCredits = list.reduce((sum, course) => sum + course.credits, 0);
        document.querySelector("#total-credits").textContent = totalCredits; 
         
}


// add styling for active buttons that are currently showing.

function setActive(button) {
    // removes all active class then adds the active class to the button that was just clicked.
    document.querySelectorAll("#nav-course button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

// displays all the courses. 
allBtn.addEventListener("click", () => {
    setActive(allBtn);
    displayCourses(courses);
});

// display wdd courses
wddBtn.addEventListener("click", () => {
    setActive(wddBtn);
    displayCourses(courses.filter(c => c.subject === "WDD"));
});

// displays cse courses
cseBtn.addEventListener("click", () => {
    setActive(cseBtn);
    displayCourses(courses.filter(c => c.subject === "CSE"));
});



