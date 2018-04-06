// The goal is render a github informations on a page with:
// Promises, Map and Reduce.
var div = document.getElementById("container");

function GitHubUser (username) {
   this.username = username;
}

function getUserInformation(user) {
    return fetch('https://api.github.com/users/' + user.username)
        .then(resp => {
            return resp.json();
        });
};

function getRepos(user) {
  // console.log(user.user.repos_url); // === 'https://api.github.com/users/'
    return fetch(user.user.repos_url)
        .then(resp => {
            return resp.json();
        });

}

function Render(user) {
    // Array of Repository Objects
  //  user.repos
    
    user.repos.map((e) => {
        let divTag = document.createElement("div");
        let divTag1 = document.createElement("div");
        let divTag2 = document.createElement("div");
        let divTag3 = document.createElement("div");
        divTag.className = "info";
        divTag1.className = "name";
        divTag2.className ="fork";
        divTag3.className ="stars";
        divTag1.innerHTML = e.name;
        divTag2.innerHTML = "forks : " + e.forks_count;
        divTag3.innerHTML = "stars : " + e.stargazers_count;
        
        div.appendChild(divTag);
        divTag.appendChild(divTag1);
        divTag.appendChild(divTag2);
        divTag.appendChild(divTag3);
    });
        
   
}


// Expecting
let gitUser = new GitHubUser('ideabile');

getUserInformation(gitUser)
    .then(function (userInfo) {
        gitUser.user = userInfo;
        return getRepos(gitUser);
    })
    .then(repos => {
        gitUser.repos = repos;
        console.log(repos);
        Render(gitUser);
    });

