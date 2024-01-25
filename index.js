import express from "express";
const app = express();

// Implement route with parameter
app.get("/user/:username", (req, res) => {
// Access parameter via URL
    const username = req.params.username;
// Personalize response to username
    res.send(`Hello ${username}`);
});
// 404 error for invalid routes
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});
// Set server to listen on provided port or default to 3000 and log confirmation
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});