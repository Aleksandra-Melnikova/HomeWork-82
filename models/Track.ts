import mongoose, {Schema} from "mongoose";

const TrackSchema = new mongoose.Schema({
    album:{
        type: Schema.Types.ObjectId,
        ref: "Album",
        required: [true,'Album is required'],
    },
    track:{
        type: Schema.Types.ObjectId,
        ref: "Track",
        required: [true,'Track is required'],
    },
    datetime: {
        type: Date,
        required: true,
    },
});

const Track = mongoose.model("Track", TrackSchema);

export default Track;