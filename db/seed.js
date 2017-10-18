require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise


const { User, Month, Expense } = require('./schema')

const expense = new Expense({
    date: 'January 2017',
    rent: 1000,
    gas: 400,
    grocery: 400,
    insurance: 500,
    internet: 80,
    phone: 100

})

const january = new Month({
    date: 'January 2017',
    salary: 5000,
    rental: 1000,
    investment: 3000,
    total:''
})


const user = new User({
    userName: 'Aaron Eckhart',
    password: 'iamjohn',
    email: 'john@gmail.com',
    street: '232 Cobb Parkway',
    city: 'Marietta',
    state: 'GA',
    zipcode: 30080,
    months: [january],
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