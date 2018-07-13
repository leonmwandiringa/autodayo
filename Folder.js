/**
 * @author Leon Mwandiringa
 * @uses define and run Folders Mongo model
 * @return Model and schema object
 */

let mongoose = require("mongoose");
//import { model, Schema } from "mongoose";

const FoldersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    types: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Folder = mongoose.model("Folder", FoldersSchema);

module.exports = Folder;
