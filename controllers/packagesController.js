import Package from "../models/topPackages.js";

export const getTopsellingPackages = async (req, res) => {
    try {
        const topPackages = await Package.find();
        res.status(200).json(topPackages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching top selling packages", error: error.message });
    }
};


