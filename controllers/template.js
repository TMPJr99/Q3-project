const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  new_party: function(req, res) {
      knex('parties').insert({
        quantity: req.body.quantity
      }).then(()=> res.sendStatus(200))
  },

  new_reservation: (req, res) => {
    knex('time_slots').insert({
      date: req.body.date,
      time_slot: req.body.time_slot,
      table_id: req.body.table_id,
      party_id: req.body.party_id
    }).then(()=> res.sendStatus(200))
  },

  view_time_slots: (req, res) => {
    knex('time_slots').where('party_id', req.params.id)
      .then((result)=> res.json(result))
  }
}
