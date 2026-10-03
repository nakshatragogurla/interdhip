const internships = [
    {
        title: "Frontend Developer Intern",
        company: "TechNova",
        location: "Hyderabad",
        domain: "web",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "Python Developer Intern",
        company: "CodeWorks",
        location: "Remote",
        domain: "python",
        skills: ["Python", "SQL"]
    },

    {
        title: "Data Analyst Intern",
        company: "DataHub",
        location: "Bangalore",
        domain: "data",
        skills: ["Python", "Excel", "SQL"]
    },

    {
        title: "IoT Intern",
        company: "SmartTech",
        location: "Hyderabad",
        domain: "iot",
        skills: ["IoT", "Arduino", "Sensors"]
    },

    {
        title: "Web Developer Intern",
        company: "WebWorks",
        location: "Remote",
        domain: "web",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "Python Data Science Intern",
        company: "AnalyticsHub",
        location: "Chennai",
        domain: "python",
        skills: ["Python", "Pandas", "NumPy"]
    }
];


// Get HTML elements
const internshipList = document.getElementById("internshipList");
const searchInput = document.getElementById("search");
const domainSelect = document.getElementById("domain");
const emptyMessage = document.getElementById("emptyMessage");
const resultCount = document.getElementById("resultCount");


// Display internships
function displayInternships(data) {

    internshipList.innerHTML = "";

    if (data.length === 0) {

        emptyMessage.hidden = false;
        resultCount.textContent = "0 internships found";

        return;
    }

    emptyMessage.hidden = true;

    resultCount.textContent =
        `${data.length} internship(s) found`;


    data.forEach(function(internship) {

        const card = document.createElement("article");

        card.className = "internship-card";

        card.innerHTML = `
            <h2>${internship.title}</h2>

            <p>
                <strong>Company:</strong>
                ${internship.company}
            </p>

            <p>
                <strong>Location:</strong>
                ${internship.location}
            </p>

            <p>
                <strong>Skills:</strong>
                ${internship.skills.join(", ")}
            </p>

            <button type="button">
                View Details
            </button>
        `;

        internshipList.appendChild(card);
    });
}


// Search and filter function
function filterInternships() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedDomain =
        domainSelect.value;


    const filteredInternships =
        internships.filter(function(internship) {

            const matchesSearch =
                internship.title
                    .toLowerCase()
                    .includes(searchText) ||

                internship.company
                    .toLowerCase()
                    .includes(searchText);


            const matchesDomain =
                selectedDomain === "all" ||
                internship.domain === selectedDomain;


            return matchesSearch && matchesDomain;
        });


    displayInternships(filteredInternships);
}


// Search event
searchInput.addEventListener(
    "input",
    filterInternships
);


// Domain filter event
domainSelect.addEventListener(
    "change",
    filterInternships
);


// Display all internships when page loads
displayInternships(internships);