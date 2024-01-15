const searchButton = document.querySelector("#searchButton");
const inputJob = document.querySelector("#inputJob");
const inputLocation = document.querySelector("#inputLocation");
const resultsContainer = document.createElement("div");
resultsContainer.setAttribute("id", "resultsContainer");
document.body.append(resultsContainer);

function searchJobAndLocation(title, location) {
    title = title.toLowerCase();
    location = location.toLowerCase();

    const results = [];

    if (title !== "" && location !== "") {
        jobs.forEach(job => {
            const jobTitle = job.title.toLowerCase();
            const jobLocation = job.location.toLowerCase();
            if (jobTitle.includes(title) && jobLocation.includes(location)) {
                results.push(job);
            }
        });
    }

    if (results.length > 0) {
        return {
            count: results.length,
            results
        };
    } else {
        return {
            count: 0,
            message: "We are sorry, we do not have any offer for you at the moment"
        };
    }
}

function search() {
    const title = document.querySelector("#inputJob").value;
    const location = document.querySelector("#inputLocation").value;

    const searchResult = searchJobAndLocation(title, location);
    return searchResult;
}

searchButton.addEventListener("click", function () {
    resultsContainer.innerHTML = "";
    showResults(search());
});

function showResults(searchResults) {
    if (searchResults.count === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = searchResults.message;
        resultsContainer.append(noResultsMessage);
    } else {
        searchResults.results.forEach(searchItem => {
            const itemList = document.createElement("li");
            itemList.innerHTML = `Job:  ${searchItem.title}, Location:  ${searchItem.location}`;
            resultsContainer.append(itemList);
        });
    }
}

function clearJobField() {
    inputJob.placeholder = "";
    inputJob.value = "";
}

function clearLocationField() {
    inputLocation.placeholder = "";
    inputLocation.value = "";
}

inputJob.addEventListener("focus", function () {
    clearJobField();
});

inputLocation.addEventListener("focus", function () {
    clearLocationField();
});