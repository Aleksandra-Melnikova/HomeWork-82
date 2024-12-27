import mongoose, {Schema} from "mongoose";

const TrackSchema = new mongoose.Schema({
    album:{
        type: Schema.Types.ObjectId,
        ref: "Album",
        required: [true,'Album is required'],
    },
    name: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const Track = mongoose.model("Track", TrackSchema);

export default Track;