let div = document.getElementById("container");
let btn = document.querySelector('button');
let div2 = document.getElementById("main");
let div3 = document.getElementById("second");
let div4 = document.getElementById("zar3");
let div5 = document.getElementById("contrib");
let div6 = document.getElementById("avatar");
let btn3 = document.getElementById('info1');
let myValue = document.getElementById('myBox');
let dataSaved = undefined;

// fetch All repository data 
btn.onclick = function(){
    while (div2.hasChildNodes()){
        div2.removeChild(div2.lastChild)
    }
     fetch("https://api.github.com/orgs/SocialHackersCodeSchool/repos")
       .then(function(response) {
         // console.log(response);
          return response.json();
       })
       .then(function(data) {
        //console.log(data);
          let string = JSON.stringify(data);
            dataSaved = data;
    
          data.forEach(function(pra){
            makeButton(pra);
          })
      });
}

//Create buttons for each repository depend on repos. name and fetch url for every repo. name
function makeButton(repository){
      let btn2 = document.createElement('button');
      let aTag = document.createElement('a');
          btn2.innerHTML = (("Open Reops.")) + " " + repository.name;
          aTag.innerHTML = ("https://api.github.com/repos/SocialHackersCodeSchool/" + repository.name);
          aTag.setAttribute('href', 'https://api.github.com/repos/SocialHackersCodeSchool/' + repository.name, '_blank')
          aTag.target = ('_blank');
          btn2.className = ('zar2');
          aTag.className = ('link');
          div2.appendChild(btn2);
          div2.appendChild(aTag); 
    
       btn2.onclick = function(){
        
         fetch("https://api.github.com/repos/SocialHackersCodeSchool/" + repository.name)
            .then(function(response){
                return response.json();
            })
          
            .then(function(repo){
                let string = JSON.stringify(repo);
                div3.innerHTML = (string);
             
                getContributors(repo);
            })
       
            
       };
}

//Make for each repository connection with contibuters name and image using avatar_url
function getContributors(repository){
    while (div5.hasChildNodes()){
        div5.removeChild(div5.lastChild)
    }
    while (div6.hasChildNodes()){
        div6.removeChild(div6.lastChild)
    }
    fetch (repository.contributors_url)
        .then(function(request){
            return request.json();
    })
        .then(function(repo){

        for (let i = 0; i < repo.length; i++){
            let pTag = document.createElement("p");
            let imgTag = document.createElement("img");
            imgTag.className = ("photo");
            imgTag.src = repo[i].avatar_url;
            pTag.innerHTML += repo[i].login;
            div5.appendChild(pTag);
            imgTag.innerHTML = repo[i].avatar_url;
            div6.appendChild(imgTag);
            
        }
    })
}
//make function addEventListener when click search button execute repository data    
btn3.addEventListener ('click', substitut);
    
    function substitut (){
         fetch("https://api.github.com/orgs/SocialHackersCodeSchool/repos")
            .then (function(response){
                return response.json();
            })
             // Array of Repositories
            .then (function(repositories){
        
         for(let i = 0; i < repositories.length; i++){
            let string = JSON.stringify(repositories[i]);
            
           if (myValue.value == repositories[i].name) {
                div3.innerHTML = (string);
                return;
           } 
         }
         
           alert ('Please overwrite correct Repos. name');
             
           });
     }
    
    
 
     
        

