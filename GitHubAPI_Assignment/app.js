// Get the GitHub form
const gitHubForm = document.getElementById('gitHub');

// Listen for submissions on GitHub reponame input 
gitHubForm.addEventListener('submit', (e) => {

    // Prevent page from refreshing
    e.preventDefault();

    // Get the GitHub username from the input field
    let reponameInput = document.getElementById('reponameInput');

    // Get the value of reponameInput and store in a variable called gitHubRepoName
    let gitHubRepoName = reponameInput.value;

    requestReposIssues(gitHubRepoName);

});

const token = "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";


const requestReposIssues = async (name) => {

    try {
        //Use aync await to fetch the data from the GitHub API
        let response = await fetch(`https://api.github.com/repos/${name}/issues`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                //Kept running into status 401 error so I commented it out
                //'Authorization': `token ${token}`
            }

        });

        let output = await response.json();
        console.log(output);
        //Call teh formatResults function and pass in the output to display the results on the html page
        formatResults(output);

    } catch (error) {
        console.log(error);
    }
}

const formatResults = (data) => {
    // Use a for loop to iterate through the data
    for (let i in data) {

        //Locate the unordered list with its id
        let ul = document.getElementById('userRepos');

        //Create a list
        let li = document.createElement('li');

        //Add a class to the list
        li.classList.add('list-group-item')

        //console.log(data[i].title);
        // Add the title, User and URL datas to the list
        li.innerHTML = (`
            <p><strong>Title:</strong> ${data[i].title}</p>
            <p><strong>User:</strong> ${data[i].user.login}</p>
            <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
        `);
        //Append the list to the unordered list(bullet list)
        ul.appendChild(li);

    }
}