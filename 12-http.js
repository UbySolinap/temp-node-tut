const http = require("http");

// Create own server
const server = http.createServer((req, res) => {
  // Checks of the url is in home page
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is an about section.");
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Go back to home page</a>`);
});

// Set up port to listen to 5000
server.listen(5000);
