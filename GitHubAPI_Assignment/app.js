// Get the GitHub form
function display() {

    let x = document.forms["gitHub"]["username"].value;
     
    //const gitHubForm = document.getElementById('gitHub');

    // Listen for submissions on GitHub reponame input 
    //gitHubForm.addEventListener('submit', (e) => {

        // Prevent page from refreshing
        //n.preventDefault();

        // Get the GitHub username from the input field
        //let reponameInput = document.getElementById('reponameInput');

        // Get the value of reponameInput and store in a variable called gitHubRepoName
        //let gitHubRepoName = reponameInput.value;

        retrieveIssues(x);

   // });
}

const token = "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";


const retrieveIssues = async (name) => {

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
        displayResults(output);

    } catch (error) {
        console.log(error);
    }
}

const displayResults = (data) => {

    document.getElementById('userRepos').innerHTML = '';

    let card = [];
    // Use a for loop to iterate through the data
    for (let i in data) {

        //Locate the unordered list with its id
        let ul = document.getElementById('userRepos');

        //Create a list
        let li = document.createElement('li');

        //Add a class to the list
        li.classList.add('list-group-item')

        //Loop through the labes array which contains all the bug tags 
        for (let j in data[i].labels) {
            //Push all bug tags strings into the card array
            card.push(data[i].labels[j].name);
            //Use the map method to create a button for each bug tag
            //Use the html_url to link the button to the issue page
            let bugsHtml = data[i].labels.map((bug) => {
                return `<a href="${data[i].html_url}"target="_blank" ><button onMouseOver="this.style.backgroundColor='white'" onMouseOut="this.style.backgroundColor='#${bug.color}'" style="background-color:#${bug.color}" type="button" >${bug.name}</button></a>`;

            });
            //Join the array into a string
            bugsHtml = bugsHtml.join('');



            // Add the title, User and buttons to the list
            li.innerHTML = (`
        
            <p><strong>Title:</strong> ${data[i].title}</p>
            <p><strong>User:</strong> ${data[i].user.login}</p>
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <p><strong>Bugs:</strong></p>${bugsHtml}
            </div>                        
        

        `);
        }


        //Append the list to the unordered list(bullet list)
        ul.appendChild(li);


    }
}