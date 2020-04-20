const express = require('express')
const PostModel = require('../models/posts')
const router = express.Router()



router.get('/',(req, res) => {
    PostModel.find({}, 
        (err, posts) => {
          if (!err) return res.json(posts)
          return res.send(err)
        })
})

router.get('/:id',(req, res) => {
    PostModel.find({_id: req.params.id }, 
        (err, post) => {
          if (!err) return res.json(post)
          return res.send(err)
        })
})

router.post('/',(req, res) => {
    PostModel.create(req.body, 
        (err, post) => {
          if (!err) return res.json(post);
          return res.send(err)
        })
})
router.patch('/:id',(req, res) => {
    PostModel.update({ _id: req.params.id}, { $set: req.body }, 
        (err, post) => {
          if (!err) return res.json(post)
          return res.send(err)
        })
})

router.delete('/:id',(req, res) => {
    PostModel.deleteOne({ _id: req.params.id}, 
        (err, post) => {
        if (!err) return res.json(post)
        return res.send(err)
      })
})

module.exports = router