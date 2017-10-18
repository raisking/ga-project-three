const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    rent: {
        type: Number,
        required: true
    },
    gas: {
        type: Number,
        required: true
    },
    grocery: {
        type: Number,
        required: true
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