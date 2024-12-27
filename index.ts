import express from "express";
import * as mongoose from "mongoose";
import artistsRouter from "./routers/artists";
import albumsRouter from "./routers/albums";


const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));


app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);
// app.use('/tracks', tracksRouter);


const run = async () => {
await mongoose.connect('mongodb://localhost/spotify');

    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    });
};

run().catch(err => console.log(err));


