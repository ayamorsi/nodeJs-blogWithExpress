const express = require('express')
const UserModel = require('../models/users')

const router = express.Router()



router.get('/',(req, res) => {
  UserModel.find({}, 
  (err, users) => {
    if (!err) return res.json(users)
    return res.send(err)
  })
})

router.get('/:id',(req, res) => {
  UserModel.find({_id: req.params.id }, 
  (err, user) => {
    if (!err) return res.json(user)
    return res.send(err)
  })
})

router.post('/',(req, res) => {
  UserModel.create(req.body, 
  (err, user) => {
    if (!err) return res.json(user);
    return res.send(err)
  })
  // const fullName = userInstance.getFullName
})
router.patch('/:id',(req, res) => {
  UserModel.update({ _id: req.params.id}, { $set: req.body }, 
  (err, user) => {
    if (!err) return res.json(user)
    return res.send(err)
  })
})

router.delete('/:id',(req, res) => {
  UserModel.deleteOne({ _id: req.params.id}, 
    (err, user) => {
    if (!err) return res.json(user)
    return res.send(err)
  })
})

module.exports = router