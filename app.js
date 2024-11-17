//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(__dirname + "/public")); // Serve static files like CSS and JS

let authentic = false;

// Middleware to check password
function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") { // Replace with your desired password
        authentic = true;
    }
    next();
}

// Route to serve the main login page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // Updated path for your HTML
});

// Route to handle form submission
app.post("/check", checkPassword, (req, res) => {
    if (authentic) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        
        res.redirect("/"); // Redirect to login on failure
    }
});

// Start server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
