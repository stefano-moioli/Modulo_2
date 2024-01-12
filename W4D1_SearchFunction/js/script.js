const searchButton = document.querySelector("#searchButton");
const inputJob = document.querySelector("#inputJob");
const inputLocation = document.querySelector("#inputLocation");

const results = [];

function searchJobAndLocation(title, location){
    title = title.toLowerCase();
    location = location.toLowerCase();
    
    jobs.forEach(job => {
    const jobTitle = job.title.toLocaleLowerCase();
    const jobLocation = job.location.toLocaleLowerCase();
    if(jobTitle.includes(title) && jobLocation.includes(location)){
    results.push(job);
    }
    });
    return {
        count: results.lenght,
        results
    }
}