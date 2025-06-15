import Destination from "../models/topDestinations.js";

export const getDestinations = async (req, res) => {
    try {
        const topDestinations = await Destination.find();
        res.status(200).json(topDestinations);
    } catch (error) {
        res.status(500).json({ message: "Error fetching top destinations", error: error.message });
    }
};