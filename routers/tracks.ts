import express from "express";
import Album from "../models/Album";
import {imagesUpload} from "../multer";
import { TrackInterfaceWithoutId} from "../types";
import Track from "../models/Track";
const tracksRouter = express.Router();


tracksRouter.get('/', async (req, res, next) => {
    try {
        const idQuery = req.query.album as string;
        if(idQuery){
            const tracks = await Track.find({album: idQuery});
            console.log(tracks);
            if(tracks.length === 0){
                res.status(404).send({error:"Not found"});
            }
            else{
                res.send(tracks);
            }}
        else{
            const albums = await Track.find();
            res.send(albums);
        }} catch (e) {
        next(e);
    }
});

tracksRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
    if (req.body.album) {
        const artist = await Album.findById(req.body.album);
        if (!artist) res.status(404).send('Not Found album');
    }

    const newTrack:  TrackInterfaceWithoutId  = {
        album: req.body.album,
        name: req.body.name,
        time: req.body.time,
    };

    try {
        const track = new Track(newTrack);
        await track.save();
        res.send(track);
    }

    catch (e) {
        next(e);
    }
});
//
export default tracksRouter;