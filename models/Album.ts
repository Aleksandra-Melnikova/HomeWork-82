import mongoose, {Schema} from "mongoose";

const AlbumSchema = new mongoose.Schema({
    artist:{
        type: Schema.Types.ObjectId,
        ref: "Artist",
        required: [true,'Artist is required'],
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: String,
        required: true,
    },
    image:String,
});

const Album = mongoose.model("Album", AlbumSchema);

export default Album;