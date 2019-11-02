let mongoose = require('mongoose')

let Disease = mongoose.model('Disease', {
    did:{
        type:String
    },
    diseasename:{
        type:String
    },
    organism:{
        type:String
    },
    symptoms:{
        type:String
    },
    medicine:{
        type:String
    },
    prevention:{
        type:String
    },
    reference:{
        type:String
    },
    status:{
        type:Boolean
    },
})

module.exports = { Disease }