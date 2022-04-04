import express from "express";
const app = express();

// import express seteaza serveru 




//------------------------------------

let port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port} `, server.address().port);
});