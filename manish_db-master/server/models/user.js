let mongoose = require('mongoose')

let User = mongoose.model('User', {
    username:{
        type:String
    },
    password:{
        type:String
    },
    education:{
        type:String
    },
    age:{
        type:Number
    },
    university:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports = { User }