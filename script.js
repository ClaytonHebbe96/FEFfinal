$(document).ready(function() {
    footerLink();
});

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