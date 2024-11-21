const ParkingSpace = require("../models/ParkingSpaceModels");

const getAllSpaces = async (req, res) => {
    const spaces = await ParkingSpace.find();
    res.status(200).json(spaces);
};

const updateSpace = async (req, res) => {
    const { spaceId, isAvailable } = req.body;

    const space = await ParkingSpace.findOne({ spaceId });
    if (!space) return res.status(404).json({ message: "Space not found" });

    space.isAvailable = isAvailable;

    await space.save();
    res.status(200).json({ message: "Parking space updated", space });
};


const addSpace = async (req, res) => {
    const { spaceId, type } = req.body;

    const spaceExists = await ParkingSpace.findOne({ spaceId });
    if (spaceExists) return res.status(400).json({ message: "Space already exists" });

    const newSpace = new ParkingSpace({ spaceId, type });
    await newSpace.save();
    res.status(201).json({ message: "Parking space added", newSpace });
};

module.exports = { getAllSpaces, updateSpace, addSpace };