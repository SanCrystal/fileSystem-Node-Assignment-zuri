//fetch json data from a JSON placeholder api and writes it to a file
let fetch = require("node-fetch");
//require the fs module
let fs = require("fs");
//API source URL
let source = "http://jsonplaceholder.typicode.com/posts";
let fetchHeaders = { "Content-Type": "application/json" }


let fetchJson = async(urlPath) => {
    //fetch data from the source URL
    let response = await fetch(urlPath, fetchHeaders);
    let data = await response.json();
    return data;
};
let writeTofile = (filePath, file) => {
    fs.writeFile(__dirname + filePath, file, (err) => {
        if (err) {
            return "error: " + err;

        }
    });
}

// async function fetchJson(url) {
//     let response = await fetch(url, fetchHeaders);
//     let mod = await response.json();
//     console.log(response);
// }

fetchJson(source).then(data => {
    let jsonFile = JSON.stringify(data);
    return jsonFile;
}).then(data => {
    //writeToFile
    writeTofile("/result/posts.json", data);

});