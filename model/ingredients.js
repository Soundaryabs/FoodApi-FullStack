//db schema design

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//declare collection and types

let Ingredients = new Schema(
    {
        ingredient_id:{
            type:Number,
        },
        name:{
            type:String,
        },
        photo_url:{
            type:String,
        },
    },
    {
        collection:"ingredients", //field name in DB
    }
);

module.exports = mongoose.model("Ingredients",Ingredients);