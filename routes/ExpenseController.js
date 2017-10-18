const express = require('express')
const router = express.Router({mergeParams: true})
const {User, Expense} = require('../db/schema')

router.post('/', async (req, res) => {
    //create an empty expense model
    //the default values will take over for title and description
    const newExpense = new Expense()
    //find the user coming from the route
    const user = await User.findById(req.params.userId)
    //push the new expense into user's list of expenses
    user.expenses.push(newExpense)
    const saved = await user.save()
    res.json(saved)
    
})
router.patch('/:id', async (req, res) => {
    console.log(req.body)
    const updateExpense = req.body.expense
    const user = await User.findById(req.params.userId)
    const expense = user.expenses.id(req.params.id)
    expense.title = updateExpense.title
    expense.description = updateExpense.description
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