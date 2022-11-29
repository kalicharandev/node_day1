import fetch from 'node-fetch';
//let fetch = require ("node-fetch");
fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => {
        // console.log("First user in the array:");
        console.log(json);
        // console.log("Name of the first user in the array:");
        // console.log(json[0].name);
});

// async function getWeatherData(){
//     const response = await fetch('https://api.github.com/users/github');
//     const data = await response.json();
//     console.log(data);
// }

// fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => console.log(text));


// getWeatherData.then(data => console.log (data));
