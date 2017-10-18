require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise


const { User, Month, Expense } = require('./schema')

const expense = new Expense({
    rent: 990,
    gas: 900,
    grocery: 690
})

const january = new Month({
    title: 'January Expenses',
    description: 'This is January Expenses'
})
const feb = new Month({
    title: "Feb Expenses",
    description: "This is Feb Expenses"
})

const user = new User({
    userName: 'Aaron Eckhart',
    password: 'iamjohn',
    address: 'Marietta',
    email: 'john@gmail.com',
    months: [january, feb],
    expenses: [expense]
})

//User promises to make sure remove is run first, then saves new user
User.remove({})
    .then(() => user.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())

    .then(() => january.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())

    .then(() => expense.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())