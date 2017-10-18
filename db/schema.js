const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    date:{
        type: String,
        required: false,
        default: 'New Month'
    },
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
    date:{
        type: String,
        required: false,
        default: 'New Month'
    },
    salary: {
        type: Number,
        required: false
    },
    rental: {
        type: Number,
        required: false
    },
    investment: {
        type: Number,
        required: false
    },
    total: {
        type: Number,
    }
})
const userSchema = mongoose.Schema({
    userName: String,
    password: String, //for mook log-in 
    email: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    months: [monthSchema],
    expenses: [expenseSchema]
})
const User = mongoose.model('User', userSchema)
const Month = mongoose.model('Model', monthSchema)
const Expense = mongoose.model('Expense', expenseSchema)

module.exports = {
    User, Month, Expense
}   