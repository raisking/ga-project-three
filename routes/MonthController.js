const express = require('express')
const router = express.Router({mergeParams: true})
const {User, Month} = require('../db/schema')

router.post('/', async (req, res) => {
    //create an empty month model
    //the default values will take over for title and description
    const newMonth = new Month()
    //find the user coming from the route
    const user = await User.findById(req.params.userId)
    //push the new month into user's list of months
    user.months.push(newMonth)
    const saved = await user.save()
    res.json(saved)
    
})
router.patch('/:id', async (req, res) => {
    console.log(req.body)
    const updateMonth = req.body.month
    const user = await User.findById(req.params.userId)
    const month = user.months.id(req.params.id)
    month.date = updateMonth.date
    month.salary =    updateMonth.salary
    month.rental = updateMonth.rental
    month.investment = updateMonth.investment
    month.total = updateMonth.total
    const saved = await user.save()
    res.json(saved)
})

router.delete('/:id', async(req, res) => {
    const user = await User.findById(req.params.userId)
    user.months.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
})
module.exports = router;