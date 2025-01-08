import mongoose, {Schema} from "mongoose";

const TrackHistorySchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true,'User is required'],
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

const TrackHistory = mongoose.model("TrackHistory", TrackHistorySchema);

export default TrackHistory;