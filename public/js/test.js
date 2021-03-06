// This list should be in the backend stored into a database
let resources  = {
    one: {
        title: "Learn You A Haskell",
        tags: ["Tecnology", "Computer Science", "Functional Programming", "Haskell"],
        author: "Miran Lipovača",
        uploader: "admin",
        link: "http://learnyouahaskell.com/chapters",
        description: "Hey yo! This is Learn You a Haskell, the funkiest way to learn Haskell, which is the best functional programming language around. You may have heard of it. This guide is meant for people who have programmed already, but have yet to try functional programming. The whole thing is completely free to read online, but it's also available in print and I encourage you to buy as many copies as you can afford!"
    },
    two: {
        title: "The C Programming Language",
        tags: [
            "Tecnology",
            "Computer Science",
            "Programming",
            "C lang"
        ],
        author: "Brian Kernighan, Dennis Ritchie",
        uploader: "admin",
        link: "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxnanVoYWN8Z3g6NTFiY2ExMDdkYTI5YmRmZA",
        description: "The C Programming Language is a computer programming book written by Brian Kernighan and Dennis Ritchie, the latter of whom originally designed and implemented the language, as well as co-designed the Unix operating system with which development of the language was closely intertwined. From Wikipedia."
    }
}

function populateResource(id) {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let link = document.getElementById("link");
    let tags = document.getElementById("tags");
    let description = document.getElementById("description");
    let content = document.getElementById("content");
    let selection = document.getElementById("select-resource");

    for(let key in resources){
        if (key == id){
            title.innerHTML = resources[id].title;
            author.innerHTML += resources[id].author;
            link.innerHTML = "Link: <a href='" + resources[id].link + "'>" + resources[id].title + "</a";
            for(let tag of resources[id].tags){
                tags.innerHTML += "<a class='tag'>" + tag + "</a>";
            }
            description.innerHTML += resources[id].description;
        }
    }

    selection.hidden = true;
    content.hidden = false;
}

window.onload = function() {
    let list = document.getElementById("res-list");

    for(let key in resources) {
        let entry = document.createElement("li");
        entry.setAttribute("class", "res-entry");
        entry.setAttribute("id", key);
        entry.innerHTML = resources[key].title + "<br>By " + resources[key].author;

        entry.addEventListener("click", function(){
            populateResource(key);
        });

        list.appendChild(entry);
    }
}
