const express = require('express')
const router = express.Router({mergeParams: true})
const {User, Expense} = require('../db/schema')

router.post('/', async (req, res) => {
    try {
        //create an empty expense model
        //the default values will take over for title and description
        const newExpense = new Expense()
        //find the user coming from the route
        const user = await User.findById(req.params.userId)
        //push the new expense into user's list of expenses
        user.expenses.push(newExpense)
        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        console.log(err)
    }     
})
router.patch('/:id', async (req, res) => {
    console.log(req.body)
    const updateExpense = req.body.expense
    const user = await User.findById(req.params.userId)
    const expense = user.expenses.id(req.params.id)
    expense.date=updateExpense.date
    expense.rent= updateExpense.rent
    expense.gas = updateExpense.gas
    expense.grocery= updateExpense.grocery
    expense.insurance = updateExpense.insurance
    expense.internet= updateExpense.internet
    expense.phone = updateExpense.phone
    const saved = await user.save()
    res.json(saved)
})

router.delete('/:id', async(req, res) => {
    const user = await User.findById(req.params.userId)
    user.expenses.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
})

module.exports = router;