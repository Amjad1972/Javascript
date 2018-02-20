/*jslint plusplus:true,eslint plusplus:true*/
/*global console, alert, prompt */
/*
//run a fuction on the whole DOM
    (function(){
        //write all code here and it will run on start up
        
        //get the <div> tag from the HTML page
        let div = document.getElementById("container");
        
        //creat the <p> <h1> tags in javascript only
         let pTag = document.createElement("p");
         let hTag = document.createElement("h1");
        //create a div tag and give it the className
         let divTag = document.createElement("div");
         divTag.className = "myBooks";
        //create ul tag 
        let ulTag = document.createElement("ul");
        //for each element in this array, create a li tag and add it
        ["Book One", "Book Two", "Book Three", "Book Four"].forEach(function(e){
            let liTag = document.createElement("li");
            liTag.innerHTML = e;
            ulTag.append(liTag);
        })
        
        //set the all tags to have the textin HTML
        pTag.innerHTML = "hello";
        pTag.style.color = "blue";
        hTag.innerHTML = "My Website";
       
        //adds the <p> tag to th HTML page
        div.append(pTag);
        div.append(hTag);
        div.append(divTag);
                
    })(); */
/*
let recipe = {
    name: "Cake",
    ingredients: [{
        name: "milk",
        amount: 300
    }, {
        name: "flour",
        amount: 200
    }, {
        name: "sugar",
        amount: 100
    }],
    steps: ["Get all the ingredients", "Mix them all together", "Cook Them", "Make a cake"]
};

(function() {
    
        let div = document.getElementById("container");
        let h1Tag = document.createElement("h1");
        h1Tag.innerHTML = recipe.name;
        div.append(h1Tag);
        let ul = document.createElement("ul");
        div.append(ul);
    for(i = 0; i < recipe.ingredients.length; i++){
        //create an li element in javascript 
        let li = document.createElement("li");
        //set the text of the li element to the name and amount of ingredient
        li.innerHTML = recipe.ingredients[i].name + " " + recipe.ingredients[i].amount;
        //add the li element to ul 
        ul.append(li);
    }
        

})(); */

 var id = ["id_book_one", "id_book_two", "id_book_three", "id_book_four", "id_book_five", "id_book_six", "id_book_seven", "id_book_eight", "id_book_nine", "id_book_ten"];

//Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's.

//Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

(function(){
    
    var div = document.getElementById("container");
    
    let h1Tag = document.createElement("h1");
    h1Tag.className = "address";
    div.append(h1Tag);
    h1Tag.innerHTML = "My Books";
   
    let ulTag = document.createElement("ul");
    ulTag.className = "number";
    div.append(ulTag);
    
    for (let i = 0; i < id.length; i++){
    let liTag = document.createElement("li");  
    liTag.innerHTML = id[i];
    ulTag.append(liTag);
    }
 
})();

//Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.

//Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

let information = {
    "id_book_one": {
        "name": "Intermediate Accounting",
        "language": "English",
        "author": "Donald Kieso"
    },
    "id_book_two": {
        "name": "Cost Accounting",
        "language": "English",
        "author": "George Foster"
    },
    "id_book_three": {
        "name": "International Accountiong Standards",
        "language": "Arabic",
        "author": "Tala Abu Ghazaleh"
    },
    "id_book_four": {
        "name": "Accounting Principles",
        "language": "Arabic",
        "author": "Aljoman_Sarh"
    },
    "id_book_five": {
        "name": "CMA Review Cource Part1",
        "language": "English",
        "author": "Becker Conviser"
    },
    "id_book_six": {
        "name": "CMA Review Cource Part2",
        "language": "English",
        "author": "Becker Conviser"
    },
    "id_book_seven": {
        "name": "CMA Review Cource Part3",
        "language": "English",
        "author": "Becker Conviser"
    },
    "id_book_eight": {
        "name": "CMA Review Cource Part4",
        "language": "English",
        "author": "Becker Conviser"
    },
    "id_book_nine": {
        "name": "Financial Accounting",
        "language": "English",
        "author": "Cambridge Business Publishers"
    },
    "id_book_ten": {
        "name": "Managerial Accounting",
        "language": "English",
        "author": "L Hartgraves"
    },
};       

let images = {
    "id_book_one": "intermediate.jpg",
    "id_book_two": "cost.jpg",
    "id_book_three": "talal_abu_ghazaleh.png",
    "id_book_four": "principles.jpg",
    "id_book_five": "CMA.jpg",
    "id_book_six": "CMA.jpg",
    "id_book_seven": "CMA.jpg",
    "id_book_eight": "CMA.jpg",
    "id_book_nine": "financial.jpg",
    "id_book_ten": "managerial.jpg"
};

(function(){
    
    var div = document.getElementById("container");
    
    let h2Tag = document.createElement("h1");
    h2Tag.className = "info";
    div.append(h2Tag);
    h2Tag.innerHTML = "Books Informations";
    
       for (var key in information){
            if (!information.hasOwnProperty(key))continue;
            let ul2Tag = document.createElement("ul");
            ul2Tag.className = "cover";
            div.append(ul2Tag);
            ul2Tag.innerHTML = (key);
                   
        var obj = information[key];
        for (var prop in obj){
            if (!obj.hasOwnProperty(prop))continue;
            let liTag = document.createElement("li");
            liTag.innerHTML = (prop + " : " + obj[prop]);
            ul2Tag.append(liTag);
        }
        
            let imageTag = document.createElement("img"); 
            imageTag.className = "photo";
            imageTag.src = images[key];
            ul2Tag.append(imageTag);
    }  
    
        
})();

















