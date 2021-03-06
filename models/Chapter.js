const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    sourceChoice: {
        type: String
    },
    chapterTitle: {
        type: String,
        required: 'This chapter needs a title'
    },
    body: {
        type: String
    },
    pages: {
        type: Number
    },
    wordCount: {
        type: Number
    },
    rating: {
        type: String,
        required: 'Please enter a rating for this chapter'
    },
    author: {
        type: String
    },
    // images: {
    //     type: Map,
    //     of: String
    // },
    // soundFiles: {
    //     type: Map,
    //     of: String
    // },
    readerChoices: {
        type: Map,
        of: String
    },
    storyId: {
        type: Number
    },
    isContribution: {
        type: Boolean,
        required: "Is this chapter a contribution to another Author's work?"
    },
    timestamps: true,
})

const Chapter = mongoose.model("Chapter", ChapterSchema);

module.exports = Chapter;