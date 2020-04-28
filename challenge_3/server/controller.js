const helper = require('../db/helpers.js')

const controller = {
  get: (req, res) => {
    helper.get((err, results) => {
      if (err) { res.status(404).send(err )}
      res.status(200).json(results);
    })
  },

  post: (req, res) => {
    let userInfo = req.body;
    helper.post(userInfo, (err, results) => {
      if (err) { res.status(404).send(err) }
      res.status(201).send(`Posted userInfo: ${req.body}`)
    })
  },

  update: (req, res) => {
    let userInfo = req.body;
    let index = req.params;
    helper.update(userInfo, index, (err, results) => {
      if (err) { res.status(404).send(err) }
      res.status(200).send(results);
    })
  },

  delete: (req, res) => {
    let index = req.params;
    helper.delete(index, (err, results) => {
      if (err) { res.status(404).send(err) }
      res.status(200).send(results);
    })
  }
}

module.exports = controller;