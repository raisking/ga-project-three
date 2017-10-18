const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    rent: {
        type: Number,
        required: false
    },
    gas: {
        type: Number,
        required: false
    },
    grocery: {
        type: Number,
        required: false
    },
    insurance: {
        type: Number,
        required: false
    },
    internet: {
        type: Number,
        required: false
    },
    phone: {
        type: Number,
        required: false
    }

})
const monthSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'New Month'
    },
    description: {
        type: String,
        default: 'New Month'
    }
})
const userSchema = mongoose.Schema({
    userName: String,
    password: String, //for mook log-in 
    address: String,
    email: String,
    months: [monthSchema],
    expenses: [expenseSchema]
})
const User = mongoose.model('User', userSchema)
const Month = mongoose.model('Model', monthSchema)
const Expense = mongoose.model('Expense', expenseSchema)

module.exports = {
    User, Month, Expense
}   