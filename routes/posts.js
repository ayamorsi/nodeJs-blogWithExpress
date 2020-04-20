const express = require('express')

const router = express.Router()



router.get('/posts',(req, res) => {
    PostModel.find({}, 
        (err, posts) => {
          if (!err) return res.json(posts)
          return res.send(err)
        })
})

router.get('/posts/:id',(req, res) => {
    PostModel.find({_id: req.params.id }, 
        (err, post) => {
          if (!err) return res.json(post)
          return res.send(err)
        })
})

router.post('/posts',(req, res) => {
    PostModel.create(req.body, 
        (err, post) => {
          if (!err) return res.json(post);
          return res.send(err)
        })
})
router.patch('/posts/:id',(req, res) => {
    PostModel.update({ _id: req.params.id}, { $set: req.body }, 
        (err, post) => {
          if (!err) return res.json(post)
          return res.send(err)
        })
})

router.delete('/posts/:id',(req, res) => {
    PostModel.deleteOne({ _id: req.params.id}, 
        (err, post) => {
        if (!err) return res.json(post)
        return res.send(err)
      })
})

module.exports = router