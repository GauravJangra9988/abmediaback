import mongoose from "mongoose";

const topDestinationSchema = new mongoose.Schema({
    destinationName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
    
})

const Destination = mongoose.model('Destination',topDestinationSchema);

export default Destination;