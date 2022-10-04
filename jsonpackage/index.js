// Importing http module from node.js to our project
const http = require("http");
const PORT = 5000;

// Create a server 
const server = http.createServer((request, response) => {
    response.setHeader('Content-type', "text/html");

    if (request.url === "/dogs") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve

        // We are sending a response to the client/browser using response.write
        response.write("<img src='https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg'>")

        // Ending the response
        response.end();
    }

    if (request.url === "/cats") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve

        // We are sending a response to the client/browser using response.write
        response.write("<img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg'>")

        // Ending the response
        response.end();
    }
})

// Listen a server
server.listen(PORT, () => {
    console.log("My Server is running on port", PORT);
})