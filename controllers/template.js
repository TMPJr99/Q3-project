const knex = require("../db/knex.js");

module.exports = {

  new_reservation: (req, res) => {
      knex('reservations').insert({
        email: req.body.email,
        date: req.body.date,
        time_start: req.body.time_start,
        quantity: req.body.quantity,
        time_end: req.body.time_end,
        table_id: Math.floor(Math.random() * 10) + 1,
        party_name: req.body.party_name
      }).then(()=> res.sendStatus(200))
  },

  view_reservations: (req, res) => {
    knex('reservations').where('email', req.body.email)
    .then((result)=> {
      res.json(result[0])
    })
  },

  delete: (req, res) => {
      knex('reservations').del().where('email', req.params.email)
      res.sendStatus(200)
  }
}
