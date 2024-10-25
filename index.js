const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Express on Vercel with serverless + Render with server."));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

module.exports = app; // No app.listen() needed for serverless
