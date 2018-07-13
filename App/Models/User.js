/**
 * @author Leon Mwandiringa
 * @uses define and run Wallpaper Mongo model
 * @return Model and schema object
 */

let mongoose = require("mongoose");
//import { model, Schema } from "mongoose";

const WallpaperSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    folder: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    images: {
        wide: String,
        standard: String,
        mobile: String,
        tablet: String,
        xboxone: String
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    platform: {
        type: String,
        required: false
    },
    bigid: {
        type: String,
        required: false
    },
    downloads: {
        type: Number,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    lastupdatedby: {
        type: String,
        required: false,
        default: 'null'
    },
    status: {
        type: String,
        required: true,
        enum: ['PREVIEW', 'LIVE'],
        default: 'PREVIEW'
    }
}, { timestamps: true });

const Wallpaper = mongoose.model("Wallpaper", WallpaperSchema);

module.exports = Wallpaper;