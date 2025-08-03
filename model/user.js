import mongoose from "mongoose";
import express from "express";

const loveSchema = new mongoose.Schema({
    boyname:{
        type: String,
        required: true
    },
    girlname:{
        type: String,
        required: true
    },
    lovepercentages:{
        type: Number,
        default: 0
    },
    girlimages:{
        type: String
    },
    boyimages:{
        type: String
    }
},{
    timestamps: true
})

const Love = mongoose.model('Love', loveSchema);
export default Love;