$(document).ready(function() {
    footerLink();
});

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for(var i = 0; i < myObj.length; i++) {
            addRepo(myObj[i].name);
        }
    }
};

newRequest.open("GET", "https://api.github.com/users/ClaytonHebbe96/repos", true);
newRequest.send();

// Repo AJAX request
const addRepo = (name) => {
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}

// Footer Link Animations
const footerLink = () => {
    $("#github").hover(function() {
        $("#githubIcon").animate({height: '100px', width: '100px'});
    }, function() {
        $("#githubIcon").animate({height: '50px', width: '50px'});
    });

    $("#linkedin").hover(function() {
        $("#linkedinIcon").animate({height: '100px', width: '100px'});
    }, function() {
        $("#linkedinIcon").animate({height: '50px', width: '50px'});
    });

    $("#facebook").hover(function() {
        $("#facebookIcon").animate({height: '100px', width: '100px'});
    }, function() {
        $("#facebookIcon").animate({height: '50px', width: '50px'});
    });

    $("#instagram").hover(function() {
        $("#instagramIcon").animate({height: '100px', width: '100px'});
    }, function() {
        $("#instagramIcon").animate({height: '50px', width: '50px'});
    });

    $("#twitter").hover(function() {
        $("#twitterIcon").animate({height: '100px', width: '100px'});
    }, function() {
        $("#twitterIcon").animate({height: '50px', width: '50px'});
    });
}