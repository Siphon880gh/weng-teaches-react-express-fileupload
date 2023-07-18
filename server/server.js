const express = require("express");
const server = express();
const path = require("path");
const fileUpload = require("express-fileupload")

// Boilerplate: Middleware to parse JSON fetch body and URL-encoded form data
// Boilerplate: Middleware to respond with static files after page is loaded
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "..", "client", "build")));

server.use(fileUpload());

// Routes
server.post("/uploads", async (req, res) => {
    if(req.files === null) {
        return res.status(400).json({error: "No file uploaded from frontend"})
    }

    const file = req.files.media;

    // express-fileupload has a file.mv that moves files
    // https://www.npmjs.com/package/
    file.mv(path.join(__dirname, "..", "client", "build", "uploads", file.name), err=>{
        if(err) {
            console.error(err);
            res.status(500).send(err)
        }

        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    })
});

server.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
});

async function startServer() {
    let port = process.env.PORT || 3001;

    server.listen(port, () => {
        console.log(`Server listening at ${port}`);
    });
}

startServer();