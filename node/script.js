const userLoggedIn = (ms) => new Promise((resolve) => setTimeout (resolve, ms));

userLoggedIn(3000).then(() => console.log("We're getting you logged in! :)"));

let loadSite = () => {
    console.log('Loading the site');
};

loadSite();