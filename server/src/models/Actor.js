import mongoose from "mongoose";
const ActorScehema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    }
    },
);
export default mongoose.model('Actor', ActorScehema);