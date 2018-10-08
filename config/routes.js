//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.post('/parties/new', template.new_party);

  app.post('/time_slots/new', template.new_reservation);

  app.get('/time_slots/:id', template.view_time_slots);

}
