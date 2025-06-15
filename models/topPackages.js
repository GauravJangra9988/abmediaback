import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true,
    },
    
})

const Package = mongoose.model('Package',packageSchema);

export default Package;