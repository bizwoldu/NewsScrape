//require mongoose//
var mongoose = require("mongoose");

//create schema class/

var Schema = mongoose.Schema;

//create article Schema//
var ArticleSchema = new Schema({
title: {
    type: String,
    required: true
},
link: {
    type: String,
    required: true
},
//save array of notes/

    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
}]
});

//create the artical model with the ArticalSchema

var Article = mongoose.model("Article", ArticleSchema);

//export the model//
module.exports = Article;