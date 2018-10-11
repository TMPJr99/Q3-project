//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.post('/time_slots/new', template.new_reservation);

  app.get('/time_slots/view', template.view_reservations);

  app.delete('/time_slots/:email', template.delete)

}
