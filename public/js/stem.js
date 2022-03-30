import db from database.js

document.onload = function() {
    db.getAllResources(function(result){
        let div = document.getElementById("resources");
        let res = document.createElement("span");

        for(let resId in result){
            res.innerHTML = result[resId].title;
            div.appendChild(res);
        }
    });
}
